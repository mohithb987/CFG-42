import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role;
  constructor(private ls: LoginService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

  onLogout(){
    this.ls.logout();
    window.location.reload();
  }
}
