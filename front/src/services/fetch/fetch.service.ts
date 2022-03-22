import { Service } from 'typedi';
import axios, { AxiosResponse } from 'axios';
import { from, map, Observable } from 'rxjs';
import { GraphqlQuery, GraphqlQueryResponse } from '../../models/graphql.model';

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
    return from(axios.post(this.apiGraphql, query)).pipe(map((val: any) => val.data.data));
  }
}
