export class LytePQ<T> {
  public queue: T[];
  public length: number;
  private _compare: (a: T, b: T) => number;

  /***
   * Initializes priority queue.
   * @constructor
   * @param data an array of items to build heap with.
   * @param compareFn a custom comparator to determine priority.
   * @returns item with the highest priority.
   */
  constructor(data?: T[], compareFn?: (a: T, b: T) => number);

  /***
   * Peeks the item with the highest priority.
   * @returns item with the highest priority.
   */
  peek: () => T;
  private _swap: (q: T[], i: number, j: number) => void;

  /***
   * Enforces heap property at subtree with root at `i`.
   * @constructor
   * @param i index of the root of the target subtree.
   */
  heapify: (i: number) => void;

  /***
   * Removes and returns the item with the highest priority.
   * @returns item with the highest priority.
   */
  pop: () => T | Error;

  /***
   * Updates the target item's key and heapifies the priority queue.
   * @param i the index of the target item.
   * @param k the new key value for the target item.
   */
  updateKey: (i: number, k: T) => void | Error;

  /***
   * Pushes new item with given key onto the priority queue.
   * @param k the key value for the new item.
   */
  push: (k: T) => void;
}

export class LyteSets {
	constructor(size: number);
	forest: number[];
	find(x: number): number;
	union(a: number, b: number): void;
	query(a: number, b: number): boolean;
}