import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import './styles/graphique.css'
import mockedData from './mocked/data.js';
let activmockedData = true;
let userActivity,userAverageSessions,userMainData,userPerformance;
function Graphique() {
  if(activmockedData === true){
    userActivity = mockedData.USER_ACTIVITY[0];
    userPerformance = mockedData.USER_PERFORMANCE[0];
    userAverageSessions = mockedData.USER_AVERAGE_SESSIONS[0];
    userMainData = mockedData.USER_MAIN_DATA[0];
  }else{
    //
  }
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