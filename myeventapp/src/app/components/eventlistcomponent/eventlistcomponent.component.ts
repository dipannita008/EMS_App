import { getLocaleCurrencyCode } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-eventlistcomponent',
  templateUrl: './eventlistcomponent.component.html',
  styleUrl: './eventlistcomponent.component.css'
})
export class EventlistcomponentComponent {

  eventlist?:Event[];  //how to declare array in TS
constructor(private service:EventService){
}
ngOnInit(){
  this.getAll();       //calling function
}
getEventId(id:any){
  
}
getAll():void{
  this.service.getEvents().subscribe(
    {
    next:(data) => {
      this.eventlist = data           //
    },

    error:(error) => {
      alert(error.message)
    }
  }
  );
}

delete(id:any):void{
this.service.deleteEvent(id).subscribe({
  next:(id)=>{
    alert(id.status);
    this.getAll();
  }, 
  error:(err)=>{
  alert(err.message);}
});
}
}
