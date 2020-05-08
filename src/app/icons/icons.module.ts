import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ArrowLeft, ArrowRight } from 'angular-feather/icons';

const icons = {
  ArrowLeft,
  ArrowRight,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
