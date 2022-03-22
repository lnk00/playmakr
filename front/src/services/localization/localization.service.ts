import 'reflect-metadata';
import { Service } from 'typedi';
import LocalizedStrings, { LocalizedStringsMethods } from 'localized-strings';

export interface IStrings extends LocalizedStringsMethods {
  login: {
    brand: string;
    motto: string;
    connect: string;
  };
}

@Service()
export default class LocalizationService {
  public strings: IStrings;

  constructor() {
    this.strings = new LocalizedStrings({
      en: {
        login: {
          brand: 'Playmakr.',
          motto: 'We build the perfect playlist for your needs.',
          connect: 'Sign-in with',
        },
      },
      fr: {
        login: {
          brand: 'Playmakr.',
          motto: 'Nous créons la playlist parfaite pour vos besoins.',
          connect: 'Se connecter avec',
        },
      },
    });
  }
}
