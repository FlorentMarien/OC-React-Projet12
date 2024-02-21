import SimpleRadarChart from './graphique/simpleradarchart.js'
import SimpleBarChart from './graphique/simplebarchart.js'
import SimpleLineChart from './graphique/simplelinechart.js'
import SimpleRadialBarChart from './graphique/simpleradialbarchart.js'
import Nutrition from './nutrition.js'
import './styles/graphique.css'
import Services from './mocked/services.js'
import { useParams } from "react-router-dom";
import { useState } from 'react'
let data,userActivity,userPerformance,userAverageSessions,userMainData;
let status = {
  userActivityStatus:undefined,
  userPerformancesStatus:undefined,
  userAverageSessionsStatus:undefined,
  userMainDataStatus:undefined,
  userActivityStatusText: undefined,
  userAverageSessionsStatusText:undefined,
  userPerformancesStatusText:undefined,
  userMainDataStatusText:undefined
};

function Graphique() {

  let [state,setState] = useState({status:0,userActivityStatus:0,userAverageSessionsStatus:0,userPerformancesStatus:0,userMainDataStatus:0});
  let params = useParams();
  
  async function getData(id){
    
    data = new Services();
    await data.getUserActivity(id).then((e)=>{
      userActivity = e;
      status.userActivityStatus = e.status;
      status.userActivityStatusText = e.statusText;
    });
    console.log(userActivity);
    await data.getUserPerformances(id).then((e)=>{
      userPerformance = e;
      status.userPerformancesStatus = e.status;
      status.userPerformancesStatusText = e.statusText;
    });
    console.log(userPerformance);
    await data.getUserAverageSessions(id).then((e)=>{
      userAverageSessions = e;
      status.userAverageSessionsStatus = e.status;
      status.userAverageSessionsStatusText = e.statusText;
    });
    console.log(userAverageSessions);
    await data.getUserMainData(id).then((e)=>{
      userMainData = e;
      status.userMainDataStatus = e.status;
      status.userMainDataStatusText = e.statusText;
    });
    console.log(userMainData);
  }

  if(state.status === 0 && state.userActivityStatus === 0 && state.userPerformancesStatus === 0 && state.userAverageSessionsStatus === 0 && state.userMainDataStatus === 0){
    getData(params.id).then((e)=>{
      if(status.userActivityStatus === 200 && status.userPerformancesStatus === 200 && status.userAverageSessionsStatus === 200 && status.userMainDataStatus === 200){
        console.log("OKKK")
        setState({status:200});
      }else{
        if(status.userActivityStatus !== 200){
          console.log("error id");
          setState({status:status.userActivityStatus,statusText:status.userActivityStatusText});
        }else if(status.userAverageSessionsStatus !== 200){
          setState({status:status.userAverageSessionsStatus,statusText:status.userAverageSessionsStatusText});
        }else if(status.userPerformancesStatus !== 200){
          setState({status:status.userPerformancesStatus,statusText:status.userPerformancesStatusText});
        }else if(status.userMainDataStatus !== 200){
          setState({status:status.userMainDataStatus,statusText:status.userMainDataStatusText});
        }
      }
    });
  }

  return (
    (state.status === 200) ?
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
          
        </section>
        </div>
      </div>
    </div>
    :
    state.status === 0 ?
    <div id="main-container">
      <p className='text-welcome'><span>Load...</span></p>
    </div>
    :
    state.status === undefined ?
    <div id="main-container">
      <p className='text-welcome'>Bonjour désolé il y a <span>une erreur serveur</span></p>
    </div>
    :
    state.status !== 0 && state.status !== 200 && state.status !== undefined ?
    <div id="main-container">
      <p className='text-welcome'>Bonjour désolé il y a une erreur <span>{state.status+" "+state.statusText} </span></p>
    </div>
    : null
  );
}

export default Graphique;