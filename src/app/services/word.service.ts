import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private webReqService: WebRequestService) { }

  getWordsByType(type: String){
    //send web request to get all words
    return this.webReqService.get('words/'+type);
  }

  getWords(){
    //send web request to get all words by type
    return this.webReqService.get('words');
  }
}
