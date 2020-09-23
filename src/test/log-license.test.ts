import { logLicense } from '../log-license'

console.info = jest.fn()

describe('test:unit function:logLicense', () => {
  it('#1:should call console.info 1 times', () => {
    logLicense()
    expect(console.info).toBeCalledTimes(1)
  })
})