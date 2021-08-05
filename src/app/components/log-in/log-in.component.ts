import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { loginUser } from '../../model/auth.model';
import {AuthService} from "../../services/auth.service"
@Component({
  selector: 'app-log-in app-click-me',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']

})
export class LogInComponent implements OnInit {
  LoginUserData: loginUser = {userName : "", password: "" , imeiOrIP: "IBU-192.168.20.43", otp: "",tpin: "2784" };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
loginUser(){
  this.authService.loginUser(this.LoginUserData)

 
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )
  // console.log('buttonclick');
}
}

