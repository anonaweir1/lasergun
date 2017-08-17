import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams,HttpHeaders,HttpErrorResponse } from '@angular/common/http';

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
    }).subscribe(data =>{
      alert(data),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) 
        {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } 
        else
        {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        } 
      }
    });

    //this.results = data['results'];
  }
}
