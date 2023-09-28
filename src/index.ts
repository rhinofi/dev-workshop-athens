import { readFileSync } from 'node:fs'
import { fetchMyIp } from './fetchMyIp.js'
import { getAllData, storeIp } from './ipStore.js'
import { ipToCountryCode } from './ipToCountryCode.js'
import { printDataWithCountryCodes } from './printDataWithCountryCodes.js'

const configFile = process.env.CONFIG_FILE || 'config.json'
const configString = readFileSync(configFile).toString()
const config = JSON.parse(configString)

const userName = process.argv[3]
const userIP = await fetchMyIp(config.ifconfigUrl)

storeIp(userName, userIP)

await printDataWithCountryCodes(config)
