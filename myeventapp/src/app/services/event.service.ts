import { Injectable } from '@angular/core'; //to mark the class as injectable; i.e can inject dependencies.
import { HttpClient } from '@angular/common/http';// to perform HTTP Requests & handles Reponse
import { Event } from '../models/event.model';
import { Observable } from 'rxjs'; // to enable asynchronous operations; http requests

const baseUrl = 'http://localhost:5051/api/Event'; //controller name after api

@Injectable({ //this means the event service class is a provider and can be injected into various angular components
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient){} //http - object (Injecting the httpclient service)

  addEvent(data:any):Observable<any>{    //returns an observable of type any. observable gives the subscribe method
    return this.http.post(baseUrl,data);  // return obj-> json
  }
  getEvent(id:any):Observable<Event>{     //while fetching we pass the original data of a specific type; i.e here Event 
    return this.http.get<Event>(baseUrl+"/GetEventById?id="+id);
  }
  getEvents():Observable<Event[]>{     //while fetching we pass the original data of a specific type; i.e here Event 
    return this.http.get<Event[]>(baseUrl+ '/GetEvents');          //for url
  }
  deleteEvent(id:any):Observable<any>{
    return this.http.delete(baseUrl+'?id='+id);  //delete()
  }
  updateEvent(data:any):Observable<any>{
    return this.http.put(baseUrl,data);
  }
}
