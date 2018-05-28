import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})

export class KeysPipe implements PipeTransform {

  /**
   * Transforma um objeto em um array
   * com as chaves do objeto inicial.
   *
   * @param {object} object
   * @memberof KeysPipe
   */

  transform(object: object) {
    if ( !object ) { return null; }

    return Object.keys(object);
  }
}
