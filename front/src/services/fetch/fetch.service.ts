import { Service } from 'typedi';
import axios, { AxiosResponse } from 'axios';
// eslint-disable-next-line object-curly-newline
import { from, map, Observable } from 'rxjs';
import { GraphqlError, GraphqlQuery, GraphqlQueryResponseWrapper } from '../../models/graphql.model';

@Service()
export default class FetchService {
  private apiBaseUrl: string;

  private apiGraphql: string;

  constructor() {
    this.apiBaseUrl = 'http://localhost:8080';
    this.apiGraphql = `${this.apiBaseUrl}/graphql`;
  }

  get(url: string): Observable<AxiosResponse> {
    return from(axios.get(this.apiBaseUrl + url)).pipe(map((val: any) => val.data));
  }

  query(query: GraphqlQuery): Observable<GraphqlQueryResponseWrapper> {
    return from(axios.post(this.apiGraphql, query)).pipe(
      map((res: AxiosResponse) => ({
        data: res.data.data,
        error: FetchService.errorHandler(res),
        // eslint-disable-next-line comma-dangle
      }))
    );
  }

  static errorHandler(res: AxiosResponse): GraphqlError | undefined {
    if (res.data.errors) {
      const found401Error = res.data.errors.find((element: any) => JSON.parse(element.message).statusCode === 401);
      if (found401Error) {
        localStorage.removeItem('playmakr_token');
        return {
          statusCode: JSON.parse(found401Error.message).statusCode,
          status: JSON.parse(found401Error.message).status,
        };
      }
    }

    return undefined;
  }
}
