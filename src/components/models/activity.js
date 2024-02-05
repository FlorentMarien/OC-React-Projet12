import { UserActivitySession } from './session.js'
export class UserActivity {
    constructor(data) {
      if(data.status === 200 ){
        let arraysessions = [];
        data.sessions.forEach(element => {
          arraysessions.push(new UserActivitySession(element))
        });
        this.sessions = arraysessions;
        this.id = data.userId;
      }
      this.status = data.status;
      this.statusText = data.statusText;
    }
  }