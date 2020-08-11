import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getStudents().subscribe(
      res => {
        this.students = res;
        console.log(this.students);
      },
      err => {
        console.log(err);
      }
    );
  }

}
