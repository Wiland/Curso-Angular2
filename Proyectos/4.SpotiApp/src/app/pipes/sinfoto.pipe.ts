import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinFotoPipe implements PipeTransform {

  transform(value: any[]): string {
    let defaultImage:string = 'assets/img/noimage.png';

    if (!value) {
        return defaultImage;
    }
    return ( value.length > 0 ) ? value[1].url : defaultImage;
  }

}
