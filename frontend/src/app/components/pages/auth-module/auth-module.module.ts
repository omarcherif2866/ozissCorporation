import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { NavbarStyleOneComponent } from '../../common/navbar-style-one/navbar-style-one.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [] // Ajouté pour rendre les composants disponibles à d'autres modules

})
export class AuthModuleModule { }
