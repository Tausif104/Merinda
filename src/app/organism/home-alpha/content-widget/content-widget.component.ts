import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-content-widget',
  templateUrl: './content-widget.component.html',
  styleUrls: ['./content-widget.component.scss']
})
export class ContentWidgetComponent implements OnInit {

   @Input() widget: any;
   @Input() editorPickAddress:any;

  constructor() { }

  ngOnInit(): void {
  }

}
