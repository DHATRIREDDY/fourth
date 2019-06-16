import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a2comp',
  template: `<h2>{{name}}</h2>
             <h2>{{name | lowercase}}</h2>
             <h2>{{name | uppercase}}</h2>
             <h2>{{message | titlecase}}</h2>
             <h2>{{message | slice:3}}</h2>
             <h2>{{name | slice:2:6}}</h2>
             <h2>{{name | slice:4}}</h2>
             <h2>{{crickter | json}}</h2>
             <h2>{{32.4567| number:'2.3-4'}}</h2>
             <h2>{{32.4567| number:'4.3-5'}}</h2>
             <h2>{{32.4567| number:'1.2-3'}}</h2>
             <h2>{{32.4567| number:'3.1-6'}}</h2>
             <h2>{{32.4567| number:'2.5-7'}}</h2>
             <h2>{{0.93 | percent}}</h2>
             <h2>{{0.55| currency}}</h2>
             <h2>{{55| currency:'Rs'}}</h2>
             <h2>{{date}}</h2>
             <h2>{{date | date:'short'}}</h2>
             <h2>{{date | date:'shortDate'}}</h2>
             <h2>{{date | date:'shortTime'}}</h2>



  `,
  styles: []
})
export class A2compComponent implements OnInit {
  public name="world cup";
  public message="World cup welcomes you";
  public crickter={
    "firstname":"virat",
    "lastname":"kohli"
  }
  public date=new Date();

  constructor() { }

  ngOnInit() {
  }

}
