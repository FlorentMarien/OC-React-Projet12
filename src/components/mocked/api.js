/*
- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 4.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
*/

export default class Api{
constructor(id){
    this.id = id;
}
async requestApi(url){
    let tampon;
    await fetch(url)
    .then((resp) => resp.json())
    .then((resp)=>{
        tampon = resp.data;
    })
    .catch(function() {
        
    });
    return tampon;
    }
async getUserApiActivity(){
    return await this.requestApi('http://localhost:3000/user/'+this.id+'/activity');;
}
async getUserApiPerformances(){
    return  await this.requestApi('http://localhost:3000/user/'+this.id+'/performance');
}
async getUserApiAverageSessions(){
    return  await this.requestApi('http://localhost:3000/user/'+this.id+'/average-sessions');
}
async getUserApiMainData(){
    return  await this.requestApi('http://localhost:3000/user/'+this.id);
}
}