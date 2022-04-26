import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Character } from '../shared/characters/character-model';
import { CharacterService } from '../character-list/character.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements AfterViewInit {
  selectedChar: Character;

  constructor(
    private characterService: CharacterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.characterService.selectedCharacter.subscribe((currChar) => {
      this.selectedChar = currChar;
      this.cdr.detectChanges();
    });
  }
}
