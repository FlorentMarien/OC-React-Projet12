import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import Nutrition from './nutrition.js'
import './styles/graphique.css'
import Services from './mocked/services.js'
    let data = new Services();
    let userActivity = data.getUserActivity();
    let userPerformance = data.getUserPerformances();
    let userAverageSessions = data.getUserAverageSessions();
    let userMainData = data.getUserMainData();

function Graphique() {
  
  
  return (
    <div id="main-container">
      <p className='text-welcome'>Bonjour <span>{'Thomas'}</span></p>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div>
        <div>
          <section className='block-graphique'>
          
          <div className="container-graph">
            <div className='container-simplebarchart'>
            <SimpleBarChart Data={userActivity}></SimpleBarChart>
            </div>
            <div className='container-radarchart'>
              <SimpleRadarChart Data={userPerformance}></SimpleRadarChart>
            </div>
            <div className='container-linechart'>
              <SimpleLineChart Data={userAverageSessions}></SimpleLineChart>
            </div>
            <div className='container-radialbarchart'>
            <SimpleRadialBarChart  Data={userMainData}></SimpleRadialBarChart>
            </div>
          </div>
        </section>
        <section className='block-nutrition'>
          <Nutrition data={{id:1}}></Nutrition>
          <Nutrition data={{id:2}}></Nutrition>
          <Nutrition data={{id:3}}></Nutrition>
          <Nutrition data={{id:4}}></Nutrition>
        </section>
        </div>
      </div>
    
    </div>
  );
}

export default Graphique;