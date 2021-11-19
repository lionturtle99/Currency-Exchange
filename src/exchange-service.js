export default class APIService {
  static async APIRequest(USD){
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      console.log(response.ok);
      if (!response.ok) {
        console.log(response.ok);
        console.log(Error(response.statusText));
        throw Error(response.statusText);
      }
      console.log(response.result);
      console.log(response);
      return await response.json();
    }catch(error) {
      console.log(error);
      return error.message;
    }
  }
}