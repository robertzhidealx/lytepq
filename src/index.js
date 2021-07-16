export default class LytePQ {
  constructor(data = [], compareFn = (a, b) => a - b) {
    this.q = data;
    this.length = this.q.length;
    this._compare = compareFn;
    this._INF = Number.MAX_SAFE_INTEGER;

    if (this.length) {
      for (let i = (this.length >>> 1) - 1; i >= 0; i--) this.heapify(i);
    }
  }

  peek() {
    return this.q[0];
  }

  _swap(i, j) {
    const { q } = this;
    const tmp = q[i];
    q[i] = q[j];
    q[j] = tmp;
  }

  heapify(i) {
    const { q, length, _compare, _swap, heapify } = this;
    const l = i * 2;
    const r = 2 * i + 1;
    let t;
    if (l < length && _compare(q[l], q[i]) < 0) t = l;
    else t = i;
    if (r < length && _compare(q[r], q[t]) < 0) t = r;
    if (t !== i) {
      _swap(i, t);
      heapify(t);
    }
  }

  pop() {
    const { q, heapify } = this;
    let { length } = this;
    if (length < 1) throw new Error("heap underflow");
    const t = q[0];
    q[0] = q[length - 1];
    length--;
    heapify(0);
    return t;
  }

  updateKey(i, k) {
    const { q, _compare, _swap } = this;
    if (_compare(k, q[i]) > 0) throw new Error("invalid key");
    q[i] = k;
    while (i > 0 && _compare(q[i >>> 1], q[i]) > 0) {
      const parent = i >>> 1;
      _swap(i, parent);
      i = parent;
    }
  }

  push(k) {
    const { q, updateKey } = this;
    let { length } = this;
    length++;
    q[length - 1] = this._INF;
    updateKey(length - 1, k);
  }
}
