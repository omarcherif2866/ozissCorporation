import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { User } from 'src/app/components/models/user';
import { AuthService } from 'src/app/components/services/auth/auth.service';

@Component({
  selector: 'app-signin',

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit{
  password!: string;
  form!: FormGroup;
  user!: User;
  constructor( private formBuilder: FormBuilder, private service: AuthService  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 4
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
    }

    signin() {
      if (this.form.valid) {
        const t = {
          email: this.form.value.email,
          password: this.form.value.password,
        };
  
        this.service.signIn(t).subscribe(
          (data) => {
            this.user = data;
            localStorage.setItem('user_id', data._id); // Stocker l'ID utilisateur
            localStorage.setItem('user_email', data.email); // Stocker l'email utilisateur
            localStorage.setItem('loggedIn', 'true'); // Stocker l'état de connexion
            console.log('User ID:', data._id);
            console.log('User ID stored in localStorage:', localStorage.getItem('user_id'));
            console.log('User email stored in localStorage:', localStorage.getItem('user_email'));
            console.log('connexion réussie');
            this.service.setLoggedIn(true);
            console.log("signin successful");
          },
          (error) => {
            console.error(error);
            console.log("signin error");
          }
        );
      }
    }
}
