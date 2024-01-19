export class UserActivitySession {
    constructor(data) {
      this.day = data.day;
      this.kilogram = data.kilogram;
      this.calories = data.calories;
    }
  }

  export class UserAverageSessionSession {
    constructor(data) {
      this.day = data.day;
      this.sessionLength = data.sessionLength;
    }
  }