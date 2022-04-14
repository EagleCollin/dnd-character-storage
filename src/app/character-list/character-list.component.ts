import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../shared/characters/character-model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters=[]
  @Output() selectedChar=new EventEmitter()

  onSelect(char: Character){
    this.selectedChar.emit(char)
  }

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) { }

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


}
