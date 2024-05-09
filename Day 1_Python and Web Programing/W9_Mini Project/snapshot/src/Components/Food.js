import { useState, useEffect } from 'react'

const Food = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    getFoodImg()
  }, [])

  const getFoodImg = async () => {
    let url = 'https://api.pexels.com/v1/search?query=Food&per_page=12'
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
      console.log(data)
      const imageUrls = data.photos.map((photo) => photo.src.small)
      setFood(imageUrls)
    } catch (error) {
      console.error('Error fetching mountain images:', error)
    }
  }

  return (
    <>
      <h3 className="img-catagory">Food Pictures</h3>
      <div
        style={{
          background: 'white',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        {food.map((imageUrl, index) => (
          <div style={{ marginTop: '20px' }} key={index}>
            <img
              src={imageUrl}
              alt=""
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Food
