import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import Nutrition from './nutrition.js'
import './styles/graphique.css'
import Services from './mocked/services.js'
    
    let data = new Services(18);
    let userActivity = await data.getUserActivity();
    let userPerformance = await data.getUserPerformances();
    let userAverageSessions = await data.getUserAverageSessions();
    let userMainData = await data.getUserMainData();
    
function Graphique() {
  
  
  return (
    <div id="main-container">
      <p className='text-welcome'>Bonjour <span>{userMainData.userInfos.firstName}</span></p>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div>
        <div>
          <section className='block-graphique'>
          <div className="container-graph">
            <div className='container-simplebarchart'>
              <SimpleBarChart Data={userActivity}></SimpleBarChart>
            </div>
            <div className='container-linechart'>
              <SimpleLineChart Data={userAverageSessions}></SimpleLineChart>
            </div>
            <div className='container-radarchart'>
              <SimpleRadarChart Data={userPerformance}></SimpleRadarChart>
            </div>
            <div className='container-radialbarchart'>
            <SimpleRadialBarChart  Data={userMainData}></SimpleRadialBarChart>
            </div>
          </div>
        </section>
        <section className='block-nutrition'>
          <Nutrition data={{id:1,value:userMainData.keyData.calorieCount}}></Nutrition>
          <Nutrition data={{id:2,value:userMainData.keyData.proteinCount}}></Nutrition>
          <Nutrition data={{id:3,value:userMainData.keyData.carbohydrateCount}}></Nutrition>
          <Nutrition data={{id:4,value:userMainData.keyData.lipidCount}}></Nutrition>
          <Nutrition data={{id:null}}></Nutrition>
          <Nutrition data={{id:null}}></Nutrition>
        </section>
        </div>
      </div>
    
    </div>
  );
}

export default Graphique;