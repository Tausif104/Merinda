import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-alpha',
  templateUrl: './home-alpha.component.html',
  styleUrls: ['./home-alpha.component.scss'],
})
export class HomeAlphaComponent implements OnInit, OnDestroy {
  editorPick = {
    "city":"Steven Job",
    "designation":"OneZero",
    "date": "July 15",
    "time": "5 min read"
   };
  postArr = [ 
    {
      'title':"I Learned How to Die Before I Knew How to Live",
      'desc':'Tech companies need more than advisory boards if they want.',
       "img": "http://via.placeholder.com/512x512",
       "date_address":{
        "city":"Anna Goldfarb",
        "designation":"Fashion",
        "date": "March 14",
        "time": "6 min read"
       }
    },
    {
      'title':"Is 'Interactive Storytelling' the Future of Media?",
      'desc':'Or does passive and active content serve different purposes?.',
      "img": "http://via.placeholder.com/512x512",
      "date_address":{
        "city":"Furukawa",
        "designation":"Programing",
        "date": "March 14",
        "time": "6 min read"
       }
    },
    {
      'title':"How NOT to get a $30k bill from Firebase",
      'desc':'Why the dark forests of the internet podcasts, newsletters.',
      "img": "http://via.placeholder.com/512x512",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
    {
      'title':"Google Can't Figure Out What YouTube Is",
      'desc':'But Apple still has some A.I. tricks up its sleeve.',
      "img": "http://via.placeholder.com/512x512",
      "date_address":{
        "city":"Rayan Mark",
        "designation":"GEN",
        "date": "June 14",
        "time": "14 min read"
       }
    },
  
  ]
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'home');
  }
  
  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'home');
  }
}
