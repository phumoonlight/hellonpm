import { hellonpm } from '../hellonpm'

console.info = jest.fn()

describe('test:unit function:hellonpm', () => {
  it('#1:should call console.info 1 time', () => {
    hellonpm()
    expect(console.info).toBeCalledTimes(1)
  })
})