
export declare namespace IApi {
  export namespace List {
    export interface Response {
      content: []
    }
    export interface Params {
      page?: number;
      perPage?: number;
      sort?: {
        name?: string;
        direction?: 'ASC' | 'DESC';
      }
      filter?: Filter[]
    }

    export interface Filter {
      key: string;
      operation: '>' | '>=' | '<' | '<=' | '=' | '!=';
      value: string | number;
    }
  }

  export interface Single {
    export type Response = {auth}
  }

  export interface auth {
    id: string;
  }
}

export declare namespace IEntity {
  export interface auth {
    id: string;
  }
}

