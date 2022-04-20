import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrls: ['./character-input.component.css'],
})
export class CharacterInputComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      level: new FormControl(null, Validators.required),
      class: new FormControl(null, Validators.required),
      strength: new FormControl(null, Validators.required),
      int: new FormControl(null, Validators.required),
      dex: new FormControl(null, Validators.required),
      wisdon: new FormControl(null, Validators.required),
      charisma: new FormControl(null, Validators.required),
      constitution: new FormControl(null, Validators.required),
    });
  }

  onFormSubmit() {
    console.log('Submitted!', this.reactiveForm);
  }
}
