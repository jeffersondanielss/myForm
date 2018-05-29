import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectToArray'})

export class ObjectToArray implements PipeTransform {

  /**
   * Transforma um objeto em um array
   * com as chaves do objeto inicial.
   *
   * @param {object} object
   * @memberof ObjectToArray
   */

  transform(object: object): Array<object> {
    if ( !object ) { return null; }

    return Object
      .keys(object)
      .map( current => object[current] );
  }
}
