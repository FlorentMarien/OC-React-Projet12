
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
getModelData(data,type){
    let modelData;
    switch (type){
        case "ACTIVITY":
            modelData = new UserActivity(data);
            break;
        case "PERFORMANCE":
            modelData = new UserPerformance(data);
            break;
        case "AVERAGE":
            modelData = new UserAverageSession(data);
            break;
        case "MAIN-DATA":
            modelData = new UserMainData(data);
            break;
    }
    return modelData;
}
async getData(id,type){
    let data = { status:null, statusText:null };
    if(mocked === true){
        switch (type){
            case "ACTIVITY":
                mockedData.USER_ACTIVITY.every((element)=>{
                    if(element.userId === Number(id)){ 
                        data = element;
                        data.status = 200;
                        data.statusText = "Ok";
                        return false;
                    }else{
                        return true;
                    }
                });
                break;
            case "PERFORMANCE":
                mockedData.USER_PERFORMANCE.every((element)=>{
                    if(element.userId === Number(id)){ 
                        data = element;
                        data.status = 200;
                        data.statusText = "Ok";
                        return false;
                    }else{
                        return true;
                    }
                });
                break;
            case "AVERAGE":
                mockedData.USER_AVERAGE_SESSIONS.every((element)=>{
                    if(element.userId === Number(id)){ 
                        data = element;
                        data.status = 200;
                        data.statusText = "Ok";
                        return false;
                    }else{
                        return true;
                    }
                });
                break;
            case "MAIN-DATA":
                mockedData.USER_MAIN_DATA.every((element)=>{
                    if(element.id === Number(id)){ 
                        data = element;
                        data.status = 200;
                        data.statusText = "Ok";
                        return false;
                    }else{
                        return true;
                    }
                });
                break;
        }
    }else{
        if(type === "ACTIVITY") data = await this.clientApi.getUserApiActivity(id);
        if(type === "PERFORMANCE") data = await this.clientApi.getUserApiPerformances(id);
        if(type === "AVERAGE") data = await this.clientApi.getUserApiAverageSessions(id);
        if (type === "MAIN-DATA") data = await this.clientApi.getUserApiMainData(id);
    }

    if(data.status === 200 ){
        let modelData = this.getModelData(data,type);
        modelData.status = data.status;
        modelData.statusText = data.statusText;
        return modelData;
    }else{
        if(data.status === null){
            data.status=404;
            data.statusText="404 Not found";
        }
        return data;
    }
}

async getUserActivity(id){
    return await this.getData(id,"ACTIVITY");
}
 async getUserPerformances(id){
    return await this.getData(id,"PERFORMANCE");
}
async getUserAverageSessions(id){
    return await this.getData(id,"AVERAGE");
}
async getUserMainData(id){
    return await this.getData(id,"MAIN-DATA");
}
}