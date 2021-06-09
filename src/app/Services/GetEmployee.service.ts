import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class GetEmployeeService {
    constructor(private _http:HttpClient) {}
    getEmployee(){  
    return this._http.get("https://jsonplaceholder.typicode.com/posts");
    }
    getEditEmployee(){  
      return this._http.get("https://jsonplaceholder.typicode.com/posts/1");
  }
}
