import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import './styles/graphique.css'
import Services from './mocked/services.js'
    let data = new Services();
    let userActivity = data.getUserActivity();
    let userPerformance = data.getUserPerformances();
    let userAverageSessions = data.getUserAverageSessions();
    let userMainData = data.getUserMainData();

function Graphique() {
  
  
  return (
    <section>
      <p>test3</p>
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
  );
}

export default Graphique;