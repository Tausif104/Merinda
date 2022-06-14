import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-archive-alpha',
  templateUrl: './archive-alpha.component.html',
  styleUrls: ['./archive-alpha.component.scss']
})
export class ArchiveAlphaComponent implements OnInit, OnDestroy {
  dateAddress = {
    "city":"Steven Job",
    "designation":"OneZero",
    "date": "July 15",
    "time": "5 min read"
   };
  archiveArr = [ 
    {
    'title':"Can Resolving Emotional Trauma Ease Chronic Pain?",
    "desc":"A new therapy teaches people to process their trauma as a way to treat chronic pain. Does it work?",
    "img": "background-image: url(http://via.placeholder.com/512x512)",
    "date_address":{
      "city":"Anna Goldfarb",
      "designation":"Fashion",
      "date": "March 14",
      "time": "6 min read"
     }
    },
    {
      'title':"Amanda Knox: Your Content, My Life",
      "desc":"And up that bee one sexually sheared and by goodness vindictive conscientiously politely less rabbit concise staid along far yellow piteous.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Anna Goldfarb",
        "designation":"Fashion",
        "date": "March 14",
        "time": "6 min read"
       }
    },
    {
      'title':"Congress Must Act on Regulating Deepfakes",
      "desc":"Far innocent jay elephant far that rebound less ouch a much the the where pologetic.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Anna Goldfarb",
        "designation":"Fashion",
        "date": "March 14",
        "time": "6 min read"
       }
    },
    {
      'title':"Crab oblique in meadowlark lorikeet far giraffe",
      "desc":"That less and up awesomely and since far goodness fluidly lame and more youthful hence won witlessly re-laid sold close far hello thus less crud that slew.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Furukawa",
        "designation":"Programing",
        "date": "March 14",
        "time": "6 min read"
       }
    },
    {
      'title':"Then slapped laughed pithy gorilla woodpecker cuffed",
      "desc":"Much quail after thanks as some panthe jeepers across other goodness along goodness criminal some and crab clapped spoke.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
    {
      'title':"Fondly much baboon much a a towards at a over filled astride",
      "desc":"Far under wiped played crassly deceptive shark healthy far the considering trout much mallard crud rolled brusque depending.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
    {
      'title':"Gnu aurally past much after bland therefore locked",
      "desc":"Spluttered much jeez one from liberally therefore more circa arousingly vengefully preparatory rat shrugged rat wrote robin vividly roadrunne.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
    {
      'title':"Interbred where over stank because a impassive fa",
      "desc":"Much concentric and affluent in notwithstanding lanteous interbred quaint this nightingale hey dear square shut wildebeest.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
    {
      'title':"Played healthy opposite this as inside belligerent far habitual",
      "desc":"Played healthy opposite this as inside belligerent far habitual drank past buffalo flamingo esoteric badger and and one lied opened and wow.",
      "img": "background-image: url(http://via.placeholder.com/512x512)",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
  ]
  constructor(private renderer: Renderer2) {}
  
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

}
