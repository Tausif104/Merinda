import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";
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
        private apollo: Apollo,
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
            catchError((e) => {
                localStorage.removeItem('AUTH_TOKEN');
                this.message.create('error', `${e}`);
                this.spinnerService.hide();
                console.error(e);
                return of(false);
            })
        );
    }

    login(createAuthInput: CreateAuthInput) {
        this.spinnerService.show();
        return this.loginGQL.mutate({
            createAuthInput
        }).subscribe({
            next: (response) => {
                localStorage.setItem('AUTH_TOKEN', response.data?.login.token || '');
                this.transferStateService.set('AUTH_TOKEN', response.data?.login.token)
                this.transferStateService.set('LOGIN', true);
                const token = this.transferStateService.get('LOGIN');
                console.log({token});
                
                console.log(`Login set`);
                
                this.router.navigate(['/admin/posts/new']);
                this.spinnerService.hide();
            },
            error: (e) => {
                this.message.create('error', `${e}`);
                this.spinnerService.hide();
                console.error(e);
            },
            complete: () => console.info('complete') 
        });
    }
}