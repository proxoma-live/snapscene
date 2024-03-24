import { account } from "config";
import { ID } from "appwrite";
import * as Types from "./types";

export const createUserAccount = async (user: Types.IEntity.User) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAccount;
  } catch (error) {
    console.log("error");
    return error;
  }
};
