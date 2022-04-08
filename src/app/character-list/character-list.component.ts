import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character-model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters=[]
  selectedChar?: Character;

  onSelect(char: Character){
    this.selectedChar = char
  }

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters = this.characterService.showCharacters();
    this.characterService.characterListChange.subscribe((characters: Character[]
      )=>{
      this.characters = characters;
    });
  }

    removeCharacter(idx: number){
      this.characterService.deleteCharacter(idx)
    }

    addCharacter(character: Character){
      this.characterService.addCharacter(character)
    }
}
