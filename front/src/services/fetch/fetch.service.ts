import { Service } from 'typedi';
import axios, { AxiosResponse } from 'axios';
// eslint-disable-next-line object-curly-newline
import { from, map, Observable, tap } from 'rxjs';
import { GraphqlQuery } from '../../models/graphql.model';
import { GraphqlQueryResponse } from '../../../../shared/models/spotify.model';

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

  query(query: GraphqlQuery): Observable<GraphqlQueryResponse> {
    return from(axios.post(this.apiGraphql, query))
      .pipe(tap(FetchService.error401Handler.bind(this)))
      .pipe(map((val: any) => val.data.data));
  }

  static error401Handler(res: AxiosResponse) {
    if (res.data.errors) {
      const found401Error = res.data.errors.find((element: any) => JSON.parse(element.message).statusCode === 401);
      if (found401Error) console.log('ERROR: ', found401Error);
    }
  }
}
