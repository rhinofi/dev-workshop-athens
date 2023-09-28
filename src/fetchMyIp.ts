type ResponseType = {
  ip_addr: string
}

export const fetchMyIp = (apiUrl: string): Promise<string> => 
  fetch(apiUrl)
    .then(res => res.json())
    .then(bodyAsJson => {
      const ip = (bodyAsJson as ResponseType)?.ip_addr
      if (!ip) {
        throw new Error('no ip filed')
      }

      return ip
    })
    .catch(err => {
      console.log('request failed', err)
      throw err
    })
