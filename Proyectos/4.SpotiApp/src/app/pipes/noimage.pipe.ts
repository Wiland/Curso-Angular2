import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any[]): string {
    const defaultImage = 'assets/img/noimage.png';

    if (!value) {
        return defaultImage;
    }
    return ( value.length > 0 ) ? value[0].url : defaultImage;
  }

}
