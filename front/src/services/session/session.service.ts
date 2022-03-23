import { BehaviorSubject } from 'rxjs';
import { Service } from 'typedi';

@Service()
export default class SessionService {
  private $token: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  setToken(token: string | undefined, setLocalStorageFlag = true): void {
    this.$token.next(token);
    if (token && setLocalStorageFlag) localStorage.setItem('playmakr_token', token);
    else if (!token && setLocalStorageFlag) localStorage.removeItem('playmakr_token');
  }

  getToken(): BehaviorSubject<string | undefined> {
    return this.$token;
  }

  static getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('playmakr_token');
  }
}
