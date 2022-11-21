import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { skip } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';

@UntilDestroy()
@Component({
  selector: 'app-layout-beta',
  templateUrl: './layout-beta.component.html',
  styleUrls: ['./layout-beta.component.scss'],
})
export class LayoutBetaComponent {
  isCollapsed = false;
  isVisible = false;

  constructor(
    private spinnerService: SpinnerService
  ) {}

  
  ngAfterViewChecked(): void {
    this.spinnerService.$spinner.pipe(
      skip(1),
      untilDestroyed(this)
    ).subscribe((status) => {
      console.log({status});
      
      this.isVisible = status;
    });
  }

  isCollapsedListener(event: boolean) {
    this.isCollapsed = event
  }
}
