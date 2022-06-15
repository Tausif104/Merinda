import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-alpha',
  templateUrl: './home-alpha.component.html',
  styleUrls: ['./home-alpha.component.scss'],
})
export class HomeAlphaComponent implements OnInit, OnDestroy {
  Ad = {
    "adImg": "/assets/images/sample/adds-2.png",
    "link":"#"
  }
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
  postArray = [ 
    {
      "category":"EDITORS' PICK",
      'title':"Home Internet Is Becoming a Luxury for the Wealthy",
      "desc":"And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "img":"",
        "author":"Dave Gershgorn",
        "designation":"OneZero",
        "date": "May 21",
        "time": "5 min read",
       },
       "subData" : [],
    },
    {
      "category":"BASED ON YOUR READING HISTORY",
      'title':"Why Lack of Sleep is So Bad For You",
      "desc":"A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "img":"/assets/images/author-avata-1.jpg",
        "author":"Darcy Reeder",
        "designation":"OneZero",
        "date": "Jun 17",
        "time": "3 min read",
       },
       "subData" : [],
    },
    {
      "category":"CULTURE",
      'title':"Regulators Just Put a Target on Apple's Back",
      "desc":"Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "img":"",
        "author":"Azimi ??kalo",
        "designation":"Freedom",
        "date": "May 12",
        "time": "8 min read"
       },
       "subData" : [],
    },
    {
      "category":"TECHNOLOGY",
      'title':"Apple Is Designing for a Post-Facebook World",
      "desc":"And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "img":"",
        "author":"Dave Gershgorn",
        "designation":"OneZero",
        "date": "Jun 12",
        "time": "7 min read",
       },
       "subData" : [],
    },
    {
      "category":"BASED ON YOUR READING HISTORY",
      'title':"What Really Happens to AirPods When They Die",
      "desc":"At WWDC, Apple debuted a slew of new features that let users connect with their families and friends right inside Apple's apps'''no social.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "img":"",
        "author":"Johan Doan",
        "designation":" Lifestyle",
        "date": "May 15",
        "time": "5 min read",
       },
       "subData" : [
        {
          "title":"I Learned How to Die Before I Knew How to Live",
          "img": "http://via.placeholder.com/512x512",
          "date_address":{
          "author":"Anna Goldfarb",
          "designation":" Fashion",
          "date":"March 12",
          "time":"4 min read",
          },
        },
        {
          "title":"Is 'Interactive Storytelling' the Future of Media?",
          "img": "http://via.placeholder.com/512x512",
          "date_address":{
          "author":"Furukawa",
          "designation":"Programing",
          "date":"March 14",
          "time":"6 min read",
          },
        },
        {
          "title":"How NOT to get a $30k bill from Firebase",
          "img": "http://via.placeholder.com/512x512",
          "date_address":{
          "author":"Glorida",
          "designation":"Living",
          "date":"April 14",
          "time":"7 min read",
          },
        },
        {
          "title":"Google Can't Figure Out What YouTube Is",
          "img": "http://via.placeholder.com/512x512",
          "date_address":{
          "author":"Rayan Mark",
          "designation":"GEN",
          "date":"Jun 14",
          "time":"8 min read",
          },
        },
      ]
    },
    {
      "category":"EDITORS' PICK",
      'title':"Home Internet Is Becoming a Luxury for the Wealthy",
      "desc":"And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "img":"",
        "author":"Dave Gershgorn",
        "designation":"OneZero",
        "date": "May 21",
        "time": "5 min read"
       },
       "subData" : [],
    },
    {
      "category":"BASED ON YOUR READING HISTORY",
      'title':"Why Lack of Sleep is So Bad For You",
      "desc":"A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "img":"",
        "author":"Darcy Reeder",
        "designation":"OneZero",
        "date": "Jun 17",
        "time": "3 min read"
       },
       "subData" : [],
    },
    {
      "category":"CULTURE",
      'title':"Regulators Just Put a Target on Apple's Back",
      "desc":"Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "img":"",
        "author":"Azimi ??kalo",
        "designation":"Freedom",
        "date": "May 12",
        "time": "8 min read"
       },
       "subData" : [],
    },
  ]
  cultureArr = [
    {
      "title":"President and the emails. Who will guard the guards?",
      "date_address":{
      "city":"Alentica",
      "designation":"Police",
      "date": "May 14",
      "time": "3 min read",
      },
    },
    {
      "title":"How to Silence the Persistent Ding of Modern Life",
      "date_address":{
      "city":"Alentica",
      "designation":"Police",
      "date": "Jun 12",
      "time": "4 min read",
      },
    },
    {
      "title":"Why We Love to Watch",
      "date_address":{
      "city":"Alentica",
      "designation":"Police",
      "date": "May 15",
      "time": "5 min read",
      },
    },
    {
      "title":"How Health Apps Let",
      "date_address":{
      "city":"Alentica",
      "designation":"Police",
      "date": "April 27",
      "time": "6 min read",
      },
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
