import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {GameService} from "./game.service";
import {GameCreateComponent} from "./game-create/game-create.component";
import {GameLoadComponent} from "./game-load/game-load.component";


const routes: Routes = [
  {
    path: 'game',
    children: [
      {
        path: '',
        component: GameCreateComponent,
      },
      {
        path: ':gameCode',
        component: GameLoadComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {
  static components = [GameCreateComponent, GameLoadComponent];
  static providers = [GameService];
}
