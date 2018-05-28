import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})

export class KeysPipe implements PipeTransform {
  transform(object) {
    if ( !object ) { return null; }

    return Object.keys(object);
  }
}
