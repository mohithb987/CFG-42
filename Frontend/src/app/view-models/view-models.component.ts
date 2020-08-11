import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-models',
  templateUrl: './view-models.component.html',
  styleUrls: ['./view-models.component.css']
})
export class ViewModelsComponent implements OnInit {
  categories;
  contents;
  role;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.userService.getCategory().subscribe(
      res =>{
        this.categories = res;
        console.log(this.categories);
      },
      err =>{
        console.log(err);
      }
    );

      this.userService.getContents().subscribe(
        res=>{
          this.contents = res;
          console.log(this.contents)
        },
        err =>{
          console.log(err);
        }
      );
  }

  getCategory(categoryID){
    return this.categories.filter(category => category['_id'] === categoryID);
  }

  getUrl(url){
    return url;
  }
}
