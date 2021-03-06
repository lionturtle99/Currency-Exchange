export default class APIService {
  static async APIRequest(base, currency, amount){
    try {
      const APICall = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${currency}/${amount}`);
      if (!APICall.ok) {
        throw Error(APICall.statusText);
      }
      return await APICall.json();
    } catch(error) {
      return error.message;
    }
  }
}