import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  obsUnit: Observable<Unit[]>;
  data: Unit[];

  postObserver : Observable<Object>;
  postData : Object;

  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.obsUnit = this.http.get<Unit[]>('https://3000-cf601d4b-d17d-4ffa-9cec-9773bcea6819.ws-eu01.gitpod.io/api');
    this.obsUnit.subscribe((data: Unit[]) => {this.data = data;});
  }

  addUnit(newUnit: HTMLInputElement, newCost: HTMLInputElement, newHitSpeed: HTMLInputElement): boolean {
    let newData: Unit = new Unit();
    newData.Unit = newUnit.value;
    newData.Cost = newCost.value;
    newData.Hit_Speed = newHitSpeed.value;
    let headers =  {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.postObserver = this.http.post('https://3000-cf601d4b-d17d-4ffa-9cec-9773bcea6819.ws-eu01.gitpod.io/api/add', JSON.stringify(newData),headers)
    this.postObserver.subscribe(data => this.postData = data);
    return true;
  }
}

