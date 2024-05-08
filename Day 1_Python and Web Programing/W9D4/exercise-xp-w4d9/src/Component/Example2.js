import skills from '../exercisethree.json'
const Example2 = (props) => {
  const skillsDataHeading = skills.Skills[0]
  const applicationHeader = skills.Skills[1]

  const java = skillsDataHeading.SkillSet[0].Name
  const cSharp = skillsDataHeading.SkillSet[1].Name
  const python = skillsDataHeading.SkillSet[2].Name

  const programingList = applicationHeader.SkillSet.map((skill) => skill.Name)

  // console.log(programingList)

  return (
    <>
      <h1>{skillsDataHeading.Area}</h1>
      <ul>
        <li>{java}</li>
        <li>{cSharp}</li>
        <li>{python}</li>
      </ul>
      <h1>{applicationHeader.Area}</h1>
      <ul>
        {programingList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Example2
