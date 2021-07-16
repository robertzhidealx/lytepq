import { test } from "tape";
import LytePQ from ".";

const data = [];
for (let i = 0; i < 100; i++) {
  data.push(Math.trunc(100 * Math.random()));
}
const ascending = data.slice().sort((a, b) => a - b);
const descending = data.slice().sort((a, b) => b - a);

test("min priority queue", (t) => {
  const pq = new LytePQ();
  for (const x of data) pq.push(x);

  t.equal(pq.peek(), ascending[0]);

  const res = [];
  while (pq.length) res.push(pq.pop());

  t.same(res, ascending);

  t.end();
});

test("max priority queue", (t) => {
  const pq = new LytePQ([], (a, b) => b - a);
  for (const x of data) pq.push(x);

  t.equal(pq.peek(), descending[0]);

  const res = [];
  while (pq.length) res.push(pq.pop());

  t.same(res, descending);

  t.end();
});

test("pass data to constructor", (t) => {
  const pq = new LytePQ(data.slice());

  const res = [];
  while (pq.length) res.push(pq.pop());

  t.same(res, ascending);

  t.end();
});

test("max priority queue with object items", (t) => {
  const pq = new LytePQ(
    [
      { k: 0, v: 8 },
      { k: 1, v: 7 },
      { k: 2, v: -1 },
      { k: 3, v: 10 },
    ],
    (a, b) => b.v - a.v
  );

  const sorted = [
    { k: 3, v: 10 },
    { k: 0, v: 8 },
    { k: 1, v: 7 },
    { k: 2, v: -1 },
  ];

  const res = [];
  while (pq.length) res.push(pq.pop());

  t.same(res, sorted);

  t.end();
});

test("initialize priority queue with empty array", (t) => {
  const pq = new LytePQ([]);

  t.same(pq.queue, []);

  t.end();
});
