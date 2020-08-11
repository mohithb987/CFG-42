import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Http Methods

  postUser(user, role){
    var  data = {};
    if(localStorage.getItem('role') === "1"){
      data = {
      'name' : user.name,
      'email':user.email,
      'password':user.password,
      'phone':user.phone,
      'role' : role,
      'school_id': localStorage.getItem('_id')
      }
    }
    else{
      data = {
        'name' : user.name,
        'email':user.email,
        'password':user.password,
        'phone':user.phone,
        'role' : role
      }
    }
    console.log(user);
    return this.http.post(environment.apiBaseUrl + '/signup', data);
  }

  postStudent(student){
    const data = {
      'school_id': localStorage.getItem('school_id'), 
      'name': student.name, 
      'class': student.class, 
      'section': student.section, 
      'student_id': student.student_id,
      'percentage': student.percentage
    }
    const teacherID = localStorage.getItem('_id')
    console.log(data);
    return this.http.post(environment.apiBaseUrl + '/student/create/'+ teacherID, data);
  }

  postCategory(category){
    const data = {
      'name' : category
    }
    return this.http.post(environment.apiBaseUrl + "/trainingcategory/create/" + localStorage.getItem('_id'), data);
  }

  getCategory(){
    return this.http.get(environment.apiBaseUrl + "/trainingcategories");
  }

  addModule(module){
    console.log(module);
    return this.http.post(environment.apiBaseUrl + '/trainingcontent/create/' + localStorage.getItem('_id'), module)
  }

  createQuery(query){
    console.log(query);
    return this.http.post(environment.apiBaseUrl + "/query/create/" + localStorage.getItem("_id"), query);
  }

  getQueries(){
    return this.http.get(environment.apiBaseUrl + "/query/list/" + localStorage.getItem('_id'));
  }

  getContents(){
    return this.http.get(environment.apiBaseUrl + '/trainingcontents');
  }

  addResponse(res, queryID){
    const response = {
      'response' : res
    }
    console.log(response);
    return this.http.post(environment.apiBaseUrl + "/query/respond/" + localStorage.getItem("_id") + "/" + queryID, response);
  }

  getSchools(){
    return this.http.get(environment.apiBaseUrl + "/list/schools/" + localStorage.getItem('_id'));
  }

  getStudents(){
    const schoolID = {
      'school_id' : localStorage.getItem('_id')
    }
    return this.http.post(environment.apiBaseUrl + '/school/students', schoolID);
  }
}
