import {
  AsyncSubject,
  BehaviorSubject,
  combineLatest,
  concat,
  concatMap,
  delay,
  exhaustMap,
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  Observable,
  of,
  OperatorFunction,
  ReplaySubject,
  Subject,
  switchMap,
  zip,
} from 'rxjs';

export function workWithObservables(): void {
  function workWithCreationObservable(): void {
    const myObservable = new Observable((subscriber) => {
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });

    // Creating an Observer
    const observer = {
      next: (value: any) => console.log(value),
      error: (err: any) => console.error('Error:', err),
      complete: () => console.log('Completed'),
    };

    // Subscribing the Observer to the Observable
    const subscription = myObservable.subscribe(observer);
    // subscription.unsubscribe();
  }

  function workWithOf(): void {
    const source = of(1, 2, 3, 4, 5);
    source.subscribe((value) => console.log(value));
  }

  function workWithInterval(): void {
    const source = interval(1000);
    source.subscribe((value) => console.log(value));
  }

  function workWithFromEvent(): void {
    const element = document.createElement('div');
    const source = fromEvent(element, 'click');
    source.subscribe((event) => console.log(event));

    element.click();
  }

  function workWithMap(): void {
    const source = of(1, 2, 3, 4, 5);
    source
      .pipe(map((value) => value * 2))
      .subscribe((value) => console.log(value));
  }

  function workWithFilter(): void {
    const source = of(1, 2, 3, 4, 5);
    source
      .pipe(filter((value) => value > 3))
      .subscribe((value) => console.log(value));
  }

  function workWithSwitchMap(): void {
    const source = of(1, 2, 3, 4, 5);
    source
      .pipe(
        switchMap((value) => {
          console.log('prev value -', value);
          return interval(1000);
        })
      )
      .subscribe((value) => console.log(value));
  }

  function workWithConcatMap(): void {
    const ids = [1, 2, 3];

    const fetchData = (id: number) => {
      console.log(`Fetching data for ID ${id}`);
      return of(`Data for ID ${id}`).pipe(delay(1000 - id * 500));
    };

    from(ids)
      .pipe(concatMap((id) => fetchData(id)))
      .subscribe((data) => console.log(data));
  }

  function workWithMergeMap(): void {
    const ids = [1, 2, 3];

    const fetchData = (id: number) => {
      console.log(`Fetching data for ID ${id}`);
      return of(`Data for ID ${id}`).pipe(delay(1000 - id * 500));
    };

    from(ids)
      .pipe(mergeMap((id) => fetchData(id)))
      .subscribe((data) => console.log(data));
  }

  function workWithExhaustMap(): void {
    const saveData = () => {
      console.log('Saving data...');
      return of('Data saved!').pipe(delay(2000));
    };

    fromEvent(document, 'click')
      .pipe(exhaustMap(() => saveData()))
      .subscribe((result) => console.log(result));
  }

  function workWithCustomOperator(): void {
    function customMap<T, R>(project: (value: T) => R): OperatorFunction<T, R> {
      return (source: Observable<T>): Observable<R> =>
        new Observable<R>((observer) => {
          return source.subscribe({
            next(value) {
              try {
                const result = project(value);
                observer.next(result);
              } catch (err) {
                observer.error(err);
              }
            },
            error(err) {
              observer.error(err);
            },
            complete() {
              observer.complete();
            },
          });
        });
    }

    const source = of(1, 2, 3, 4, 5);
    source
      .pipe(customMap((value) => value * 2))
      .subscribe((value) => console.log(value));
  }

  function workWithCombineLatest(): void {
    const source1 = of(1, 2, 3);
    const source2 = of('A', 'B', 'C');
    combineLatest([source1, source2]).subscribe((values) =>
      console.log(values)
    );
  }

  function workWithForkJoin(): void {
    const source1 = of(1, 2, 3);
    const source2 = of('A', 'B', 'C');
    forkJoin([source1, source2]).subscribe((values) => console.log(values));
  }

  function workWithConcat(): void {
    const source1 = of(1, 2, 3);
    const source2 = of('A', 'B', 'C');
    concat(source1, source2).subscribe((value) => console.log(value));
  }

  function workWithMerge(): void {
    const click$ = fromEvent(document, 'click');
    const mouseMove$ = fromEvent(document, 'mousemove');

    merge(click$, mouseMove$).subscribe((event) => {
      console.log('Event type:', event.type);
    });
  }

  function workWithZip(): void {
    const names$ = of('Alice', 'Bob', 'Charlie');
    const ages$ = of(25, 30, 35);

    zip(names$, ages$).subscribe(([name, age]) => {
      console.log(`${name} is ${age} years old`);
    });
  }

  function workWithSubject(): void {
    const subject = new Subject<number>();

    subject.subscribe((value) => console.log(`Subscriber 1: ${value}`));
    subject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

    subject.next(1);
    subject.next(2);
  }

  function workWithBehaviorSubject(): void {
    const behaviorSubject = new BehaviorSubject<number>(0);

    behaviorSubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));

    behaviorSubject.next(1);
    behaviorSubject.next(2);

    behaviorSubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

    behaviorSubject.next(3);
  }

  function workWithReplaySubject(): void {
    const replaySubject = new ReplaySubject<number>(2);

    replaySubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));

    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);

    replaySubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

    replaySubject.next(4);
  }

  function workWithAsyncSubject(): void {
    const asyncSubject = new AsyncSubject<number>();

    asyncSubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));

    asyncSubject.next(1);
    asyncSubject.next(2);

    asyncSubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

    asyncSubject.next(3);
    asyncSubject.complete();
  }

  //   workWithCreationObservable();
  //   workWithOf();
  //   workWithInterval();
  //   workWithFromEvent();

  // Operators
  //   workWithMap();
  //   workWithFilter();
  //   workWithSwitchMap();
  //   workWithConcatMap();
  //   workWithMergeMap();
  //   workWithExhaustMap();
  workWithCustomOperator();

  // Higher-order Operators
  //   workWithCombineLatest();
  //   workWithForkJoin();
  //   workWithConcat();
  //   workWithMerge();
  //   workWithZip();

  // Subjects
  //   workWithSubject();
  //   workWithBehaviorSubject();
  //   workWithReplaySubject();
  //   workWithAsyncSubject();
}
