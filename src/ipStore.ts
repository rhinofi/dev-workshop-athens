import fs from 'node:fs'

const storeFile = process.env.STORE_FILE || 'store.json'

export const storeIp = (name: string, ip: string): void => {
  const state = getAllData()
  const existingNames = Object.keys(state)
  const caseInsensitiveRegexp = new RegExp(name, 'i')

  const matchingName = existingNames.find(
    name => !!name.match(caseInsensitiveRegexp)
  )
  state[matchingName === undefined ? name : matchingName] = ip

  fs.writeFileSync(storeFile, JSON.stringify(state, null, 2))
}

export const getAllData = () => {
  if (!storeFile) {
    throw new Error('no storeFile!')
  }

  return JSON.parse(fs.readFileSync(storeFile).toString())
}
