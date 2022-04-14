import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { CharacterInputComponent } from './character/character-input/character-input/character-input.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-router.module';
import { CharactersComponent } from './shared/characters/characters.component';
import { CharacterHomeComponent } from './character-home/character-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterInputComponent,
    CharactersComponent,
    CharacterHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
