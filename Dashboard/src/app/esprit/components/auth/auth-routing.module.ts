import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
        { path: 'signupPartner', loadChildren: () => import('./signup-partner/signup-partner.module').then(m => m.SignupPartnerModule) },
        { path: 'forgetpassword', loadChildren: () => import('./forget-pass/forget-pass.module').then(m => m.ForgetPassModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
