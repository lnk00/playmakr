/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, test, expect } from 'vitest';

import LocalizationService from './localization.service';

describe('LocalizationService', () => {
  const localizationService = new LocalizationService();

  test('is instance created', () => {
    expect(localizationService).toBeInstanceOf(LocalizationService);
  });

  test('is strings instancied', () => {
    expect(localizationService.strings).toBeTruthy();
  });
});
