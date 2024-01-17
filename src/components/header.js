import './styles/header.css'
import iconSportSee from './assets/icons/sportsseeicon.svg';
import titleSportSee from './assets/icons/sportsseetitle.svg';
function Header() {
  return (
    
      <header>
        <nav>
          <div>
            <img src={iconSportSee} />
            <img src={titleSportSee} />
          </div>
          <a href="#">Accueil</a>
          <a href="#">Profil</a>
          <a href="#">Réglages</a>
          <a href="#">Communauté</a>

        </nav>
      </header>
      
  );
}

export default Header;