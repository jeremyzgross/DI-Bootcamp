import { useState, useEffect } from 'react'

const Beaches = () => {
  const [beaches, setBeaches] = useState([])

  useEffect(() => {
    getbeachImg()
  }, [])

  const getbeachImg = async () => {
    let url = 'https://api.pexels.com/v1/search?query=beaches&per_page=12'
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
      setBeaches(imageUrls)
    } catch (error) {
      console.error('Error fetching mountain images:', error)
    }
  }

  return (
    <>
      <h3 className='img-catagory' >Beach Pictures</h3>
      <div className="img-div" style={{ background: 'white' }}>
        {beaches.map((imageUrl, index) => (
          <div class= 'inner-img-div' key={index}>
            <img src={imageUrl} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Beaches
