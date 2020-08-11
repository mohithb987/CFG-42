import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails;
  role;
  constructor(private userService: UserService, private ls: LoginService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    }
  }

