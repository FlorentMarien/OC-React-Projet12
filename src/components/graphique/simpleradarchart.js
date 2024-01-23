import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './../styles/simpleradarchart.css'

let localData;
function filterOutput(data){
  let order = [6,5,4,3,2,1];
  let output = [];
  order.forEach(element =>{
    data.every(dataelement =>{
      if(dataelement.kind === element){
        output.push(dataelement)
        return false;
      }else{return true}
    })
  })
  return output;
}
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  
  constructor(Data){
    super(Data);
    localData = Data.Data;
    if(localData.kind["1"] === "cardio") localData.kind={1:"Cardio",2:"Energie",3:"Endurance",4:"Force",5:"Vitesse",6:"Intensité"};
    localData.data.forEach(element => {
      element.trait = localData.kind[element.kind];
    });
    localData.data = filterOutput(localData.data);
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="64%" data={localData.data} stroke="white" fill="white">
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="trait" stroke="white" fill="white" />
        
          <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
