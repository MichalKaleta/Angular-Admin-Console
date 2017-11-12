import { Component, OnInit} from '@angular/core';
import { GetList } from '../GetList.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-employe-table',
  templateUrl: './employe-table.component.html',
  styleUrls: ['./employe-table.component.css']
})
export class EmployeTableComponent implements OnInit {

  isDisabled:Boolean=true;
  mode:String="Admin";
  setters:HTMLCollection;
  roleSelect:HTMLElement;
  positionSelect:HTMLElement;
  title:String="Avalible only in Administrator mode";
  focusIndex:number =0;
  employees:Object[]=[{}];

  constructor(private GetList: GetList) { }

  ngOnInit() {
  	this.GetList.getList()
  	.subscribe(	
  			(employeList: Object[])=>{ this.employees=employeList	},
  			(error)=>console.log(error)	);
   this.roleSelect=document.getElementById('role');
   this.positionSelect=document.getElementById("position");
   this.setters=document.getElementsByClassName("setter");
  }

  onAddRow(){
    
    this.employees.push({id:this.employees.length+1,name:"",role:"",position:"",
      exp:"",descrShort:"",descrLong:""})
  }
  onFocus(ev){
    var row =ev.target.parentElement;
    var id =row.getElementsByTagName('td')[0].innerHTML;
    this.focusIndex =id-1;
    var roleOptions=this.roleSelect.childNodes;
    var positionOptions =this.positionSelect.childNodes;
    
    this.optionSelect(roleOptions,'role')
    this.optionSelect(positionOptions,'position')
    
  }
  optionSelect(options,prop){
    for(let i=0; i<options.length;i++){
        var option= <HTMLOptionElement>options[i];
      if(option.value===this.employees[this.focusIndex][prop]){
        option.selected=true
      }else{ option.selected=false;
       }
    }
  }
  onSave(){
    for(let i=0;  i<this.setters.length;  i++){
      var field= <HTMLInputElement>this.setters[i];  
      var value =field.value;
      var property =field.id;
      this.employees[this.focusIndex][property] = value; 
    }
  }
  onCancel(){
    for(let i=0;  i<this.setters.length;  i++){
      var field= <HTMLInputElement>this.setters[i];
      var property = field.id;   
      field.value = this.employees[this.focusIndex][property];
    }   
  }
  onSwitchMode(){
   
     if(this.isDisabled){  
         this.isDisabled= false;
         this.mode="User";
         this.title=""
       }
     else{
         this.isDisabled= true;
         this.mode="Admin";
         this.title="Avalible only in Administrator mode"

        };
  }
  onDelete(){

      this.employees.splice(this.focusIndex,1); 
      this.renumerate();
  }
  renumerate(){
    this.employees.forEach((element,index)=>{
          element['id']=index+1;
    })
  }
}
