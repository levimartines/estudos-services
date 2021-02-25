import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  depName = '';

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.departmentService.add({name: this.depName});
    this.clear();
  }

  clear(): void {
    this.depName = '';
  }
}
