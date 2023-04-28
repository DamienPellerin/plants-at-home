import axios from "axios";
import { BASE_URL, API_KEY } from "../config";

export class PlantsAPI {
  static async fetchSpecies(page) {
    const response = await axios.get(
      `${BASE_URL}plants?token=${API_KEY}&page=${page}`
    );
    console.log(response.data);
    return response.data;
  }

  // recupération des plantes par especes

  static async plantItem(id) {
    const response = await axios.get(
      `${BASE_URL}plants/${id}/?token=${API_KEY}`
    );
    console.log(response.data);
    return response.data;
  }
}
//https://trefle.io/api/v1/plants?token=yhbJsr2dh1FLa0XxJ43iZdpKdxZ4TfPy_lTYEbfCDM0
