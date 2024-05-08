import './App.css'
import PostList from './Component/PostList'
import Example1 from './Component/Example1'
import Example2 from './Component/Example2'
import Example3 from './Component/Example3'

const dataToStringify = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27,
}

function App() {
  const postdataHandle = async () => {
    const url = 'https://webhook.site/40183b2a-3931-48f8-8e69-e2b5399858d1'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27,
      }),
    }

    try {
      const res = await fetch(url, options)
      // const data = await res.json()
      console.log(res)
      // return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <PostList /> */}
        {/* <br />
        <Example1 />
        <br />
        <Example2 />
        <br />
        <Example3 /> */}
        {/* <button onClick={postdataHandle}>Press me to post some data</button> */}
      </header>
    </div>
  )
}

export default App
