export class LyteSets {
  constructor(size) {
    this.forest = Array(size).fill(0).map((_, i) => i);
  }

  find(x) {
    const { forest } = this;
    if (forest[x] !== x) forest[x] = this.find(forest[x]);
    return forest[x];
  }

  union(a, b) {
    const { forest }  =this;
    forest[this.find(a)] = forest[this.find(b)];
  }

  query(a, b) {
    return this.find(a) === this.find(b);
  }
}