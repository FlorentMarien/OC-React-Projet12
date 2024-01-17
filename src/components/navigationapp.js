import './styles/navigationapp.css'
import iconYoga from './assets/icons/icon.svg'
import iconSwimm from './assets/icons/icon-swim.svg'
import iconBike from './assets/icons/icon-bike.svg'
import iconFitness from './assets/icons/icon-fitness.svg'

function NavigationApp() {
  return (
        <nav className="aside-nav">
          <img src={iconYoga} />
          <img src={iconSwimm} />
          <img src={iconBike} />
          <img src={iconFitness} />
          <p>Copiryght, SportSee 2020</p>
        </nav>
  );
}

export default NavigationApp;