export default class APIService {
  static async APIRequest(currency, amount){
    try {
      console.log(amount);
      console.log(currency);
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`);
      if (!response.ok) {
        console.log(response.ok);
        throw Error(response.statusText);
      }
      console.log(response.ok);
      console.log(response);
      return await response.json();
    } catch(error) {
      console.log(error);
      return error.message;
    }
  }
}