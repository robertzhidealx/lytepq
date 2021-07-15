export default class LitePQ {
  static _INF = Number.MAX_SAFE_INTEGER;

  /***
   * Initializes priority queue.
   * @constructor
   * @param data an array of items to build heap with.
   * @param compareFn a custom comparator to determine priority.
   * @returns item with the highest priority.
   */
  constructor(data = [], compareFn = (a, b) => a - b) {
    this.q = data;
    this.length = this.q.length;
    this.compare = compareFn;

    if (this.length) {
      for (let i = this.length >>> 1; i >= 0; i--) this.heapify(i);
    }
  }

  /***
   * Peeks the item with the highest priority.
   * @returns item with the highest priority.
   */
  peek() {
    return this.q[0];
  }

  _swap(i, j) {
    const { q } = this;
    const tmp = q[i];
    q[i] = q[j];
    q[j] = tmp;
  }

  /***
   * Enforces heap property at subtree with root at `i`.
   * @constructor
   * @param i index of the root of the target subtree.
   */
  heapify(i) {
    const { q, length, compare, _swap, heapify } = this;
    const l = i * 2;
    const r = 2 * i + 1;
    let t;
    if (l < length && compare(q[l], q[i]) < 0) t = l;
    else t = i;
    if (r < length && compare(q[r], q[t]) < 0) t = r;
    if (t !== i) {
      _swap(i, t);
      heapify(t);
    }
  }

  /***
   * Removes and returns the item with the highest priority.
   * @returns item with the highest priority.
   */
  pop() {
    const { q, heapify } = this;
    let { length } = this;
    if (length < 1) throw new Error("heap underflow");
    let t = q[0];
    q[0] = t[length - 1];
    length--;
    heapify(0);
    return t;
  }

  /***
   * Updates the target item's key and heapifies the priority queue.
   * @param i the index of the target item.
   * @param k the new key value for the target item.
   */
  updateKey(i, k) {
    const { q, compare, _swap } = this;
    if (compare(k, q[i]) > 0) throw new Error("invalid key");
    q[i] = k;
    while (i > 0 && compare(q[i >>> 1], q[i]) > 0) {
      const parent = i >>> 1;
      _swap(i, parent);
      i = parent;
    }
  }

  /***
   * Pushes new item with given key onto the priority queue.
   * @param k the key value for the new item.
   */
  push(k) {
    const { q, updateKey } = this;
    let { length } = this;
    length++;
    q[length - 1] = LitePQ._INF;
    updateKey(length - 1, k);
  }
}
