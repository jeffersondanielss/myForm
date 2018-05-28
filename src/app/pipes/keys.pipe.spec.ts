import { KeysPipe } from './keys.pipe';

describe('TestePipe', () => {

  it('create an instance', () => {
    const pipe = new KeysPipe();
    expect(pipe).toBeTruthy();
  });

  it('shound return a array of keys', () => {
    const pipe = new KeysPipe();

    const data = {
      'propOne': 'value',
      'propTwo': 'value',
    };

    expect(pipe.transform(data)).toEqual(['propOne', 'propTwo']);
  });

});
