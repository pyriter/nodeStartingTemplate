import {sum} from "./main";

describe('main', () =>{
  it('should return the correct sum', () => {
    let result = sum(1,2);
    expect(result).toEqual(3);
  });
})
