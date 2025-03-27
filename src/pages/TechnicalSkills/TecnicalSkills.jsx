
import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"
import './TechnicalSkills.css'

export const TechnicalSkills = () => {
  return (
    <Main style={{gap: '0', justigyContent: 'center', flexDirection: 'column'}}>
      <div id='image-container2'>
        <img id='logos' src='src\assets\images\logos.png' alt="logos"></img>
      </div>
      <TextBox>

        <h2>•  React, HTML, CSS.</h2>
        <h2>•  Java, JavaScript.</h2>
        <h2>•  Git, GitHub.</h2>
      </TextBox>
    </Main>
  )
}