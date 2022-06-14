import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-single-alpha',
  templateUrl: './single-alpha.component.html',
  styleUrls: ['./single-alpha.component.scss']
})
export class SingleAlphaComponent implements OnInit, OnDestroy {
  relatedPostArr = [ 
    {
      'title':"Is ‘Interactive Storytelling’ the Future of Media?",
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
      "img": "http://via.placeholder.com/512x512",
      "date_address":{
        "city":"Glorida",
        "designation":"Living",
        "date": "April 14",
        "time": "7 min read"
       }
    },
    {
      'title':"Google Can’t Figure Out What YouTube Is",
      "img": "http://via.placeholder.com/512x512",
      "date_address":{
        "city":"Rayan Mark",
        "designation":"GEN",
        "date": "June 14",
        "time": "8 min read"
       }
    },
  
  ]
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'single');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'single');
  }

}
