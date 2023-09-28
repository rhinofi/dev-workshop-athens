import fetch from 'node-fetch'

type ResponseType = {
  country: string
}

export const ipToCountryCode = (apiUrl: string, ip: string): Promise<string> =>
  fetch(`${apiUrl}/${ip}`)
    .then(res => res.json())
    .then(bodyAsJson => (bodyAsJson as ResponseType).country)
