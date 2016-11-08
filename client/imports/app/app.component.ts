import { Component } from "@angular/core";
//import template from "./app.component.jade";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template: require('./app.component.jade'),
  styles: [ style ]
})
export class AppComponent {
  constructor() {
  }
}
