import { AfterViewChecked, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { skip } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';

@UntilDestroy()
@Component({
  selector: 'app-layout-alpha',
  templateUrl: './layout-alpha.component.html',
  styleUrls: ['./layout-alpha.component.scss'],
})
export class LayoutAlphaComponent implements AfterViewChecked {
  isCollapsed = false;
  isVisible = false;

  constructor(
    private spinnerService: SpinnerService
  ) {}

  ngAfterViewChecked(): void {
    this.spinnerService.$spinner.pipe(
      skip(1),
      untilDestroyed(this)
    ).subscribe((status) =>{
      this.isVisible = status;
    });
  }

  isCollapsedListener(event: boolean) {
    this.isCollapsed = event
  }
}
