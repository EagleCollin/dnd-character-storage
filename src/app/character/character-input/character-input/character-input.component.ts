import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrls: ['./character-input.component.css'],
})
export class CharacterInputComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      level: new FormControl(null, Validators.required),
      class: new FormControl(null, Validators.required),
      strength: new FormControl(null, Validators.required),
      intelligence: new FormControl(null, Validators.required),
      dexterity: new FormControl(null, Validators.required),
      wisdom: new FormControl(null, Validators.required),
      charisma: new FormControl(null, Validators.required),
      constitution: new FormControl(null, Validators.required),
    });
  }

  onFormSubmit() {
    this.formSubmitted = true;

    this.reactiveForm.reset();
  }
}
