import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  workshop:String="../../assets/Images/workshop.svg";
  logo:String="../../assets/Images/logo1.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
