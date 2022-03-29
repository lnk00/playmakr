import { Router } from 'vue-router';
import { map, Observable } from 'rxjs';
import { Container } from 'typedi';
import { GraphqlQuery, GraphqlQueryResponseWrapper } from '../../../models/graphql.model';
import { Top } from '../../../../../shared/models/spotify.model';
import FetchService from '../../../services/fetch/fetch.service';
import { SpotifyTopItems } from '../../../graphql';
import SessionService from '../../../services/session/session.service';

export default class HomeController {
  fetchService: FetchService;

  router: Router;

  token?: string;

  constructor(router: Router) {
    this.fetchService = Container.get(FetchService);
    this.router = router;

    const sessionService = Container.get(SessionService);
    sessionService.getToken().subscribe((token: string | undefined) => {
      this.token = token;
    });
  }

  getTopItems(): Observable<Top> {
    const query: GraphqlQuery = { query: SpotifyTopItems, variables: { token: this.token } };
    return this.fetchService.query(query).pipe(
      map((res: GraphqlQueryResponseWrapper) => {
        if (res.error) this.router.push('/login');
        return res.data.spotify.top;
        // eslint-disable-next-line comma-dangle
      })
    );
  }
}
