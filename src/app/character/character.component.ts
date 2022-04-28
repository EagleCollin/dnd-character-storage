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
import { relative } from 'path';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  selectedChar: Character;
  showCharacterList = true;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.selectedCharacter.subscribe((currChar) => {
      this.selectedChar = currChar;
    });
    if (this.router.url.includes('/characters/')) {
      this.showCharacterList = false;
      return this.showCharacterList;
    }
  }
}
