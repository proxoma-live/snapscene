export declare namespace IApi {
  export namespace Single {
    type Hash = string;

    interface IHashOptions {
      type: Hash;
      memoryCost: number;
      timeCost: number;
      threads: number;
    }

    export interface Response {
      id: string;
      $createdAt: string;
      $updatedAt: string;
      name: string;
      password: string;
      hash: string;
      hashOptions: IHashOptions[];
      registration: string;
      status: boolean;
      lables: string[];
      passwordupdate: [];
      email: string;
      phone: string;
      emailVerification: boolean;
      phoneVerification: boolean;
      prefs: [];
      accessedAt: string;
    }
  }

  export namespace List {
    export interface Response {
      content: [];
    }
    export interface Params {
      page?: number;
      perPage?: number;
      sort?: {
        name?: string;
        direction?: "ASC" | "DESC";
      };
      filter?: Filter[];
    }

    export interface Filter {
      key: string;
      operation: ">" | ">=" | "<" | "<=" | "=" | "!=";
      value: string | number;
    }
  }

  export interface user {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Single {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    preferences: [];
    latestSession: string;
  }
}
