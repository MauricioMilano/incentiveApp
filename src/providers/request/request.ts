import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  constructor(public http: Http) {
    console.log('Hello RequestProvider Provider');
  }
 getUsers(){
  var promise = new Promise((resolve,reject)=>{
    this.http.get("http://localhost:8080/users").subscribe((res:Response)=>{
      resolve(res.json())

    })
  })
  return promise;
}

getProjects(){


  var promise = new Promise((resolve,reject)=>{
    this.http.get("http://localhost:8080/projects").subscribe((res:Response)=>{
      resolve(res.json())

    })
  })
  return promise;
}

public postProjects(data){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  var promise = new Promise((resolve,reject)=>{
    this.http.post("http://localhost:8080/project",data,{headers:headers}).subscribe((res:Response)=>{
      resolve(res.json())
    })
  })
}
}
