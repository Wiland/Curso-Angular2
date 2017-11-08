import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, active:boolean = true): string {
    if (active) {
      let characters = value.split("");
      for (let elem in characters){
        characters[elem] = '*';
      }
      return characters.join("");
    } else {
      return value;
    }
  }

}
