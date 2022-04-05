import { Component, OnInit } from '@angular/core';
import { Character } from '../character-model';
import { CHARACTERS } from '../mock-characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters=CHARACTERS
  selectedChar?: Character;

  onSelect(char: Character){
    this.selectedChar = char
  }

  constructor() { }

  ngOnInit(): void {
  }

}
