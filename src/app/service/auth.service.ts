import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { catchError, map, of } from "rxjs";
import { CreateAuthInput, LoginGQL, MeGQL } from "src/generated/graphql";
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
    ) {}

    me() {
        this.spinnerService.show();
        const authToken = localStorage.getItem('AUTH_TOKEN');
        this.transferStateService.set('AUTH_TOKEN', authToken);

        return this.meGQL.fetch().pipe(
            map((response) => {
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
                localStorage.setItem('AUTH_TOKEN', response.data?.login.token || '');
                this.transferStateService.set('AUTH_TOKEN', response.data?.login.token)
                this.transferStateService.set('LOGIN', true);
                this.spinnerService.hide();
            }),
            catchError(this.catchError.bind(this))
        )
    }
}