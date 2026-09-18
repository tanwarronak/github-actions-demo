import test from "node:test";
import assert from "node:assert";
import { app } from "../src/app.js";

test("GET / should return Hello World!", async () => {
  const server = app.listen(0);

  try {
    const { port } = server.address();

    const response = await fetch(`http://localhost:${port}/`);

    assert.strictEqual(response.status, 200);

    const body = await response.text();

    assert.strictEqual(body, "Hello World!");
  } finally {
    server.close();
  }
});