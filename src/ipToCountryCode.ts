type ResponseType = {
  country: string
}

export const ipToCountryCode = (apiUrl: string, ip: string): Promise<string> =>
  fetch(`${apiUrl}/${ip}`)
    .then(res => res.json())
    .then(bodyAsJson => {
      const country = (bodyAsJson as ResponseType)?.country
      if (!country) {
        throw new Error('no country field')
      }

      return country
    })
    .catch(err => {
      console.log('request failed', err)
      throw err
    })
