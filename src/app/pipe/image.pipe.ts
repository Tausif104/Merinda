import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({name: 'imagePath'})
export class ImagePathPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
        return '';
    }
    
    return `${environment.baseUrl}/${value}`;   
  }
}