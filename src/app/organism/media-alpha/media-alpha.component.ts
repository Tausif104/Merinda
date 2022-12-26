import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-media-alpha',
  templateUrl: './media-alpha.component.html',
  styleUrls: ['./media-alpha.component.scss']
})
export class MediaAlphaComponent implements OnInit {

  reloadGallery: Subject<void> = new Subject();
  @Output() onSelect = new EventEmitter();
  @Input() showLoadMore = false;
  @Input() disablePreview = false;

  constructor(
    private spinnerService: SpinnerService,
    private messageService: NzMessageService,
  ) { }

  ngOnInit(): void {
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.spinnerService.show();
        break;
      case 'done':
        this.spinnerService.hide();
        this.reloadGallery.next();
        break;
      case 'error':
        this.messageService.error(`Could not upload files.`)
        break;
    }
  }

}
