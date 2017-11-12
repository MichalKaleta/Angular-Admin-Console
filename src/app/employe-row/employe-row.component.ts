import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'tr [app-employe-row]',
  templateUrl: './employe-row.component.html',
  styleUrls: ['./employe-row.component.css']
})
export class EmployeRowComponent implements OnInit {
  
	@Input() employe={};
  constructor() { }

  ngOnInit() {}


}
