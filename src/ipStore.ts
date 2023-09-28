import fs from 'node:fs'

const storeFile = 'config.json' 

export const storeIp = async (name: string, ip: string): Promise<void> => {
  if (!storeFile) {
    throw new Error('no storeFile!')
  }

  const state = JSON.parse(fs.readFileSync(storeFile).toString())
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
