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
export class CharacterComponent implements AfterViewInit, OnInit {
  selectedChar: Character;
  showCharacterList?;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.characterService.selectedCharacter.subscribe((currChar) => {
      this.selectedChar = currChar;
      console.log(this.selectedChar);
    });
    if (this.selectedChar !== undefined) {
      this.showCharacterList = false;
    } else {
      this.showCharacterList = true;
    }
  }
  ngAfterViewInit(): void {}
}
