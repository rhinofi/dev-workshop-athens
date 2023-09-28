import { readFileSync } from 'node:fs'
import { fetchMyIp } from './fetchMyIp.js'
import { getAllData } from './ipStore.js'
import { ipToCountryCode } from './ipToCountryCode.js'

type Config = {
  geolocationApiUri: string
}

export const printDataWithCountryCodes = async (
  { geolocationApiUri }: Config,
) => {
  const allData = getAllData()

  for (const ip in allData) {
    const countryCode = await ipToCountryCode(ip, geolocationApiUri)
    console.log({ ip, countryCode })
  }
}