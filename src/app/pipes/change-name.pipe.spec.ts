import { ChangeNamePipe } from './change-name.pipe';

describe('ChangeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ChangeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
