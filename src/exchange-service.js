export default class APIService {
  static async APIRequest(currency, amount){
    try {
      const APICall = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`);
      if (!APICall.ok) {
        throw Error(APICall.statusText);
      }
      return await APICall.json();
    } catch(error) {
      console.log(error.message + " it has a value");
      return error.message;
    }
  }
}