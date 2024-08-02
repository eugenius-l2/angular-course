import { inject } from '@angular/core';
import {
  Route,
  Routes,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { FeatureComponent } from './components/feature/feature.component';
import { MainComponent } from './components/main/main.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { NestedComponent } from './components/nested/nested.component';
import { ParamsComponent } from './components/params/params.component';
import { SecondComponent } from './components/second/second.component';
import { DataService } from './services/data.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'lazy-activate',
    canActivate: [() => false],
    loadComponent: () =>
      import('./components/lazy/lazy.component').then((m) => m.LazyComponent),
  },
  {
    path: 'lazy-match',
    canMatch: [() => false],
    loadComponent: () =>
      import('./components/lazy/lazy.component').then((m) => m.LazyComponent),
  },
  {
    path: 'feature',
    component: FeatureComponent,
    resolve: { data: () => inject(DataService).getData() },
    canDeactivate: [(component: FeatureComponent) => component.canDeactivate()],
  },
  {
    path: 'nested',
    component: NestedComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
    outlet: 'second',
  },
  {
    path: 'params',
    component: ParamsComponent,
  },
  {
    path: 'params/:id',
    component: ParamsComponent,
  },
  {
    component: MatcherComponent,
    matcher: (
      url: UrlSegment[],
      group: UrlSegmentGroup,
      route: Route
    ): UrlMatchResult | null => {
      // console.log(url, group, route);
      return url.length === 1 && url[0].path.includes('match1')
        ? { consumed: url }
        : null;
    },
  },
];
