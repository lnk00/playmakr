import { map, Observable } from 'rxjs';
import { Container } from 'typedi';
import { GraphqlQuery } from '../../../models/graphql.model';
import { GraphqlQueryResponse, Top } from '../../../../../shared/models/spotify.model';
import FetchService from '../../../services/fetch/fetch.service';
import { SpotifyTopItems } from '../../../graphql';

export default class HomeController {
  fetchService: FetchService;

  token?: string;

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('token')) this.token = urlParams.get('token')!;

    this.fetchService = Container.get(FetchService);
  }

  getTopItems(): Observable<Top> {
    const query: GraphqlQuery = { query: SpotifyTopItems, variables: { token: this.token } };
    return this.fetchService.query(query).pipe(map((val: GraphqlQueryResponse) => val.spotify.top));
  }
}
