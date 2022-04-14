import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../shared/characters/character-model';
import { CharacterService } from '../character-list/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  selectedChar: Character


  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.selectedCharacter.subscribe((currChar) =>{
      this.selectedChar = currChar
    })
  }

}
