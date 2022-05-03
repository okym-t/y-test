const resas = 'https://opendata.resas-portal.go.jp'
const prefectures = '/api/v1/prefectures'
const populationComposition = '/api/v1/population/composition/perYear'

const proxyMAP = new Map([
  [prefectures, resas + prefectures],
  [populationComposition, resas + populationComposition],
])

async function handleRequest(request) {
  const requestURL = new URL(request.url)
  const location = proxyMAP.get(requestURL.pathname)
  const search = requestURL.search

  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  if (location) {
    const response = await fetch(location + search, {
      headers: { 'X-API-KEY': API_TOKEN },
    })
    const results = JSON.stringify(await response.json())
    return new Response(results, init)
  }
  return new Response('Not Found', {
    headers: { 'content-type': 'text/plain' },
    status: 404,
  })
}

addEventListener('fetch', (event) => {
  return event.respondWith(handleRequest(event.request))
})
