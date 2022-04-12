import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes} from "@angular/router";
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterDetailsComponent } from "./character/character-details/character-details.component";



const appRoutes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch:'full'},
  {path: 'characters', component: CharacterListComponent},

  {path: 'character-details', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
