import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'
import { FaFacebook,FaWhatsapp,FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer>
      
      <NavBar>
        <ItemNavBar content={<FaFacebook />} style={{ fontSize:"1.5rem" }} route={''}/>
        <ItemNavBar content={<FaGithub />} style={{ fontSize:"1.5rem" }} route={''}/>
      </NavBar>
    </footer>
  )
}
