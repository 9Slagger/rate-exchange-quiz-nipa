import axios from "axios";
import { ENDPOINT } from "../const";

axios.defaults.baseURL = ENDPOINT;

export default axios;
