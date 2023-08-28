import logo from '../assets/img/troll_face.png'
import './header.css'

export default function Header( ) {
   
    return(
        <header className=" header">
            <img src={logo} alt="troll--img" className='header--img'/>
            <span className='header--title'>Meme Generator</span>
        </header>
    )
}