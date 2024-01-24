import circle from './icons/circle.svg'
import circlered from './icons/circlered.svg'
import './../styles/legend.css'
export const RenderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="simplebarchart-header">
        <div>
            <h3 className='simplebarchart-header-title'>Activité quotidienne</h3>
        </div>
        <div className='container-graph-legend'>
        {payload.map((entry, index) => (
          <>
            <div className='graph-legend'>
            <img src={index === 0 ? circle : circlered}/>
            <span className="mx-2" key={`item-${index}`}>
              {
                entry.value === "kilogram" ? "Poids (kg)"
                : entry.value === "calories" ? "Calories brûlées (kCal)" 
                : entry.value
              }
            </span>
            </div>
          </>
        ))}
        </div>
      </div>
    );
  };

  export const RenderTooltipBar = (props) => {
    const { payload } = props;
    return (
      payload[0] !== undefined ?
      <div className='tooltip-linebar'>
        <ul>
          <li>
            <p>{payload[0].payload.kilogram}kg</p>
          </li>
          <span className='divider'></span>
          <li>
          <p>{payload[0].payload.calories}Kcal</p>
          </li>
        </ul>
      </div>
      : null
    );
  };

  export const RenderToolTipLineBar = (props) => {
    const { payload } = props;
    return (
      payload[0] !== undefined ?
      <div className='tooltip-linebar2'>
            <p>{payload[0].payload.sessionLength}min</p>
      </div>
      : null
    );
  };