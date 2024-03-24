import { useQuery } from "@tanstack/react-query";

interface IUser {
  username: string;
  password: string;
}

const useCurrentUser = (): IUser => {
  
  const {data} = useQuery({queryKey: ['key'], queryFn: async() => {
    //get the user from appwrite
  }})
  
  
  return (
    
  )
};
