import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    role;
    user;
  //inject Router object
  constructor(
    private router: Router,
    private ls: LoginService,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ls.logout();
    }, 0);
  }

  doLogin(ngFormObj: NgForm) {
    let userObj = ngFormObj.value;
      this.ls.login(userObj).subscribe((res) => {
        if (res['message'] == 'invalid username') {
          alert('invalid username..please try again');
          ngFormObj.reset();
        }
        if (res['message'] == 'invalid password') {
          alert('invalid password..please try again');
          ngFormObj.reset();
        }
        if (res['message'] == 'success') {
          //store token in local storage
          localStorage.setItem('signedJwtToken', res['token']);
            
          //update user status in Login Service
          this.ls.LoggedInUsername = res['username'];
          this.ls.isLoggedIn = true;
          this.user = res['user'];
          this.role = this.user.role;
          localStorage.setItem('role', this.role);
          localStorage.setItem('_id', this.user._id);
          localStorage.setItem('school_id', this.user.school_id);
          //navigate to dashboard component
          this.router.navigateByUrl('/home');
        }
        else{
            console.log(res);
        }
      }, 
      (err)=>{
          console.log("error",err);
      }
      );
    }
}
