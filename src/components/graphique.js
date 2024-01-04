import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import './../styles/graphique.css'
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
  return (
    <section>
      <p>test3</p>
      <div class="container-graph">
        <SimpleBarChart Data={data}></SimpleBarChart>
        <SimpleRadarChart></SimpleRadarChart>
        <SimpleLineChart></SimpleLineChart>
        <SimpleRadialBarChart></SimpleRadialBarChart>
      </div>
    </section>
  );
}

export default Graphique;