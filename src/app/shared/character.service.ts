import { EventEmitter, Injectable } from "@angular/core";
import { Character } from "./character-model";

@Injectable({
  providedIn: "root",
})
export class CharacterService{
  characterListChange = new EventEmitter()

  private myCharacters: Character[] = [

    {name: "James", class: "Wizard", level: 4,background: "Charlatan", race: "Elf",alignment:"Chaotic Good"},
    {name: "Ron", class: "Barbarian", level: 2, background: "Criminal", race: "Ogre", alignment: "Neutral Evil"},
    {name: "Nathan", class: "Artificer", level: 10, background: "Scholar", race: "Human", alignment: "Chaotic Neutral"},
    {name: "Charlotte", class: "Warlock", level: 8, background: "Mercenary", race: "Half-Elf", alignment: "Lawful Good"}
  ]

  showCharacters(){
    return this.myCharacters.slice()
  }

  addCharacter(character: Character){
    this.myCharacters.push(character)
  }

  deleteCharacter(idx: number){
    if(idx>= this.myCharacters.length || idx<0){
      return this.myCharacters
    }else{
      this.myCharacters.splice(idx, 1)
      this.characterListChange.emit(this.myCharacters.slice())
    }
  }
}
