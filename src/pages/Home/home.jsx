import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"
import './Home.css'

export const Home = () => {
  return (
    <Main>
      <div id='image-container'>
        <img src="src\assets\images\foto.jpeg" alt="personal-image" id="personal-image"/>
      </div>
      <TextBox>
        <h2>Mi nombre es Marly Zamara Osorio Gonzalez</h2>
        <h2> Vivo en Montenegro,Quindio</h2>
        <div id="description">
        <h2> Soy Frontend.  Tengo 18 años </h2>
        </div>
        <h2>Mi nivel de ingles es A1 </h2>
      </TextBox>
    </Main>
  )
}
