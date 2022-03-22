/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, test, expect } from 'vitest';
import LoginController from './P-Login.controller';
import LocalizationService from '../../../services/localization/localization.service';

describe('LoginController', () => {
  const loginController = new LoginController();

  test('is instance created', () => {
    expect(loginController).toBeInstanceOf(LoginController);
  });

  test('is localizationService instancied', () => {
    expect(loginController.localizationService).toBeInstanceOf(LocalizationService);
  });
});
