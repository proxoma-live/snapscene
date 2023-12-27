
import { AxiosPromise } from 'axios';

import config from 'config';

export const List = ({ params }: { params: Types.IApi.List.Params }): AxiosPromise<Types.IApi.List.Response> =>
  http.request.post(`${config.services.auth}/url`, {
    per_page: params.perPage,
    page: params.page,
    sort: params.sort,
    search: params.filter
  });

export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`${config.services.auth}/url/${id}`);

