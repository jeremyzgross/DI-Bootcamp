//THE "FRONTEND" RETRIEVING FROM THE GIPHY API. CAN YOU USE THIS FOR YOUR API ENDPOINTS?

const getRandomGif = async () => {
  // Get random ID
  const randomIdUrl =
    'https://api.giphy.com/v1/randomid?&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

  try {
    const randomIdResponse = await fetch(randomIdUrl)
    const randomIdData = await randomIdResponse.json()
    console.log(randomIdData)
    const randomId = randomIdData.data.random_id

    // Use random ID in search query
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=mexican&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=5&random_id=${randomId}`

    const searchResponse = await fetch(searchUrl)
    const searchData = await searchResponse.json()

    // Log the search result data
    console.log(searchData)
  } catch (error) {
    console.log(error)
  }
}

getRandomGif()
