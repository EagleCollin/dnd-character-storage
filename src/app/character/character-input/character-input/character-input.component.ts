import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrls: ['./character-input.component.css'],
})
export class CharacterInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    console.log('Submitted!');
  }
}
