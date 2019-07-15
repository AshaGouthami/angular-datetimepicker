import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  minDate=new Date();
  maxDate=new Date();
  startDate=new Date(2019,5,10);
  dateForm:FormGroup;
  today;
  daterange;
  todayflag:boolean;
  daterangeflag:boolean;
// dateList:['ToDay','DateRange']
  constructor(private fb:FormBuilder) { 
    this.dateForm=this.fb.group({
    date:['',Validators.required],
    toDay:['',Validators.required],
    fromDate:['',Validators.required],
    toDate:['',Validators.required]
    });
  }
  Onchange(){
     if( this.dateForm.value.date=='today')
      {
        this.todayflag=true
        this.daterangeflag=false
      this.today="today";
    }
  else {
    this.todayflag=false
    this.daterangeflag=true
    this.daterange="daterange";
  }
}
  ngOnInit() {

  }
  
}


