import { map, Observable } from 'rxjs';
import { Container } from 'typedi';
import { GraphqlQuery } from '../../../models/graphql.model';
import { GraphqlQueryResponse, Top } from '../../../../../shared/models/spotify.model';
import FetchService from '../../../services/fetch/fetch.service';
import { SpotifyTopItems } from '../../../graphql';
import SessionService from '../../../services/session/session.service';

export default class HomeController {
  fetchService: FetchService;

  token?: string;

  constructor() {
    this.fetchService = Container.get(FetchService);

    const sessionService = Container.get(SessionService);
    sessionService.getToken().subscribe((token: string | undefined) => {
      this.token = token;
    });
  }

  getTopItems(): Observable<Top> {
    const query: GraphqlQuery = { query: SpotifyTopItems, variables: { token: this.token } };
    return this.fetchService.query(query).pipe(map((val: GraphqlQueryResponse) => val.spotify.top));
  }
}
