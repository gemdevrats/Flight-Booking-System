import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router,private auth:FirebaseAuthService) { }
  
  signup:any = this.formBuilder.group({
    userName:['',[this.validateEmail,Validators.required]],
    password:['',[Validators.required,this.validatePassword,Validators.minLength(8)]],
    confirmPassword:['',[Validators.required,Validators.minLength(8),this.validateConfirmPassword]]
  });

  validateEmail(emails:any){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(emails.value) ? null : emails;
  }

  validatePassword(password:any){
    console.log(password.value);
    localStorage.setItem('confirmPassword',password.value);
    return /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(password.value) ? null : password;
  }

  validateConfirmPassword(password:any){
    let confirmPassword = localStorage.getItem('confirmPassword');

    return  password.value=== confirmPassword ? null : password;
  }

  signUp(){
    this.auth.SignUp(this.signup.get('userName')?.value,this.signup.get('password')?.value)
    this.router.navigate(['/']);
  }


  ngOnInit(): void {
    localStorage.setItem('confirmPassword','');
  }

}
