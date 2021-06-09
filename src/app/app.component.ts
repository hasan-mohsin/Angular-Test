import { Component } from '@angular/core';
import{ Router } from '@angular/router';
import { IEmployee } from './Models/Employee.model';
import { GetEmployeeService } from './Services/GetEmployee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GetEmployeeService]
})
export class AppComponent {
  title = 'testing';
constructor(private router:Router){}//dependency injection. jab tak yeh available nahi method nai chale ga
goToPage(pageName:string):void{
this.router.navigate([`${pageName}`]);
}
  
}

