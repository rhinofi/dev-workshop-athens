import { readFileSync } from 'node:fs'
import { fetchMyIp } from './fetchMyIp.js'
import { storeIp } from './ipStore.js'
import { printDataWithCountryCodes } from './printDataWithCountryCodes.js'

type Config = {
  ifconfigUri: string
  geolocationApiUri: string
}

(async () => {
  const configFile = process.env.CONFIG_FILE || 'config.json'
  const configString = readFileSync(configFile).toString()
  const config = JSON.parse(configString) as Config

  if (!config.ifconfigUri || !config.geolocationApiUri) {
    throw new Error('missing config data')
  }
  
  const userName = process.argv[2]
  const userIP = await fetchMyIp(config.ifconfigUri)
  
  storeIp(userName, userIP)
  
  await printDataWithCountryCodes(config.geolocationApiUri)
})()
