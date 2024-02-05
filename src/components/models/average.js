import { UserAverageSessionSession } from './session.js'
export class UserAverageSession {
    constructor(data) {
      if(data.status === 200 ){
      let arraysessions = [];
      data.sessions.forEach(element => {
        arraysessions.push(new UserAverageSessionSession(element))
      });
      this.sessions = arraysessions;
      this.id = data.userId;
      }
      this.status = data.status;
      this.statusText = data.statusText;
    }
  }