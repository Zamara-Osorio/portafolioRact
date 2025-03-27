import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"

export const Studies = () => {
  return (
    <Main>
      <TextBox style={{gap: "2rem"}}>
        <div className="studies-box">
            <h2>•
            Técnica de Programación de Posgrado y Software de Secundaria</h2>
            <div className="logo-box">
              <h2>Institución Educativa Los Fundadores</h2>
              <img id='logos' src='src\assets\images\Fund.jfif' alt="logos"></img>
            </div>
        </div>
        
    
        <div className="studies-box">
            <h2>• Currently studying a Technologist degree in Software Analysis and Development.</h2>
            <div className="logo-box">
              <h2>Sena Centro de Comercio y Turismo</h2>
              <img id='logos' src='src/assets/images/Sena.png' alt="logos"></img>
            </div>
        </div>
      </TextBox>
    </Main>
  )
}