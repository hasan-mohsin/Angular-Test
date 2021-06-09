import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostEmployeeService {

  constructor(private httpClient:HttpClient) {}
  
  postEmployee(createBody: any)
    {
      return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',createBody);
    }
  postEditEmployee(id: any)
    {
      return this.httpClient.post('https://jsonplaceholder.typicode.com/posts/1',id);
    }
}

