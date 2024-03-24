import * as Types from "./types";
import { get } from "lodash";

export const Single = (item?: any): Types.IEntity.Single => ({
  id: get(item, "id") || "",
  createdAt: get(item, "createdAt") || "",
  email: get(item, "email") || "",
  emailVerified: get(item, "emailVerified") || false,
  latestSession: get(item, "latestSession") || "",
  name: get(item, "name") || "",
  phone: get(item, "phone") || "",
  phoneVerified: get(item, "phoneVerified") || "",
  preferences: get(item, "preferences") || "",
  updatedAt: get(item, "updatedAt") || "",
});
