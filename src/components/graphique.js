import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import './styles/graphique.css'
function Graphique() {
  const data = [
    {
      name: '1',
      poids: 60,
      calories: 350,
    },
    {
      name: '2',
      poids: 80,
      calories: 400,
    },
    {
      name: '3',
      poids: 90,
      calories: 500,
    },
    {
      name: '4',
      poids: 80,
      calories: 420,
    },
    {
      name: '5',
      poids: 60,
      calories: 350,
    },
    {
      name: '6',
      poids: 60,
      calories: 350,
    },
    {
      name: '7',
      poids: 60,
      calories: 350,
    },
  ];
  const data2 = [
    {
      subject: 'Instensité',
      A: 40,
      fullMark: 150,
    },
    {
      subject: 'Vitesse',
      A: 110,
      fullMark: 150,
    },
    {
      subject: 'Force',
      A: 75,
      fullMark: 150,
    },
    {
      subject: 'Endurance',
      A: 110,
      fullMark: 150,
    },
    {
      subject: 'Energie',
      A: 90,
      fullMark: 150,
    },
    {
      subject: 'Cardio',
      A: 70,
      fullMark: 150,
    },
  ];
  const data3 = [
    {
      name: 'L',
      time: 35,
    },
    {
      name: 'M',
      time:40,
    },
    {
      name: 'M',
      time:45,
    },
    {
      name: 'J',
      time:20,
    },
    {
      name: 'V',
      time:25,
    },
    {
      name: 'S',
      time:40,
    },
    {
      name: 'D',
      time:30,
    },
  ];
  return (
    <section>
      <p>test3</p>
      <div className="container-graph">
        <div className='container-simplebarchart'>
        <SimpleBarChart Data={data}></SimpleBarChart>
        </div>
        <div className='container-radarchart'>
          <SimpleRadarChart Data={data2}></SimpleRadarChart>
        </div>
        <div className='container-linechart'>
          <SimpleLineChart Data={data3}></SimpleLineChart>
        </div>
        
        <SimpleRadialBarChart></SimpleRadialBarChart>
      </div>
    </section>
  );
}

export default Graphique;