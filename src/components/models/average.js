import { UserAverageSessionSession } from './session.js'
export class UserAverageSession {
    constructor(data) {
      let arraysessions = [];
      data.sessions.forEach(element => {
        arraysessions.push(new UserAverageSessionSession(element))
      });
      this.sessions = arraysessions;
      this.id = data.id;
    }
  }