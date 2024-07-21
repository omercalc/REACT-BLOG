import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="nav-logo-f">NOGA <span>AJANS</span></div>
      <div className="social-icon">
        <a href="https://www.instagram.com/alc_omr/"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="mailto:omer.c.alici@outlook.com"><ion-icon name="mail-unread-outline"></ion-icon></a>
        <a href="https://github.com/omercalc"><ion-icon name="logo-github"></ion-icon></a>
        <a href="https://wa.me/905419279189?text=Merhaba"><ion-icon name="logo-whatsapp"></ion-icon></a>
      </div>
      <div className="footer-nav">
        <ul>
            <li><a href="">Anasayfa</a></li>
            <li><a href="">Yeni Haberler</a></li>
            <li><a href="">Hakkımızda</a></li>
            <li><a href="">İletişim</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 NOGA AJANS. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
