import { logAuthorInfo } from '../log-author-info'

console.info = jest.fn()

describe('test:unit function:logAuthorInfo', () => {
  it('#1:should call console.info 2 times', () => {
    logAuthorInfo()
    expect(console.info).toBeCalledTimes(2)
  })
})