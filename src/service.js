export class APIService {

  static async request(){
    try {
      let url = `https://v6.exchangerate-api.com/v6/${procces.env.API_KEY}/latest/USD`;
      let response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let data = await response.JSON();
    }catch(error) {
      console.log(error);
      return 
    }
    return data
  };
}