import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule, NavController } from "@ionic/angular";

import { NoteListPageRoutingModule } from "./note-list-routing.module";

import { NoteListPage } from "./note-list.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NoteListPageRoutingModule],
  declarations: [NoteListPage],
})
export class NoteListPageModule {
  constructor(public navCtrl: NavController) {}
  
  backToHome(){
    this.navCtrl.pop();
  }
  
}

