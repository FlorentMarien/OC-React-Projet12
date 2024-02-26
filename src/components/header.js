import './styles/header.css'
import iconSportSee from './assets/icons/sportsseeicon.svg';
import titleSportSee from './assets/icons/sportsseetitle.svg';
function Header() {
  return (
    
      <header>
        <nav>
          <div className='header-logo'>
            <img src={iconSportSee} />
            <img src={titleSportSee} />
          </div>
          <div>
            <a href="#">Accueil</a>
            <a href="#">Profil</a>
            <a href="#">Réglages</a>
            <a href="#">Communauté</a>
          </div>

        </nav>
      </header>
      
  );
}

export default Header;