export default class LytePQ {
  constructor(data = [], compareFn = (a, b) => a - b) {
    this.queue = data;
    this.length = this.queue.length;
    this._compare = compareFn;
    this._INF =
      compareFn(1, 0) > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;

    if (this.length) {
      for (let i = (this.length >>> 1) - 1; i >= 0; i--) this.heapify(i);
    }
  }

  peek() {
    const { queue } = this;
    return queue[0];
  }

  _swap(i, j) {
    const { queue } = this;
    const tmp = queue[i];
    queue[i] = queue[j];
    queue[j] = tmp;
  }

  heapify(i) {
    const { queue, length } = this;
    const l = i * 2;
    const r = 2 * i + 1;
    let t;
    if (l < length && this._compare(queue[l], queue[i]) < 0) t = l;
    else t = i;
    if (r < length && this._compare(queue[r], queue[t]) < 0) t = r;
    if (t !== i) {
      this._swap(i, t);
      this.heapify(t);
    }
  }

  pop() {
    const { queue } = this;
    if (this.length < 1) throw new Error("heap underflow");
    const t = queue[0];
    queue[0] = queue[this.length - 1];
    this.length--;
    this.heapify(0);
    return t;
  }

  updateKey(i, k) {
    const { queue } = this;
    if (this._compare(k, queue[i]) > 0) throw new Error("invalid key");
    queue[i] = k;
    while (i > 0 && this._compare(queue[i >>> 1], queue[i]) > 0) {
      const parent = i >>> 1;
      this._swap(i, parent);
      i = parent;
    }
  }

  push(k) {
    const { queue } = this;
    this.length++;
    queue[this.length - 1] = this._INF;
    this.updateKey(this.length - 1, k);
  }
}
