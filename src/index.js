export default class LytePQ {
  constructor(data = [], compareFn = (a, b) => a - b) {
    this.queue = data, this.length = this.queue.length;
    this._compare = compareFn;

    if (this.length)
      for (let i = (this.length >>> 1) - 1; i >= 0; i--) this.heapify(i);
  }

  peek() {
    return this.queue[0];
  }

  _swap(i, j) {
    const { queue } = this, tmp = queue[i];
    queue[i] = queue[j], queue[j] = tmp;
  }

  heapify(i) {
    const { queue, length } = this, l = (i << 1) + 1, r = l + 1;
    let t = i;
    if (l < length && this._compare(queue[l], queue[i]) < 0) t = l;
    if (r < length && this._compare(queue[r], queue[t]) < 0) t = r;
    if (t !== i) this._swap(i, t), this.heapify(t);
  }

  pop() {
    const { queue } = this;
    if (!this.length) throw new Error("heap underflow");
    const t = queue[0];
    queue[0] = queue[this.length - 1], this.length--, this.heapify(0);
    return t;
  }

  updateKey(i, k) {
    const { queue, _compare } = this;
    if (queue[i] !== undefined && _compare(k, queue[i]) > 0)
      throw new Error("invalid key");
    queue[i] = k;
    while (i > 0 && this._compare(queue[i - 1 >>> 1], queue[i]) > 0) {
      const parent = i - 1 >>> 1;
      this._swap(i, parent), i = parent;
    }
  }

  push(k) {
    const { queue } = this;
    this.length++, queue[this.length - 1] = undefined;
    this.updateKey(this.length - 1, k);
  }
}
