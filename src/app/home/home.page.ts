import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { DiaryModel } from "../../shared/shared/modals/diary-model";
import { DiaryServices } from "src/shared/shared/services/diary.services";
import { Firebase } from "@ionic-native/firebase/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  name: String;
  note: String;

  constructor(
    public navCtrl: NavController,
    public diaryService: DiaryServices,
    private firebaseCordova: Firebase
  ) {
    // get firebase token
    this.firebaseCordova.getToken().then((token) => {
      console.log(token);
    });
  }

  clear() {
    this.name = "";
    this.note = "";
  }

  saveNote() {
    if (
      this.name === "" ||
      this.note === "" ||
      this.name === undefined ||
      this.note === undefined
    ) {
      alert("Please fill all fields.");
    }

    var req = new DiaryModel();
    req.personname = this.name;
    req.note = this.note;
    this.diaryService.saveDiary(req).subscribe((data) => {
      this.goToNotes();
    });
  }

  goToNotes() {
    this.navCtrl.navigateForward("/note-list");
  }
}
