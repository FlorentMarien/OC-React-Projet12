import SimpleRadarChart from './graphique/simpleradarchart'
import SimpleBarChart from './graphique/simplebarchart'
import SimpleLineChart from './graphique/simplelinechart'
import SimpleRadialBarChart from './graphique/simpleradialbarchart'
import './../styles/graphique.css'
function Graphique() {
  return (
    <section>
      <p>test3</p>
      <div class="container-graph">
        <SimpleBarChart></SimpleBarChart>
        <SimpleRadarChart></SimpleRadarChart>
        <SimpleLineChart></SimpleLineChart>
        <SimpleRadialBarChart></SimpleRadialBarChart>
      </div>
    </section>
  );
}

export default Graphique;