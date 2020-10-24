import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Employees } from '../models/employees.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employees: Employees[] = [];

  constructor(
    public _service: ServiceService
  ) { }

  ngOnInit(): void {
    this._service.getAllData().subscribe(
      res => this.organize(res)
    )
  }

  organize(data){
    this.employees = data;
  }

}
