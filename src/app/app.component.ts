import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'password-generator';

  includeLatters: boolean = false;
  includeSymbols: boolean = false;
  icludeNumbers: boolean = false;

  password: string = "";
  length: number = 0;


  onButtonClick() {
    const numbers = "0123456789";
    const letters = "abcdefahjdbnslsl";
    const symbols = "!@#$%^&*()+_";

    let validChar = "";

    if (this.icludeNumbers)
      validChar += numbers;
    if (this.includeSymbols)
      validChar += symbols;
    if (this.icludeNumbers)
      validChar += letters;

    let generatedPassword = "";

    if (!validChar) {
      this.password = ""
      return;
    }

    for (let index = 0; index < this.length; index++) {
      let index = Math.floor(Math.random() * validChar.length)
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;


  }


  onChangeLatter() {
    this.includeLatters = !this.includeLatters;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeNumbers() {
    this.icludeNumbers = !this.icludeNumbers;
  }


  onChangeLength(event: Event) {
    let parsedValue = +(event.target as HTMLInputElement).value;
    if (isNaN(parsedValue)) return;

    if (parsedValue > 20) parsedValue = 20;

    this.length = parsedValue;



  }



}
