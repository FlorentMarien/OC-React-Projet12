import './styles/nutrition.css'
import CaloriesIcon from './assets/icons/calories-icon.svg'
import AppleIcon from './assets/icons/carbs-icon.svg'
import BurgerIcon from './assets/icons/fat-icon.svg'
import ProteinIcon from './assets/icons/protein-icon.svg'

function Nutrition({data}) {
  return (
    <div className={'container-nutrition'+ (data.id === null ? " hidden" : "")}>
    
    {
    data.id === 1 ?
    <>
        <img src={CaloriesIcon}/>
        <div>
            <h3>{data.value}Kcal</h3>
            <p>Calories</p>
        </div>
     </>
    : data.id === 2 ?
    <>
        <img src={ProteinIcon}/>
        <div>
            <h3>{data.value}g</h3>
            <p>Proteine</p>
        </div>
    </>
    : data.id === 3 ?
    <>
        <img src={AppleIcon}/>
        <div>
            <h3>{data.value}g</h3>
            <p>Glucides</p>
        </div>
    </>
    : data.id === 4 ?
    <>
        <img src={BurgerIcon}/>
        <div>
            <h3>{data.value}g</h3>
            <p>Lipides</p>
        </div>
    </>
   : null
   }
   </div>
  );
}

export default Nutrition;