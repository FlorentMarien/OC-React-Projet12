import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './../styles/simpleradarchart.css'

let localData;

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  
  constructor(Data){
    super(Data);
    localData = Data.Data;
  }

  render() {
    return (
      <div className='container-radarchart'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={localData} stroke="white" fill="white">
          <PolarGrid stroke="white" fill="white" />
          <PolarAngleAxis dataKey="subject" stroke="white" fill="white" />
        
          <Radar name="Mike" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
