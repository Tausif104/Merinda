import { isPlatformBrowser } from "@angular/common";
import { EventEmitter, Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
    $spinner = new EventEmitter<boolean>(false);
    isBrowser: boolean = false;

    constructor(
        @Inject(PLATFORM_ID) private platformId: string
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    show() {
        if (this.isBrowser) {
            console.log(`SHOW EMITTED`);
            this.$spinner.emit(true);
        }
    }

    hide() {
        if (this.isBrowser) {
            console.log(`HIDE EMITTED`);
            this.$spinner.emit(false);
        }
    }
}