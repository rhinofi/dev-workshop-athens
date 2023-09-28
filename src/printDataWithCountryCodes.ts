import {getAllData} from './ipStore.js'
import {ipToCountryCode} from './ipToCountryCode.js'

type Config = {
    geolocationApiUri: string
}

export const printDataWithCountryCodes = async (
    {geolocationApiUri}: Config,
) => {
    const allData = getAllData()

    for (const name in allData) {
        const ip = allData[name]
        const countryCode = await ipToCountryCode(geolocationApiUri, ip)
        console.log({ip, countryCode})
    }
}
