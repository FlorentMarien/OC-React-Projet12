
import mockedData from './data.js';
import {UserActivity} from '../models/activity.js';
import {UserAverageSession} from '../models/average.js';
import {UserPerformance} from '../models/performance.js';
import {UserMainData} from '../models/maindata.js';
import Api from './api.js'
let mocked = true;

export default class Services{
constructor(id){
    if(id === undefined) id=0;
    this.id = id;
    this.clientApi = new Api(this.id);
}
getUserActivity(){
    if(mocked === true){
        let data = null;
        mockedData.USER_ACTIVITY.every((element)=>{
            if(element.userId === this.id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserActivity(data);
    }else return this.clientApi.getUserApiActivity();
}
getUserPerformances(){
    if(mocked === true){
        let data = null;
        mockedData.USER_PERFORMANCE.every((element)=>{
            if(element.userId === this.id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserPerformance(data);
    }else return this.clientApi.getUserApiPerformances(this.id);
}
getUserAverageSessions(){
    if(mocked === true){
        let data = null;
        mockedData.USER_AVERAGE_SESSIONS.every((element)=>{
            if(element.userId === this.id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserAverageSession(data);
    }else return this.clientApi.getUserApiAverageSessions(this.id);
}
getUserMainData(){
    if(mocked === true){
        let data = null;
        mockedData.USER_MAIN_DATA.every((element)=>{
            if(element.id === this.id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserMainData(data);
    }else return this.clientApi.getUserApiMainData(this.id);
}
}