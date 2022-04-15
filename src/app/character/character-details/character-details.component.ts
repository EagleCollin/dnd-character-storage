import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Character, Attributes } from 'src/app/shared/characters/character-model';
import { CharacterService } from 'src/app/character-list/character.service';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  idx: number;
  character: Character;

  //Modifier Scores
  strengthMod
  dexMod
  intMod
  wisMod
  conMod
  charismaMod

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.character = this.characterService.showCharacter(this.idx)
      this.strengthMod=this.characterService.showCharacterMods(this.character.attributes.strength)
      this.dexMod = this.characterService.showCharacterMods(this.character.attributes.dexterity)
      this.intMod = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.wisMod = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.conMod = this.characterService.showCharacterMods(this.character.attributes.constitution)
      this.charismaMod = this.characterService.showCharacterMods(this.character.attributes.charisma)
    });

  }

}
