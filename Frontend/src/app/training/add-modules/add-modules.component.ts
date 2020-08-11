import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.css']
})
export class AddModulesComponent implements OnInit {
  categories;
  selected;
  filtered;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getCategory().subscribe(
      res =>{
        this.categories = res;
        console.log(this.categories);
      },
      err =>{
        console.log(err);
      }
    );
  }

  onOptionsSelected() {

  }

  submitForm(form : NgForm){
    const module = {
      'name' : form.form.value.name, 
      'description' : form.form.value.description,
      'url' : form.form.value.url,
      'trainingcategory' : this.selected._id
    }
    this.userService.addModule(module).subscribe(
      res => {
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(err)
      }
    );
  }

}
