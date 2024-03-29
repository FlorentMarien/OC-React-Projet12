
export class UserMainData {
    constructor(data) {
      this.id = data.id;
      this.userInfos = new UserInfo(data.userInfos);
      this.keyData = new UserKeyData(data.keyData);
      data.todayScore === undefined ? this.todayScore = data.score : this.todayScore = data.todayScore;
      
    }
  }
export class UserInfo{
  constructor(data){
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
  }
}
export class UserKeyData{
  constructor(data){
    this.calorieCount = data.calorieCount;
    this.proteinCount = data.proteinCount;
    this.carbohydrateCount = data.carbohydrateCount;
    this.lipidCount = data.lipidCount;
  }
}