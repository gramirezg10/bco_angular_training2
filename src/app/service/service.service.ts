import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Employees } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url:string = environment.urlApi

  constructor(
    public _http: HttpClient
  ) { }

  getAllData():Observable<Employees>{
    return this._http.get<Employees>(this.url);
  }
}
