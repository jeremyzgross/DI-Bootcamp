import skills from '../exercisethree.json'
const Example1 = (props) => {
  const socialMedias = skills.SocialMedias
  // console.log(socialMedias)
  return (
    <>
      {socialMedias.map((item) => (
        <li>{item}</li>
      ))}
    </>
  )
}

export default Example1
