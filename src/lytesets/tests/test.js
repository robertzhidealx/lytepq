import { test } from "tape";
import { LyteSets } from "..";

const N = 100;

test("union unites sets", (t) => {
  const sets = new LyteSets(N);
  sets.union(10, 65);
  sets.union(10, 32);

  t.same(sets.query(10, 65), true);
  t.same(sets.query(10, 32), true);
  t.same(sets.query(32, 65), true);

  t.end();
});