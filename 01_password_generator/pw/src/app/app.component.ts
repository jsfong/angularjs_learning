import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Class property
  password = ''; //Constructor will init to empty value

  onButtonClick(){
    this.password = 'MY PASSWORD!!!';
  }
}
