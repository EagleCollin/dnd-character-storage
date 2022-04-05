import { Component, OnInit } from '@angular/core';
import { Character } from '../character-model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character= {name: "James", class: "Wizard", level: 4}

  constructor() { }

  ngOnInit(): void {
  }

}
