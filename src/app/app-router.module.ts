import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CharacterHomeComponent } from './character-home/character-home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { CharacterInputComponent } from './character/character-input/character-input/character-input.component';
import { CharacterComponent } from './character/character.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharacterComponent,
    children: [
      { path: '', component: CharacterHomeComponent },
      { path: 'new', component: CharacterInputComponent },
    ],
  },
  { path: 'characters/:id', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
