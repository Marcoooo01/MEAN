import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obsUnit: Observable<Unit[]>;
  data: Unit[];
  constructor(private http: HttpClient) { }
  getUnitList(): void {
    this.obsUnit = this.http.get<Unit[]>('https://3000-c956ce7b-7563-4dd8-a609-9d68f37d8391.ws-eu01.gitpod.io/api');
    this.obsUnit.subscribe((data: Unit[]) => {this.data = data;});
  }
}

