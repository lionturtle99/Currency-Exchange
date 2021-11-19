export default class APIService {
  static async APIrequest(){
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${procces.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.JSON();
    }catch(error) {
      console.log(error);
      return error.message;
    }
  };
}