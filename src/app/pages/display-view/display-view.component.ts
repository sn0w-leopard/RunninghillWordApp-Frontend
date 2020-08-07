import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SentenceService } from '../../services/sentence.service';
import { WordService } from '../../services/word.service';
import { Sentence } from '../../models/sentence.model';
import { Word } from '../../models/word.model';


@Component({
  selector: 'app-display-view',
  templateUrl: './display-view.component.html',
  styleUrls: ['./display-view.component.scss']
})
export class DisplayViewComponent implements OnInit {

  history: Sentence[];
  words: Word[];

  constructor(private sentenceService: SentenceService, private wordService: WordService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    )

    //populate sentences and words arrays
    this.sentenceService.getSentences().subscribe((sentences: Sentence[]) =>{
      console.log(sentences);
      this.history = sentences;
    });

    this.wordService.getWords().subscribe((words: Word[]) =>{
      console.log(words);
      this.words = words;
    });

  }

  saveSentence(newSentence: string){
    //parse sentence from textbox and save to db
    this.sentenceService.createSentence(newSentence).subscribe((response: any) => {
      this.history = response;
    });
  }

}
