
import mockedData from './data.js';
let mocked = true;

export default class Services{

getUserActivity(id){
    if(id === undefined) id=0;
    if(mocked === true) return mockedData.USER_ACTIVITY[id];
    //else return getApiUserActivity();
}
getUserPerformances(id){
    if(id === undefined) id=0;
    if(mocked === true) return mockedData.USER_PERFORMANCE[id];
}
getUserAverageSessions(id){
    if(id === undefined) id=0;
    if(mocked === true) return mockedData.USER_AVERAGE_SESSIONS[id];
}
getUserMainData(id){
    if(id === undefined) id=0;
    if(mocked === true) return mockedData.USER_MAIN_DATA[id];
}
}