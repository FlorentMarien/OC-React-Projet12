import React, { PureComponent, useRef } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function mimaxPoid(data){
    let min = undefined;
    let max = undefined;
    data.forEach(element => {
        if(element.poid < min || min === undefined) min = element.poid;
        if(element.poid > max || min === undefined) max = element.poid;
    });
    return [min,max]
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
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="kilogram" domain={mimaxPoid(localData.sessions)}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="black" activeBar={<Rectangle fill="gray" stroke="orange" />} />
          <Bar dataKey="calories" fill="red" activeBar={<Rectangle fill="orange" stroke="gray" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
