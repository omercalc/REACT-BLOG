import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Nav.css'

const Nav = () => {


    useGSAP(() => {
        gsap.to('.nav', { opacity: 1, x:100, delay: 1 })
        
      }, [])


  return (
    <div className='nav'>
      <div className="nav-logo">NOGA <span>AJANS</span></div>
      <ul className="nav-menu">
        <li href="#"> Anasayfa</li>
        <li href="#"> Yeni Haberler</li>
        <li href="#"> Hakkımızda</li>
        <li href="#"> İletişim</li>
      </ul>
    </div>
  )
 }
export default Nav
