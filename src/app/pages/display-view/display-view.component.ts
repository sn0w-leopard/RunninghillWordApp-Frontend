import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../../services/sentence.service';

@Component({
  selector: 'app-display-view',
  templateUrl: './display-view.component.html',
  styleUrls: ['./display-view.component.scss']
})
export class DisplayViewComponent implements OnInit {

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
  }

  saveSentence(){
    this.sentenceService.createSentence("this is an app passed sentence").subscribe((response: any) => {
      console.log(response);
    });
  }

}
