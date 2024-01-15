import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer,PolarAngleAxis, Label} from 'recharts';
import './../styles/simpleradialbarchart.css'

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
let localData;
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';
  constructor(Data){
    super(Data);
    localData = Data.Data;
    localData.graph = [{percent: localData.todayScore*100,fill:'red'}];
  }
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <div className='radialbar-container'>
        <p>Score</p>
        <div className='radialbar-textcontainer'>
          
          <div>
          <p className='radialbar-textcontainer-percent'>{localData.graph[0].percent}%</p>
          <p className='radialbar-textcontainer-objectif'>de votre objectif</p>
          </div>
        </div>
        </div>
        <RadialBarChart clockWise startAngle={225} endAngle={-225} cx="50%" cy="50%" innerRadius="90%" outerRadius="80%" barSize={15} data={localData.graph} domain={[0,30]}>
        <PolarAngleAxis type="number" domain={[0, 30]} dataKey="percent" angleAxisId={0} tick={false} />
          <RadialBar
            dataKey="percent"
            angleAxisId={0}
            cornerRadius={10}
          />
        <Label />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
