import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { appConfig } from './app/app.config';

registerLocaleData(localeEs, 'es');

bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));

// export { renderModule, renderModuleFactory } from '@angular/platform-server';
