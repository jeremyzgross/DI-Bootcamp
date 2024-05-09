const getMountainImg = async () => {
  let url = 'https://api.pexels.com/v1/search?query=mountain&per_page=10'
  let options = {
    method: 'GET',
    headers: {
      Authorization: '5X7rampVK1zNYF7UkdHT9U1FTmoR6MbselDi1hn7zC1q3uBN9c6ZkBso',
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    const imageUrls = data.photos.map((photo) => photo.src.large)
    // const imageUrlsSplit = imageUrls.map((item) => <img src=`${item}` alt="" />)

    return imageUrls
  } catch (error) {
    console.error('Error fetching mountain images:', error)
    return []
  }
}
const logMountainImages = async () => {
  console.log(await getMountainImg())
}

// Call the async function
logMountainImages()
