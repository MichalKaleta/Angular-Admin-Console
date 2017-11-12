import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable() 
export class GetList {

	constructor(private http:Http){}

	getList(){
		//return this.http.get('https://employees-base.firebaseio.com/');
		return this.http.get('../assets/employees.json')
		.map(
			(response: Response)=> {
				var data =response.json();	
				return data;
				}
			);
	}
} 


