import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id:number=0;
  name:string="";
  email:string="";
  password:string="";
  employee:any=[];
  employees:any=[];
  gender:string="";
  language:string="";
  constructor(private router:Router) { }
  onSubmit(value:any)
  {
    console.log(value)
    let obj ={
     id:0,
     name:"",
     email:"",
     password:"",
     gender:"",
     language:""
   };
    obj.id=value.id;
    obj.name=value.name;
    obj.email=value.email;
    obj.password=value.password;
    obj.gender=value.gender;
    obj.language=value.language;
    this.employees.push(obj);
  }
  onDelete(id:number)
  {
    let index=this.employees.findIndex((e:any)=>e.id===id)
    this.employees.splice(index,1)
  }
  onEdit(value:any)
  { 
    let index=this.employees.findIndex((e:any)=>e.id===value.id)
    this.id=value.id;
    this.name=value.name;
    this.email=value.email;
    this.password=value.password;
    this.gender=value.gender;
  }
  
  
  ngOnInit(): void {
  }

}
