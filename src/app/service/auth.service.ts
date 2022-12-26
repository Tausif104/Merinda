import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { catchError, map, of } from "rxjs";
import { CreateAuthInput, LoginGQL, MeGQL } from "src/generated/graphql";
import { ws } from "../graphql.module";
import { queryHasError } from "../utils/graphql";
import { SpinnerService } from "./spinner.service";
import { TransferStateService } from "./transfer-state.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    $loginStatus = new EventEmitter<boolean>(false);
    constructor(
        private transferStateService: TransferStateService,
        private loginGQL: LoginGQL,
        private meGQL: MeGQL,
        private spinnerService: SpinnerService,
        private message: NzMessageService,
        private router: Router
    ) { }

    me() {
        this.spinnerService.show();
        const authToken = localStorage.getItem('AUTH_TOKEN');
        this.transferStateService.set('AUTH_TOKEN', authToken);

        return this.meGQL.fetch().pipe(
            map((response) => {
                if (queryHasError(response)) {
                    throw Error(`Not Authorized`);
                }

                this.transferStateService.set('LOGIN', true)
                return true;
            }),
            catchError(this.catchError.bind(this))
        );
    }

    catchError(e: any) {
        localStorage.removeItem('AUTH_TOKEN');
        this.message.create('error', `${e}`);
        this.spinnerService.hide();
        this.router.navigate(['/login']);
        return of(false);
    }

    login(createAuthInput: CreateAuthInput) {
        this.spinnerService.show();
        return this.loginGQL.mutate({
            createAuthInput
        }).pipe(
            map((response) => {
                const token = response.data?.login.token;
                if (!token) {
                    throw Error(`Token not found`);
                }

                localStorage.setItem('AUTH_TOKEN', token);
                this.transferStateService.set('AUTH_TOKEN', response.data?.login.token)
                this.transferStateService.set('LOGIN', true);
                ws.close(true);
                // ws.connect();
                this.spinnerService.hide();
            }),
            catchError(this.catchError.bind(this))
        )
    }
}