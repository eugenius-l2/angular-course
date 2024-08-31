import {
  animationFrameScheduler,
  asapScheduler,
  asyncScheduler,
  interval,
  observeOn,
  of,
  queueScheduler,
  take,
} from 'rxjs';

export function workWithSchedulars(): void {
  function workWithWithoutScheduler(): void {
    console.log('Start');

    of(1, 2, 3).subscribe((value) => console.log(value));

    Promise.resolve().then(() => console.log('promise'));

    setTimeout(() => {
      console.log('setTimeout');
    });

    console.log('End');
  }

  function workWithAsyncScheduler(): void {
    console.log('Start');

    of(1, 2, 3)
      .pipe(observeOn(asyncScheduler))
      .subscribe((value) => console.log(value));

    Promise.resolve().then(() => console.log('promise'));

    setTimeout(() => {
      console.log('setTimeout');
    });

    console.log('End');
  }

  function workWithQueueScheduler(): void {
    console.log('Start');

    of(1, 2, 3)
      .pipe(observeOn(queueScheduler))
      .subscribe((value) => console.log(value));

    Promise.resolve().then(() => console.log('promise'));

    setTimeout(() => {
      console.log('setTimeout');
    });

    console.log('End');
  }

  function workWithAsapScheduler(): void {
    console.log('Start');

    of(1, 2, 3)
      .pipe(observeOn(asapScheduler))
      .subscribe((value) => console.log(value));

    Promise.resolve().then(() => console.log('promise'));

    setTimeout(() => {
      console.log('setTimeout');
    });

    console.log('End');
  }

  function workWithAnimationFrameScheduler(): void {
    console.log('Start');

    interval(0, animationFrameScheduler)
      .pipe(take(3), observeOn(animationFrameScheduler))
      .subscribe((value) => console.log(value));

    Promise.resolve().then(() => console.log('promise'));

    setTimeout(() => {
      console.log('setTimeout');
    });

    console.log('End');
  }

  //   workWithWithoutScheduler();
  //   workWithAsyncScheduler();
  //   workWithQueueScheduler();
  //   workWithAsapScheduler();
  //   workWithAnimationFrameScheduler();
}
