import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

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
    let headers = new Headers({ 'Accept': 'application/json' });

    const loginDetails = {name: pName, password: pPassword};

    this.http.post('/api/test-page/', loginDetails, {
    }).subscribe();
    
      //this.results = data['results'];
  }
}
