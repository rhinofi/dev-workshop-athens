import fs from 'node:fs'

const storeFile = process.env.STORE_FILE

export const storeIp = (name: string, ip: string): void => {
  if (!storeFile) {
    throw new Error('no storeFile!')
  }

  const state = JSON.parse(fs.readFileSync(storeFile).toString())
  const existingNames = Object.keys(state)

  const matchingName = existingNames.find(
    existingName => existingName.toLowerCase() === name.toLowerCase()
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
