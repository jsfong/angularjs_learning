import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Class property
  length = 0;
  password = ''; //Constructor will init to empty value
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;  
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i=0; i< this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

}
