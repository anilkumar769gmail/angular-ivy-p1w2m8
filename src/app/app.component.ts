import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  num1: number = 5;
  num2: number = 6;
  active: boolean =true;

  color: string =`blue ${this.num1}`;

  students: String[] =["a"];
  complexStudents: {}[] = [{one:"two"}];

  result: number = this.num1 + this.num2;

  speak():string{

    return 'hello there!!'
  }

colors: string[] =["Blue", "red"];



}
