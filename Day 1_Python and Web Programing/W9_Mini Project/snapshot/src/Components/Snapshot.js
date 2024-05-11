import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Snapshot = (props) => {
  const [data, setData] = useState([])
  const [catagory, setcatagory] = useState('mountains')
  const params = useParams()

  useEffect(() => {
    getImages()
    propsOrParams()
  }, [data, catagory])

  const propsOrParams = () => {
    if (props.catagory === 'search') {
      setcatagory(params.catagory)
    } else {
      setcatagory(props.catagory)
    }
  }

  const getImages = async () => {
    let url = `https://api.pexels.com/v1/search?query=${catagory}&per_page=12`
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
      setData(imageUrls)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  return (
    <>
      {/* {console.log(props)} */}
      <h3 className="img-catagory">{catagory}</h3>
      <div className="img-div" style={{ background: 'white' }}>
        {data.map((imageUrl, index) => (
          <div class="inner-img-div" key={index}>
            <img src={imageUrl} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Snapshot
