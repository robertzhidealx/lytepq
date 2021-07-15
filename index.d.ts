export default class LytePQ<T> {
  static _INF: number;
  public q: T[];
  public length: number;
  private compare: (a: T, b: T) => number;
  constructor(data?: T[], compareFn?: (a: T, b: T) => number);
  peek: () => T;
  private _swap: (i: number, j: number) => void;
  heapify: (i: number) => void;
  pop: () => T | Error;
  updateKey: (i: number, k: T) => void | Error;
  push: (k: T) => void;
}
