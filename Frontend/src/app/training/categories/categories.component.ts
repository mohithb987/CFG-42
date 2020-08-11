import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }

  addCategory(category){
    console.log(category);
    this.userService.postCategory(category).subscribe(
      res =>{
        this.router.navigateByUrl('/home');
      },
      err =>{
        console.log(err);
      }
    );

  }
}
