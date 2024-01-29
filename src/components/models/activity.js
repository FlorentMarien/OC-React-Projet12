import { UserActivitySession } from './session.js'
export class UserActivity {
    constructor(data) {
      let arraysessions = [];
      data.sessions.forEach(element => {
        arraysessions.push(new UserActivitySession(element))
      });
      this.sessions = arraysessions;
      this.id = data.userId;
    }
  }