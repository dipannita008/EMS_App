import { Component} from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-addeventcomponent',
  templateUrl: './addeventcomponent.component.html',
  styleUrl: './addeventcomponent.component.css'
})
export class AddeventcomponentComponent {
      eventData:Event ={
         name:'',
         description: '',
         type : ''
      }
      constructor(private service:EventService){}
      
      addEvent():void{
        var data={
          name:this.eventData.name,
          description: this.eventData.description,       //making json data 
          type:this.eventData.type
        }
        this.service.addEvent(data).subscribe({         //assigning to service where we are calling addevent
          next: (msg) =>{
              alert(msg.status)
        },
          error: (err) => {
            alert(err)
          }
        });
      }

      deleteEvent():void{
        
      }
}
