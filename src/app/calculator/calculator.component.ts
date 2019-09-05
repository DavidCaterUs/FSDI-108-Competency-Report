import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber : number = 0;
  secondNumber : number =0;
  result : string = '';


  constructor() { }

  ngOnInit() {}

  sum(){
    this.result = (this.firstNumber + this.secondNumber).toFixed(2);
  }

  subtract(){
    this.result = (this.firstNumber - this.secondNumber).toFixed(2);
  }

  multiply(){
    this.result = (this.firstNumber * this.secondNumber).toFixed(2);
  }

  division(){
    this.result = (this.firstNumber / this.secondNumber).toFixed(2);
  }

}
