import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

@Component({
    selector: 'rxjs-vs-signals',
    template: `
    {{ count() }}
    {{ count$$ | async }}
    {{ count$$.getValue() }}
    {{ count$$.value }}

    <!-- {{ doubleCount() }}
    {{ doubleCount() }}
    {{ doubleCount$ | async }}
    {{ doubleCount$ | async }} -->
  `,
    imports: [AsyncPipe]
})
export class RxjsVsSignals {
  count = signal(3);
  count1 = signal(20);
  count$$ = new BehaviorSubject(3);
  count1$$ = new BehaviorSubject(20);

  doubleCount = computed(() => this.count() * 2);
  doubleCount$ = this.count$$.pipe(
    map((count) => count * 2),
    tap(console.log)
  );

  derivedCount = computed(() => this.count() * this.count1());
  derivedCount$ = combineLatest([this.count$$, this.count1$$]).pipe(
    map(([first, second]) => first * second)
  );

  constructor() {
    // console.log(this.count());
    // console.log(this.count$$.value);
    // effect(() => {
    //   console.log(this.derivedCount());
    // });
    // this.count.set(2);
    // this.count1.set(10);
    // this.derivedCount$.subscribe(console.log);
    // this.count$$.next(2);
    // this.count1$$.next(10);
    // effect(() => {
    //   console.log(this.doubleCount());
    // });
  }
}
