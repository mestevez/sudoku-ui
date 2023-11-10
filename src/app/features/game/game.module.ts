import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameRoutingModule} from "./game-routing.module";

@NgModule({
  declarations: [GameRoutingModule.components],
  exports: [GameRoutingModule.components],
  providers: [GameRoutingModule.providers],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
