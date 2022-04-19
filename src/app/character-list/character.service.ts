import { EventEmitter, Injectable } from '@angular/core';
import { Character } from '../shared/characters/character-model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  selectedCharacter = new EventEmitter();
  characterListChange = new EventEmitter();
  abilityModifier = new EventEmitter();

  private myCharacters: Character[] = [
    {
      name: 'James',
      class: 'Wizard',
      level: 4,
      background: 'Charlatan',
      race: 'Elf',
      alignment: 'Chaotic Good',
      attributes: {
        strength: 15,
        dexterity: 18,
        intelligence: 14,
        charisma: 15,
        wisdom: 17,
        constitution: 12,
      },
    },
    {
      name: 'Ron',
      class: 'Barbarian',
      level: 2,
      background: 'Criminal',
      race: 'Ogre',
      alignment: 'Neutral Evil',
      attributes: {
        strength: 14,
        dexterity: 12,
        intelligence: 17,
        charisma: 13,
        wisdom: 18,
        constitution: 15,
      },
    },
    {
      name: 'Nathan',
      class: 'Artificer',
      level: 10,
      background: 'Scholar',
      race: 'Human',
      alignment: 'Chaotic Neutral',
      attributes: {
        strength: 16,
        dexterity: 14,
        intelligence: 16,
        charisma: 10,
        wisdom: 14,
        constitution: 14,
      },
    },
    {
      name: 'Charlotte',
      class: 'Warlock',
      level: 14,
      background: 'Mercenary',
      race: 'Half-Elf',
      alignment: 'Lawful Good',
      attributes: {
        strength: 12,
        dexterity: 10,
        intelligence: 10,
        charisma: 17,
        wisdom: 14,
        constitution: 15,
      },
    },
  ];

  showCharacters() {
    return this.myCharacters.slice();
  }

  addCharacter(character: Character) {
    this.myCharacters.push(character);
  }

  deleteCharacter(idx: number) {
    if (idx >= this.myCharacters.length || idx < 0) {
      return this.myCharacters;
    } else {
      this.myCharacters.splice(idx, 1);
      this.characterListChange.emit(this.myCharacters.slice());
    }
  }

  showCharacter(idx: number) {
    return this.myCharacters.slice()[idx];
  }

  showCharacterMods(attribute: number) {
    let abilityModifier = Math.floor((attribute - 10) / 2);
    return abilityModifier;
  }

  showProfBonus(level: number) {
    let profBonus = 1 + Math.ceil(level / 4);
    return profBonus;
  }
}
