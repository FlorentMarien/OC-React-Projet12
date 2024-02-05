
import mockedData from './data.js';
import {UserActivity} from '../models/activity.js';
import {UserAverageSession} from '../models/average.js';
import {UserPerformance} from '../models/performance.js';
import {UserMainData} from '../models/maindata.js';
import Api from './api.js'
let mocked = false;

export default class Services{
constructor(){
    this.clientApi = new Api();
}
async getUserActivity(id){
    if(mocked === true){
        let data = null;
        mockedData.USER_ACTIVITY.every((element)=>{
            if(element.userId === id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserActivity(data);
    }else return new UserActivity(await this.clientApi.getUserApiActivity(id));
    
}
 async getUserPerformances(id){
    if(mocked === true){
        let data = null;
        mockedData.USER_PERFORMANCE.every((element)=>{
            if(element.userId === id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserPerformance(data);
    }else return new UserPerformance(await this.clientApi.getUserApiPerformances(id));
}
 async getUserAverageSessions(id){
    if(mocked === true){
        let data = null;
        mockedData.USER_AVERAGE_SESSIONS.every((element)=>{
            if(element.userId === id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserAverageSession(data);
    }else return new UserAverageSession(await this.clientApi.getUserApiAverageSessions(id));
}
async getUserMainData(id){
    if(mocked === true){
        let data = null;
        mockedData.USER_MAIN_DATA.every((element)=>{
            if(element.id === id){ 
                data = element;
                return false;
            }else{
                return true;
            }
        });
        return new UserMainData(data);
    }else return new UserMainData(await this.clientApi.getUserApiMainData(id));
}
}