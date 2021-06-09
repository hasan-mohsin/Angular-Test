import { Component, OnInit } from '@angular/core';
import { GetEmployeeService } from 'src/app/Services/GetEmployee.service';
import {IEmployee} from 'src/app/Models/Employee.model';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { HttpClient } from '@angular/common/http';
import { PostEmployeeService } from 'src/app/Services/post-employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[GetEmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees : any=[
  ];
  userId:number=0;
  id:number=0;
  title="";
  body="";
  index:number=0;
  postId:any=[];
  EmployeeSelected:any;
  
constructor(private _getemployeeService: GetEmployeeService,private _postemployeeService: PostEmployeeService,private _postEditEmployee: PostEmployeeService, private router:Router) 
  {
    this.getEmployees();
  }
postEmployees(value:any){
  debugger
  this._postemployeeService.postEmployee(value).subscribe((data:any) => {
      if(data.userId == value.userId)
      {
        alert("posted");
      }
    })
}
getEmployees(){
   this._getemployeeService.getEmployee().subscribe((res: any) => {
   this.employees = res;
  }, (err) => {
    console.log(err);
  });
}
EditValue(data:any){
  this.index= this.employees.findIndex((e:any)=>e.userId==data.userId );
  //this.userId=data.userId;
  this.id=data.id;
  this.postEditEmployees(this.id,data);
  //this.title=data.title;
  //this.body=data.body;
}
postEditEmployees(id:number,data:any){
  debugger
  this._postemployeeService.postEditEmployee(id).subscribe((data:any) => {
  
  });
  this.router.navigate(['create-employee'])
  this.index=this.employees.findIndex((e:any)=>e.id==data.id)
  this.userId=data.userId;
  this.id=data.id;
  this.title=data.title;
  this.body=data.body
  this.employees.push(this.employees[this.userId]);
  this.employees.push(this.employees[this.id]);
  this.employees.push(this.employees[this.title]);
  this.employees.push(this.employees[this.body]);
}
DeleteValue(id:number){
    let a=this.employees.findIndex((e:any)=>e.id==id)
    this.employees.splice(a,1)
}
goToPage(pageName:string):void{
this.router.navigate([`${pageName}`]);
}
modfiedText:string="";

onEmployeeSelected(value:any){

  this.modfiedText="The vlaue "+value +"was selected from the dropdown list";
  alert(this.modfiedText)
}

ngOnInit() {
  
  }
}
