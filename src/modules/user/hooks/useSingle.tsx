import { useQuery } from "@tanstack/react-query";
import * as Types from "../types";
import * as Api from "../api";
import * as Mappers from "../mappers";

interface IProps {
  id: string;
}

const useSingle = ({ id }: { id: IProps }) => {
  const initialUser: Types.IEntity.Single = {
    id: "",
    createdAt: "",
    updatedAt: "",
    email: "",
    latestSession: "",
    name: "",
    phone: "",
    phoneVerified: false,
    emailVerified: false,
    preferences: [],
  };

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const { data } = await Api.Single();
      const user = Mappers.Single(data || {});

      return user;
    },
    initialData: initialUser,
  });

  return data;
};

export default useSingle;
