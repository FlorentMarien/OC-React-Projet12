import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let localData;

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
  constructor(Data){
    super(Data);
    localData = Data.Data;
  }

  render() {
    return (
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={localData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" stroke="white" fill="white"/>
          
          <Tooltip/>
          
          <Line type="monotone" dataKey="time" stroke="white" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
