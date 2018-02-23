import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  email = "me@example.com";
  lista: any[];
  onKeyUp(){
    console.log(this.email);
  }
  constructor() { }

  ngOnInit() {
  }

}
