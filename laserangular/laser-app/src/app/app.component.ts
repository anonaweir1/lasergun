import { Component } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'laser-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laser';
  data: DataService;

  constructor(dataService: DataService){
    this.data = dataService;
  }
}
