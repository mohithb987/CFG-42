import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools;
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getSchools().subscribe(
      res=>{
        this.schools = res
        console.log(this.schools);
      }
    );
  }

}
