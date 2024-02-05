
export class UserPerformance {
    constructor(data) {
      if(data.status === 200 ){
      this.data = data.data
      this.kind = data.kind;
      this.id = data.userId;
      }
      this.status = data.status;
      this.statusText = data.statusText;
    }
  }