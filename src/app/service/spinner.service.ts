import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
    $spinner = new EventEmitter<boolean>(false);

    show() {
        console.log(`SHOW EMITTED`);

        this.$spinner.emit(true);
    }

    hide() {
        console.log(`HIDE EMITTED`);

        this.$spinner.emit(false);
    }
}