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

  // Attribute Modifier Scores
  strengthMod:number
  dexMod:number
  intMod:number
  wisMod:number
  conMod:number
  charismaMod:number

  //skill modifier scores
  acrobatics:number
  animal:number
  arcana:number
  athletics:number
  deception:number
  history:number
  insight:number
  intimidation:number
  investigation:number
  medicine:number
  nature:number
  perception:number
  performance:number
  persuasion:number
  religion:number
  sleight:number
  stealth:number
  survival:number

  //saving throw scores
  strengthSave:number
  wisdomSave:number
  dexSave: number
  intSave:number
  charismaSave:number
  conSave:number

  //proficiency bonus
  profBonus:number

  //armor class
  armorClass:number

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.character = this.characterService.showCharacter(this.idx)
      //attribute modifiers
      this.strengthMod=this.characterService.showCharacterMods(this.character.attributes.strength)
      this.dexMod = this.characterService.showCharacterMods(this.character.attributes.dexterity)
      this.intMod = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.wisMod = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.conMod = this.characterService.showCharacterMods(this.character.attributes.constitution)
      this.charismaMod = this.characterService.showCharacterMods(this.character.attributes.charisma)
      //skill modifiers
      this.acrobatics = this.characterService.showCharacterMods(this.character.attributes.dexterity)
      this.animal = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.arcana = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.athletics = this.characterService.showCharacterMods(this.character.attributes.strength)
      this.deception = this.characterService.showCharacterMods(this.character.attributes.charisma)
      this.history = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.insight = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.intimidation = this.characterService.showCharacterMods(this.character.attributes.charisma)
      this.investigation = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.medicine = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.nature = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.perception = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.performance = this.characterService.showCharacterMods(this.character.attributes.charisma)
      this.persuasion = this.characterService.showCharacterMods(this.character.attributes.charisma)
      this.religion = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.sleight = this.characterService.showCharacterMods(this.character.attributes.dexterity)
      this.stealth = this.characterService.showCharacterMods(this.character.attributes.dexterity)
      this.survival = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      //saving throws
      this.conSave = this.characterService.showCharacterMods(this.character.attributes.constitution)
      this.strengthSave = this.characterService.showCharacterMods(this.character.attributes.strength)
      this.wisdomSave = this.characterService.showCharacterMods(this.character.attributes.wisdom)
      this.intSave = this.characterService.showCharacterMods(this.character.attributes.intelligence)
      this.charismaSave = this.characterService.showCharacterMods(this.character.attributes.charisma)
      this.dexSave = this.characterService.showCharacterMods(this.character.attributes.dexterity)

      //proficiency bonus
      this.profBonus = this.characterService.showProfBonus(this.character.level)

      //armor class
      this.armorClass = 10 + this.dexMod
    });

  }

}
