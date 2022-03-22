import Container from 'typedi';
import { SpotifyAuthUrlQuery } from '../../../graphql';
import { GraphqlQuery } from '../../../models/graphql.model';
import { GraphqlQueryResponse } from '../../../../../shared/models/spotify.model';
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
    this.fetchService.query(query).subscribe((data: GraphqlQueryResponse) => {
      // TODO: maybe use partial types instead of optional
      window.location.href = data.spotify.authUrl;
    });
  }
}
