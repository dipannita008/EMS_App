import { Component,OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrl: './editcomponent.component.css'
})
export class EditcomponentComponent {
eventData:Event = {};
updated?:boolean;

constructor(private service:EventService, private route:ActivatedRoute){}

ngOnInit(){
  this.updated=false;
  //read id from URL
  //call getevent req pass id
  //assign eventmodel response to local event model
  const id = this.route.snapshot.paramMap.get('id');
  this.getEvent(id);
}
getEvent(id:any){
  //call api pass id 
  //assign response to eventData
  this.service.getEvent(id).subscribe(
    {
    next:(data) => {
      this.eventData = data           //
    },

    error:(error) => {
      alert(error.message)
    }
  }
  );
}


update(){
  var data={
    id:this.eventData?.id,
    name:this.eventData?.name,
    description: this.eventData?.description,       //making json data 
    type:this.eventData?.type
  }
  this.service.updateEvent(data).subscribe(
    {
    next:(data) => {
      this.eventData = data           //
      // this.updated=true;
      // alert("Updated");
    },

    error:(error) => {
      alert(error)
      this.updated=false;
    }
  }
  );
}
}