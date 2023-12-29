import angular from 'angular';
import '@ovh-ux/ui-kit';
import 'angular-translate';

import component from './component';

const moduleName =
  'ovhManagerPciProjectsProjectComponentBillingChangeMediationBanner';

angular
  .module(moduleName, ['oui', 'pascalprecht.translate'])
  .component('pciProjectBillingChangeMediationBanner', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
