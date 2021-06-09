import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { FormsModule }from '@angular/forms';
import { CheckoutComponent } from './Components/checkout/checkout.component';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { GetEmployeeService } from './Services/GetEmployee.service';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CheckoutComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    TestComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HttpModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GetEmployeeService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
