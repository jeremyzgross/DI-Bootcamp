import { useState, useEffect } from 'react'

const Birds = () => {
  const [birds, setBirds] = useState([])

  useEffect(() => {
    getBirdsImg()
  }, [])

  const getBirdsImg = async () => {
    let url = 'https://api.pexels.com/v1/search?query=birds&per_page=12'
    let options = {
      method: 'GET',
      headers: {
        Authorization:
          '5X7rampVK1zNYF7UkdHT9U1FTmoR6MbselDi1hn7zC1q3uBN9c6ZkBso',
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await fetch(url, options)
      const data = await res.json()
      const imageUrls = data.photos.map((photo) => photo.src.small)
      setBirds(imageUrls)
    } catch (error) {
      console.error('Error fetching mountain images:', error)
    }
  }

  return (
    <>
      <h3 className="img-catagory">Birds Pictures</h3>
      <div
        style={{
          background: 'white',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        {birds.map((imageUrl, index) => (
          <div style={{ marginTop: '20px' }} key={index}>
            <img src={imageUrl} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Birds
