import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Character,
  Attributes,
} from 'src/app/shared/characters/character-model';
import { CharacterService } from 'src/app/character-list/character.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  idx: number;
  character: Character;
  reactiveForm: FormGroup;

  // Attribute Modifier Scores
  modifierScores = {
    strengthMod: 0,
    dexMod: 0,
    intMod: 0,
    wisMod: 0,
    conMod: 0,
    charismaMod: 0,
  };

  //skill modifier scores
  skills = {
    acrobatics: 0,
    animal: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleight: 0,
    stealth: 0,
    survival: 0,
  };

  //saving throw scores
  savingThrows = {
    strengthSave: 0,
    wisdomSave: 0,
    dexSave: 0,
    intSave: 0,
    charismaSave: 0,
    conSave: 0,
  };

  //proficiency bonus
  profBonus: number;

  //armor class
  armorClass: number;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      class: new FormControl(null, Validators.required),
      level: new FormControl(null, Validators.required),
      background: new FormControl(null),
      race: new FormControl(null, Validators.required),
      alignment: new FormControl(null),
      // Attributes
      strength: new FormControl(null, Validators.required),
      dexterity: new FormControl(null, Validators.required),
      constitution: new FormControl(null, Validators.required),
      wisdom: new FormControl(null, Validators.required),
      intelligence: new FormControl(null, Validators.required),
      charisma: new FormControl(null, Validators.required),
      inspiration: new FormControl(null),
      // Saving Throws
      strengthSave: new FormControl(null, Validators.required),
      strengthSaveProf: new FormControl(null),
      dexteritySave: new FormControl(null, Validators.required),
      dexteritySaveProf: new FormControl(null),
      conSave: new FormControl(null, Validators.required),
      conSaveProf: new FormControl(null),
      wisdomSave: new FormControl(null, Validators.required),
      wisdomSaveProf: new FormControl(null),
      intSave: new FormControl(null, Validators.required),
      intSaveProf: new FormControl(null),
      charismaSave: new FormControl(null, Validators.required),
      charismaSaveProf: new FormControl(null),
      // Skills and Proficiencies
      acrobatics: new FormControl(null, Validators.required),
      acrobaticsProf: new FormControl(null),
      animal: new FormControl(null, Validators.required),
      animalProf: new FormControl(null, Validators.required),
      arcana: new FormControl(null, Validators.required),
      athletics: new FormControl(null, Validators.required),
      deception: new FormControl(null, Validators.required),
      history: new FormControl(null, Validators.required),
      insight: new FormControl(null, Validators.required),
      intimidation: new FormControl(null, Validators.required),
      investigation: new FormControl(null, Validators.required),
      medicine: new FormControl(null, Validators.required),
      nature: new FormControl(null, Validators.required),
      perception: new FormControl(null, Validators.required),
      performance: new FormControl(null, Validators.required),
      persuasion: new FormControl(null, Validators.required),
      religion: new FormControl(null, Validators.required),
      sleight: new FormControl(null, Validators.required),
      stealth: new FormControl(null, Validators.required),
      survival: new FormControl(null, Validators.required),
      //other inputs
      otherProfs: new FormControl(null),
      passivePerception: new FormControl(null, Validators.required),
      initiative: new FormControl(null, Validators.required),
      movement: new FormControl(null, Validators.required),
      hpMax: new FormControl(null, Validators.required),
      currentHP: new FormControl(null, Validators.required),
      tempHP: new FormControl(null),
      totalHP: new FormControl(null, Validators.required),
      remainingHD: new FormControl(null, Validators.required),
      deathSuccess: new FormControl(null),
      deathFail: new FormControl(null),
      //equipment
      cp: new FormControl(null),
      sp: new FormControl(null),
      ep: new FormControl(null),
      gp: new FormControl(null),
      pp: new FormControl(null),
      //personality
      ideals: new FormControl(null),
      bonds: new FormControl(null),
      flaws: new FormControl(null),
      features: new FormControl(null),
    });
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.character = this.characterService.showCharacter(this.idx);
      //attribute modifiers
      this.modifierScores.strengthMod = this.characterService.showCharacterMods(
        this.character.attributes.strength
      );
      this.modifierScores.dexMod = this.characterService.showCharacterMods(
        this.character.attributes.dexterity
      );
      this.modifierScores.intMod = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.modifierScores.wisMod = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      this.modifierScores.conMod = this.characterService.showCharacterMods(
        this.character.attributes.constitution
      );
      this.modifierScores.charismaMod = this.characterService.showCharacterMods(
        this.character.attributes.charisma
      );
      //skill modifiers
      this.skills.acrobatics = this.characterService.showCharacterMods(
        this.character.attributes.dexterity
      );
      this.skills.animal = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      this.skills.arcana = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.skills.athletics = this.characterService.showCharacterMods(
        this.character.attributes.strength
      );
      this.skills.deception = this.characterService.showCharacterMods(
        this.character.attributes.charisma
      );
      this.skills.history = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.skills.insight = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      this.skills.intimidation = this.characterService.showCharacterMods(
        this.character.attributes.charisma
      );
      this.skills.investigation = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.skills.medicine = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      this.skills.nature = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.skills.perception = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      this.skills.performance = this.characterService.showCharacterMods(
        this.character.attributes.charisma
      );
      this.skills.persuasion = this.characterService.showCharacterMods(
        this.character.attributes.charisma
      );
      this.skills.religion = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.skills.sleight = this.characterService.showCharacterMods(
        this.character.attributes.dexterity
      );
      this.skills.stealth = this.characterService.showCharacterMods(
        this.character.attributes.dexterity
      );
      this.skills.survival = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      //saving throws
      this.savingThrows.conSave = this.characterService.showCharacterMods(
        this.character.attributes.constitution
      );
      this.savingThrows.strengthSave = this.characterService.showCharacterMods(
        this.character.attributes.strength
      );
      this.savingThrows.wisdomSave = this.characterService.showCharacterMods(
        this.character.attributes.wisdom
      );
      this.savingThrows.intSave = this.characterService.showCharacterMods(
        this.character.attributes.intelligence
      );
      this.savingThrows.charismaSave = this.characterService.showCharacterMods(
        this.character.attributes.charisma
      );
      this.savingThrows.dexSave = this.characterService.showCharacterMods(
        this.character.attributes.dexterity
      );

      //proficiency bonus
      this.profBonus = this.characterService.showProfBonus(
        this.character.level
      );

      //armor class
      this.armorClass = 10 + this.modifierScores.dexMod;
    });
  }

  onClickCheck(event, skill) {
    if (event.target.checked) {
      this.savingThrows[skill] += this.profBonus;
    } else {
      this.savingThrows[skill] -= this.profBonus;
    }
  }

  onClickSkill(event, skill) {
    if (event.target.checked) {
      this.skills[skill] += this.profBonus;
    } else {
      this.skills[skill] -= this.profBonus;
    }
  }

  displaySign(value) {
    return value >= 0 ? '+' : '';
  }

  // onShowCharacters() {
  //   this.router.navigate(['characters']);
  // }

  onCharacterChange() {
    console.log('Submitted:', this.reactiveForm);
  }
}
