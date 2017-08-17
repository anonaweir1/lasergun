import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, AddEmployeeComponent]
})
export class AppModule { }
