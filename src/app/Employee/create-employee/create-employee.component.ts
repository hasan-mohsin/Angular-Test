import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { IEmployee } from 'src/app/Models/Employee.model';
import { GetEmployeeService } from 'src/app/Services/GetEmployee.service';
import { PostEmployeeService } from 'src/app/Services/post-employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employees:any=[];
  userId:any=0;
  id:any=0;
  title:any="";
  body:any="";
  gender:boolean=false;
  index:any = -1;
  
ngOnInit()
{

}
OnSubmit(value:any)
{
  let userObject = {
    userId:null,
    id: null,
    title: null,
    body:null,
    gender:true
  }
//debugger
userObject['userId']=value.userId,
userObject['id']=value.id,
userObject['title']=value.title,
userObject['body']=value.body;
userObject['gender']=value.gender;

this.employees.push(userObject);

console.log("employees array",this.employees)
}
EditValue(value:any){
  

}
/*  constructor(private _postemployeeService: PostEmployeeService, private _getEditEmployee:GetEmployeeService, private _getemployeeService:GetEmployeeService, private router:Router) {}
 postEmployees(value:any){
    
    this._postemployeeService.postEmployee(value).subscribe((data:any) => {
        if(data.userId == value.userId)
        {
          alert("posted");
          this.router.navigate(['employee-list']);
        }
      })
  }
  // getEmployees()
  // {
  //   this._getemployeeService.getEmployee().subscribe((data:any)=>{
  //     if(data.userId==1)
  //     {
  //       this.gender=true;
  //     }
  //     else
  //     { 
  //       this.gender=false
  //     }
  //   })
  // }
  
  ngOnInit(): void {
    this.getEditEmpoyees();
  }
  getEditEmpoyees()
  {
    
    this._getEditEmployee.getEditEmployee().subscribe((res: any) => {
      this.employees = res;
      this.myObj=res;
      // this.userId=this.myObj["userId"]
      // this.title=this.myObj.title
      // this.userId=this.myObj["userId"]

      console.log("value of res",this.myObj);
     });
  }
  OnSubmit(value:any){
  if(this.index != -1)
    {
      //edit
      this.employees.splice(this.index,1);
      this.add(value)
      this.index=-1;
      
    }
    else{
      //add
     this.add(value)
     //value.reset();
    }
  
  } 
  DeleteValue(id:number){
    //confirm("Are you sure to delete");
    let a= this.employees.findIndex((e:any)=>e.id==id);
    this.employees.splice(a, 1)
    }
  EditValue(data:any){
    
    //this.getEditEmpoyees()
    this.index= this.employees.findIndex((e:any)=>e.id==data.id );
    this.userId=data.userId;
    this.id=data.id;
    this.title=data.title;
    this.body=data.body;
  }
  add(value:any)
  {
    if(value.id!="" && value.email!="" && value.password!=""){
      this.employees.push(value);
      console.log(this.employees);
    }
    else
    {
      alert("please enter all fields")
    }
  }
}
*/}