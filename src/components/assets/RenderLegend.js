import circle from './icons/circle.svg'
import circlered from './icons/circlered.svg'
export const RenderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="simplebarchart-header">
        <div>
            <h3>Activité quotidienne</h3>
        </div>
        <div>
        {payload.map((entry, index) => (
          <>
            <div>
            <img src={index === 0 ? circle : circlered}/>
            <span className="mx-2" key={`item-${index}`}>
              {entry.value}
            </span>
            </div>
          </>
        ))}
        </div>
      </div>
    );
  };