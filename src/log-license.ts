import packageJSON from '../package.json'

export const logLicense = () => {
  console.info(packageJSON.license)
}

export default logLicense
