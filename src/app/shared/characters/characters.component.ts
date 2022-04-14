import { Component, Input, OnInit } from '@angular/core';
import { Character } from './character-model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() charIdx: number
  @Input() character: Character

  constructor() { }

  ngOnInit(): void {
  }

}
