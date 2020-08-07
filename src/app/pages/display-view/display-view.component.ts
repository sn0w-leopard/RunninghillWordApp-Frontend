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

  history: Sentence[] = [];
  words: Word[] = [];
  availableWords: Word[] = [];
  types: string[] = [];

  sentenceText: string = '';
  selectedType: string = '';

  constructor(private sentenceService: SentenceService, private wordService: WordService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        //console.log(params);
      }
    );

    this.getSentences();
    this.getWords();

  }

  setSelectedType(type: string){
    //set selected word type
    if (type == this.selectedType){
      //no need to refractor since type hasn't changed
    } else{
    this.selectedType = type;
    this.refractorAvailableWords();
    }
  }

  getSentences(){
    //populate sentences array
    this.sentenceService.getSentences().subscribe((result: any) =>{
      this.history = [...result.sentences];
    });
  }

  getWords(){
    //populate words array 
    this.wordService.getWords().subscribe((result: any) =>{
      this.words = [...result.words];
      this.getTypes();
    });
  }

  getTypes(){
    //get word types from words array
    for (let i = 0; i < this.words.length; i++) {
      if(!this.types.includes(this.words[i].type)){
        this.types.push(this.words[i].type);
      }
    }
    this.selectedType = this.types[0];
    this.refractorAvailableWords();
  }

  refractorAvailableWords(){
    //set words available for use depending on type selected
    this.availableWords = [];
    for (let i = 0; i < this.words.length; i++) {
      if(this.words[i].type == this.selectedType)
      {
        this.availableWords.push(this.words[i]);
      }      
    }
  }

  saveSentence(){
    //parse sentence from textbox and save to db
    this.sentenceService.createSentence(this.sentenceText).subscribe((response: any) => {
      console.log(response);
      this.getSentences();
    });
  }

  addWord(word: string){
    this.sentenceText = this.sentenceText + " " + word;
    //this.getTypes();
  }

}
