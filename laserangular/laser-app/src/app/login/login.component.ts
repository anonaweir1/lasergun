import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'laser-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  name: string;
  password: string;

  constructor(private http: HttpClient) {}

  ngOnInit() 
  {

  }
  
  login(pName, pPassword)
  {
    const loginDetails = {name: pName, password: pPassword};    
    const req = this.http.post('/test-page', loginDetails);

    req.subscribe();
      //this.results = data['results'];
  }
}
