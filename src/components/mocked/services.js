
import mockedData from './data.js';
import {UserActivity} from '../models/activity.js';
import {UserAverageSession} from '../models/average.js';
import {UserPerformance} from '../models/performance.js';
import {UserMainData} from '../models/maindata.js';
let mocked = true;

export default class Services{
getUserActivity(id){
    if(id === undefined) id=0;
    if(mocked === true) return new UserActivity(mockedData.USER_ACTIVITY[id]);
    //else return getApiUserActivity();
}
getUserPerformances(id){
    if(id === undefined) id=0;
    if(mocked === true) return new UserPerformance(mockedData.USER_PERFORMANCE[id]);
}
getUserAverageSessions(id){
    if(id === undefined) id=0;
    if(mocked === true) return new UserAverageSession(mockedData.USER_AVERAGE_SESSIONS[id]);
}
getUserMainData(id){
    if(id === undefined) id=0;
    if(mocked === true) return new UserMainData(mockedData.USER_MAIN_DATA[id]);
}
}