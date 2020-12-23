import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { DiaryServices } from "src/shared/shared/services/diary.services";
import { DiaryModel } from "src/shared/shared/modals/diary-model";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.page.html",
  styleUrls: ["./note-list.page.scss"],
})
export class NoteListPage implements OnInit {
  data: any = [];

  constructor(
    public navCtrl: NavController,
    public diaryService: DiaryServices
  ) {}

  ngOnInit() {
    this.diaryService.getDiaryNote().subscribe((data) => {
      this.data = data;
    });
  }

  backToHome() {
    this.navCtrl.navigateForward("/home");
  }
}
