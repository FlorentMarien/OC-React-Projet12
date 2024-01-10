import React, { PureComponent, useRef } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {RenderLegend} from './../assets/RenderLegend.js'
import  './../styles/simplebarchart.css'

function minmaxPoid(data){
    let min = undefined;
    let max = undefined;
    data.forEach(element => {
        if(element.kilogram < min || min === undefined) min = element.kilogram;
        if(element.kilogram > max || max === undefined) max = element.kilogram;
    });
    return [min,max]
}
function rangeminmaxPoid(data){
  let range = minmaxPoid(data);
  return ((range[1]-range[0])+1)
}

let localData;

export default class Example extends PureComponent {
  //static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
  
  constructor(Data){
    super(Data);
    localData = Data.Data;
  }
  
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={localData.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" />
          <YAxis tickCount={rangeminmaxPoid(localData.sessions)} dataKey="kilogram" yAxisId="right" domain={minmaxPoid(localData.sessions)} allowDataOverflow orientation='right'/>
          <YAxis dataKey="calories" yAxisId="left" orientation='left' hide/>
          <Tooltip />
          <Legend content={<RenderLegend />} verticalAlign="top" iconType='circle' align='right'/>
          <Bar dataKey="kilogram" barSize={20} radius={[10, 10, 0, 0]} yAxisId="right" fill="black" activeBar={<Rectangle fill="gray" stroke="orange" />} />
          <Bar dataKey="calories" barSize={20} radius={[10, 10, 0, 0]} yAxisId="left" fill="red"  activeBar={<Rectangle fill="orange" stroke="gray" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
