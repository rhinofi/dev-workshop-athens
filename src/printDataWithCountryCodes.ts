import { getAllData } from './ipStore.js'
import { ipToCountryCode } from './ipToCountryCode.js'

export const printDataWithCountryCodes = async (
  geolocationApiUri: string
) => {
  const allData = getAllData()

  for (const ip of Object.values(allData)) {
    const countryCode = await ipToCountryCode(geolocationApiUri, ip as string)
    console.log({ ip, countryCode })
  }
}
