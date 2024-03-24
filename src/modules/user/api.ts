import axios, { AxiosPromise } from "axios";
import * as Types from "./types";
import config from "config";

export const Single = async (): AxiosPromise<Types.IApi.Single> => {
  return await axios.get(`${config.baseUrl}/account`);
};
