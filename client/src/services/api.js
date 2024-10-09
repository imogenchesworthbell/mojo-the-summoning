export const api = {
  url: 'http://localhost:5000',

  async get(endpoint) {
    console.log('GET', endpoint)
    const res = await fetch(`${this.url}/${endpoint}`)
    return await res.json()
  }
}
