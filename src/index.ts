import { readFileSync } from 'node:fs'
import { fetchMyIp } from './fetchMyIp.js'
import { storeIp } from './ipStore.js'
import { printDataWithCountryCodes } from './printDataWithCountryCodes.js'

const configFile = process.env.CONFIG_FILE || './config.json'
const configString = readFileSync(configFile).toString()
const config = JSON.parse(configString)

const userName = process.argv[2]
const userIP = await fetchMyIp(config.ifConfigUri)

storeIp(userName, userIP)

await printDataWithCountryCodes(config)
