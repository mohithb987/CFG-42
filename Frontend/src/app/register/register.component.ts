import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service'
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  serverErrorMessages;
  user;
  role;
  student;
  school;
  teacher;
  constructor(private userService: UserService, private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }


  submitForm(form: NgForm){
    this.user = form.form.value;
    this.userService.postUser(this.user, 2).subscribe(
      res => {
        this.router.navigateByUrl('/home');
        form.resetForm();
      },
      err => {

        console.log("error", err);
      }
    );
  }

  submitStudentForm(form: NgForm){
    this.student = form.form.value;
    console.log(this.student);
    this.userService.postStudent(this.student).subscribe(
      res=>{
        this.router.navigateByUrl('/home');
      },
      err=>{
        console.log(err);
      }
    )
  }

  submitSchoolForm(form: NgForm){
    this.school = form.form.value;
    console.log(this.school);
    this.userService.postUser(this.school, 1).subscribe(
      res => {
        this.router.navigateByUrl('/signin');
        form.resetForm();
      },
      err => {

        console.log("error", err);
      }
    );
  }

  submitTeacherForm(form: NgForm){
    this.teacher = form.form.value;
    console.log(this.teacher);
    this.userService.postUser(this.teacher, 0).subscribe(
      res => {
        this.router.navigateByUrl('/signin');
        form.resetForm();
      },
      err => {

        console.log("error", err);
      }
    );
  }
}
