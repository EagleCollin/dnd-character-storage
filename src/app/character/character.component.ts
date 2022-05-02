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
  showCharacterList?: boolean = true;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  // ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.characterService.selectedCharacter.subscribe((currChar) => {
      if (currChar) {
        this.selectedChar = currChar;
      } else {
        this.selectedChar == undefined;
      }
      this.cdr.detectChanges();
    });
  }
}
