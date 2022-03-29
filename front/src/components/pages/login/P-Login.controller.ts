import Container from 'typedi';
import { SpotifyAuthUrlQuery } from '../../../graphql';
import { GraphqlQuery, GraphqlQueryResponseWrapper } from '../../../models/graphql.model';
import FetchService from '../../../services/fetch/fetch.service';
import LocalizationService from '../../../services/localization/localization.service';

export default class LoginController {
  public localizationService: LocalizationService;

  public fetchService: FetchService;

  constructor() {
    this.localizationService = Container.get(LocalizationService);
    this.fetchService = Container.get(FetchService);
  }

  onClickConnect(): void {
    const query: GraphqlQuery = { query: SpotifyAuthUrlQuery };
    this.fetchService.query(query).subscribe((res: GraphqlQueryResponseWrapper) => {
      window.location.href = res.data.spotify.authUrl;
    });
  }
}
