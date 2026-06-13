import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Disable Angular dev mode to suppress runtime warnings (including NG0913)
enableProdMode();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
