import P from '@rhino.fi/aigle'
import { getAllData } from './ipStore.js'
import { ipToCountryCode } from './ipToCountryCode.js'

export const printDataWithCountryCodes = async (
  geolocationApiUri: string
) => {
  const allData = getAllData()

  await P.parallel(Object.values(allData), async (ip: string) => {
    const countryCode = await ipToCountryCode(geolocationApiUri, ip)
    console.log({ ip, countryCode })
  })
}
