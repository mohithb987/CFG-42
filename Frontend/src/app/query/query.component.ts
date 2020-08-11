import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  queries;
  role;
  constructor(private userService: UserService, private router : Router ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.userService.getQueries().subscribe(
      res =>{
        this.queries = res;
        console.log(this.queries)
      },
      err => {
        console.log(err);
      }
    );

  }

  addQuery(q){
    console.log(q);
    const query = {
      'description' : q
    }
    this.userService.createQuery(query).subscribe( 
      res =>{
        console.log(res['query']);
      },
      err =>{
        console.log(err);
      }
    );
  }

  addResponse(response, queryID){
    console.log(response, queryID);
    this.userService.addResponse(response, queryID).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
      }
    );
  }

}
