import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor(private service: WebRequestService) { }

  createSentence(text: String){
    //send web request to create a new sentence
    return this.service.post('sentences', {text});
  }
}
