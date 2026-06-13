import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';
const serverConfig = {
    providers: [provideServerRendering()]
};
export const config = mergeApplicationConfig(appConfig, serverConfig);
