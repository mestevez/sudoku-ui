import { Routes } from '@angular/router';
import {GameModule} from "./features/game/game.module";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => GameModule
  }
];
