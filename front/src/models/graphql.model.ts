import { GraphqlQueryResponse } from '../../../shared/models/spotify.model';

export interface GraphqlQuery {
  query: string;
  variables?: any;
}

export interface GraphqlError {
  statusCode: number;
  status: string;
}

export interface GraphqlQueryResponseWrapper {
  data: GraphqlQueryResponse;
  error?: GraphqlError;
}
