import axios from "axios";
import { BASE_URL, API_KEY } from "../config";

export class PlantsAPI {
  static async fetchSpecies() {
    const response = await axios.get(
      `${BASE_URL}species?token=${API_KEY}&language=fr`
    );
    console.log(response.data);
    return response.data;
  }
}
