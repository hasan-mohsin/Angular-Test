import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { SigninComponent } from './Components/signin/signin.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import {TestComponent} from './test/test.component';
const routes: Routes = [
  //{path:'signin',component:SigninComponent},
  //{path:'checkout',component:CheckoutComponent},
 // {path:'',component:EmployeeListComponent},
  {path:'test',component:TestComponent},
  
  {path:'employee-list',component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
