import { Car } from './car.model';

describe('Car.Model', () => {
  it('should create an instance', () => {
    expect(new Car()).toBeTruthy();
  });
});
