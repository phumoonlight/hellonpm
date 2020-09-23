import { logLicense } from '../log-license'

console.info = jest.fn()

describe('test:unit function:logLicense', () => {
  logLicense()

  it('#1:should call console.info 1 times', () => {
    expect(console.info).toBeCalledTimes(1)
  })

  it('#2:should call console.info with "MIT"', () => {
    expect(console.info).toBeCalledWith('MIT')
  })
})