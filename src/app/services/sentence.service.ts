import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor(private webReqService: WebRequestService) { }

  createSentence(text: String){
    //send web request to create a new sentence
    return this.webReqService.post('sentences', {text});
  }

  getSentences(){
    //send web request to get all sentences
    return this.webReqService.get('sentences');
  }
  
}
