import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExist:boolean=false;
  mensajeError:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(user: string) {
    console.log('user', user);
    if(user.length>0&&user.trim()!==""){
      this.errorExist=false;
      this.mensajeError="";
      this.router.navigate(['/list', user]);
    }else{
      this.errorExist=true;
      this.mensajeError="please enter a username";
    }
    
  }

}
