import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { DiaryModel } from "src/shared/shared/modals/diary-model";
import { HTTP } from "@ionic-native/http/ngx";

@Injectable()
export class DiaryServices {
  constructor(private http: HttpClient, private nativeHttp: HTTP) {}

  private readonly _baseUrl: string = "https://localhost:5001/api";
  private readonly _saveDiaryUrl: string =
    this._baseUrl + "/Diary/DiaryNoteQueue";
  private readonly _getDiaryUrl: string = this._baseUrl+ "/Diary";

  getDiaryNote(): Observable<any> {
    return this.http.get<any>(this._getDiaryUrl);
  }

  saveDiary(data: DiaryModel): Observable<any> {
    return this.http.post<any>(this._saveDiaryUrl, data);
  }
}
