import fetch from 'node-fetch'

type ResponseType = {
  ip_addr: string
}

export const fetchMyIp = (apiUrl: string): Promise<string> =>
  fetch(apiUrl)
    .then(res => res.json())
    .then(bodyAsJson => (bodyAsJson as ResponseType).ip_addr)
