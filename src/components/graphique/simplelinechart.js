import React, { useState,PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './../styles/simplelinechart.css'
let localData;

function onMouseOut(){
  document.getElementsByClassName("container-linechart")[0].style.background = "red"
}
function onMouseMove(data){
  //console.log(data)
  //activetooltipindex
  console.log(data)
  //282.5 + 37.5 320 18.75px
  document.getElementsByClassName("container-linechart")[0].style.background = "linear-gradient(to right, rgba(255,0,0,1) 0%, rgba(255,0,0,1) "+data.chartX/263*100+"%,rgba(91,8,8,1) "+data.chartX/263*100+"%, rgba(91,8,8,1) 100%)";
}
let arrayminmax=[null,null];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
  constructor(Data){
    super(Data);
    localData = Data.Data;
    let arrayday = ["L","M","M","J","V","S","D"]
    let i=0;
    localData.sessions.forEach(element => {
      console.log(element.sessionLength)
      if(arrayminmax[0] === null || element.sessionLength < arrayminmax[0]) arrayminmax[0] = element.sessionLength;
      if(arrayminmax[1] === null || element.sessionLength > arrayminmax[1]) arrayminmax[1] = element.sessionLength;
      element.dayl = arrayday[i];
      i++;
    });
    let gap = 30;
    arrayminmax[0] -= gap;
    arrayminmax[1] += gap;
    if(arrayminmax[0]<0) arrayminmax[0]= -10;
  }

  render() {
    return (
      
      <ResponsiveContainer width="100%" height="100%">
        <h3>Durée moyenne des sessions</h3>
        <LineChart
          width={500}
          height={300}
          data={localData.sessions}
          
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
        >
          
          <XAxis dataKey="dayl" stroke="rgba(255,255,255,0.6)" fill="gray" />
          <YAxis type="number" domain={arrayminmax} hide/>
          <Tooltip/>
          <defs>
            <linearGradient id="grad1">
                <stop offset="0%" stop-color="white" stop-opacity="0.5" />
                <stop offset="100%" stop-color="white" stop-opacity="1" />
            </linearGradient>
        </defs>
          <Line strokeWidth={3} type="bump" dataKey="sessionLength" stroke="url(#grad1)" activeDot={{ r: 5 }} />
          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
