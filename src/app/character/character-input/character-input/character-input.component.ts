import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrls: ['./character-input.component.css'],
})
export class CharacterInputComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      level: new FormControl(null, [Validators.required, Validators.min(1)]),
      class: new FormControl(null, Validators.required),
      strength: new FormControl(null, [Validators.required, Validators.min(1)]),
      intelligence: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      dexterity: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      wisdom: new FormControl(null, [Validators.required, Validators.min(1)]),
      charisma: new FormControl(null, [Validators.required, Validators.min(1)]),
      constitution: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  onFormSubmit() {
    this.formSubmitted = true;

    this.reactiveForm.reset();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
