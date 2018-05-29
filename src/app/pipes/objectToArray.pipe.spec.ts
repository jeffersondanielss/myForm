import { ObjectToArray } from './objectToArray.pipe';

describe('TestePipe', () => {

  it('create an instance', () => {
    const pipe = new ObjectToArray();
    expect(pipe).toBeTruthy();
  });

  it('shound return a array of keys', () => {
    const pipe = new ObjectToArray();

    const data =  {
      'question1': { 'options': {'hide': true} },
      'question2': { 'options': {'hide': false} }
    };

    const result = [
      { 'options': {'hide': true} },
      { 'options': {'hide': false} }
    ];

    expect(pipe.transform(data)).toEqual(result);
  });

});
