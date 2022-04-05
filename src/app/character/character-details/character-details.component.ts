import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/character-model';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input()character?: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
