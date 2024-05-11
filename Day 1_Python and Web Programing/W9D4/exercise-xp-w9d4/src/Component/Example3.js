import skills from '../exercisethree.json'
const Example3 = (props) => {
  const experiences = skills.Experiences.map((xp) => (
    <>
      <p>{xp.companyName}</p>
      <img src={xp.logo} alt="" />
      {xp.roles.map((role) => (
        <p>{role.title}</p>
      ))}
      {xp.roles.map((role) => (
        <p>{role.startDate}</p>
      ))}
      {xp.roles.map((role) => (
        <p>{role.description}</p>
      ))}
    </>
  ))

  console.log(experiences)

  return <>{experiences}</>
}

export default Example3
