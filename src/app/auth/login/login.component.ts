import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/panel/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServices:AuthService) { }

  ngOnInit(): void {
  }

}
