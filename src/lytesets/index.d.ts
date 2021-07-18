export class LyteSets {
  constructor(size: number);
  forest: number[];
  find(x: number): number;
  union(a: number, b: number): void;
  query(a: number, b: number): boolean;
}
