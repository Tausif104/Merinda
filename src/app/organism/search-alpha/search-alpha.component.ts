import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-search-alpha',
  templateUrl: './search-alpha.component.html',
  styleUrls: ['./search-alpha.component.scss']
})
export class SearchAlphaComponent implements OnInit, OnDestroy {
  Ad = {
    "adImg": "/assets/images/sample/adds-2.png",
    "link":"#"
  }
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

  searchArchive = [ 
    {
      "category":"EDITORS' PICK",
      'title':"Home Internet Is Becoming a Luxury for the Wealthy",
      "desc":"And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "city":"Dave Gershgorn",
        "designation":"OneZero",
        "date": "May 21",
        "time": "5 min read",
       }
    },
    {
      "category":"BASED ON YOUR READING HISTORY",
      'title':"Why Lack of Sleep is So Bad For You",
      "desc":"A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "city":"Darcy Reeder",
        "designation":"OneZero",
        "date": "Jun 17",
        "time": "3 min read",
       }
    },
    {
      "category":"CULTURE",
      'title':"Regulators Just Put a Target on Apple's Back",
      "desc":"Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "city":"Azimi",
        "designation":"Freedom",
        "date": "May 12",
        "time": "8 min read"
       }
    },
    {
      "category":"TECHNOLOGY",
      'title':"Apple Is Designing for a Post-Facebook World",
      "desc":"And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "city":"Dave Gershgorn",
        "designation":"OneZero",
        "date": "Jun 12",
        "time": "7 min read",
       }
    },
    {
      "category":"BASED ON YOUR READING HISTORY",
      'title':"What Really Happens to AirPods When They Die",
      "desc":"At WWDC, Apple debuted a slew of new features that let users connect with their families and friends right inside Apple's apps'''no social.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "city":"Johan Doan",
        "designation":" Lifestyle",
        "date": "May 15",
        "time": "5 min read",
       }
    },
    {
      "category":"EDITORS' PICK",
      'title':"Home Internet Is Becoming a Luxury for the Wealthy",
      "desc":"And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "city":"Dave Gershgorn",
        "designation":"OneZero",
        "date": "May 21",
        "time": "5 min read"
       }
    },
    {
      "category":"BASED ON YOUR READING HISTORY",
      'title':"Why Lack of Sleep is So Bad For You",
      "desc":"A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
       "img": "background-image: url(http://via.placeholder.com/800x495)",
       "date_address":{
        "city":"Darcy Reeder",
        "designation":"OneZero",
        "date": "Jun 17",
        "time": "3 min read"
       }
    },
    {
      "category":"CULTURE",
      'title':"Regulators Just Put a Target on Apple's Back",
      "desc":"Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
      "img": "background-image: url(http://via.placeholder.com/800x495)",
      "date_address":{
        "city":"Azimi",
        "designation":"Freedom",
        "date": "May 12",
        "time": "8 min read"
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
