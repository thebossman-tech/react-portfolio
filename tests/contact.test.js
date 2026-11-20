import test from "node:test";
import assert from "node:assert/strict";
import { validateContact, buildEmailLink } from "../src/lib/contact.js";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  projectType: "Website / landing page",
  message: "I would like a responsive website for my small business.",
};
test("requires a name, valid email and meaningful message", () => {
  assert.deepEqual(
    Object.keys(
      validateContact({
        ...valid,
        name: " ",
        email: "wrong",
        message: "short",
      }),
    ),
    ["name", "email", "message"],
  );
});
test("accepts valid, trimmed values", () => {
  assert.deepEqual(
    validateContact({ ...valid, name: " Ada ", email: " ada@example.com " }),
    {},
  );
});
test("enforces message limits even outside browser attributes", () => {
  assert.ok(validateContact({ ...valid, message: "x".repeat(3001) }).message);
});
test("encodes special characters in the email handoff without sending", () => {
  const link = buildEmailLink({
    ...valid,
    name: "Ada & Grace",
    message: "A website for R&D? Please include a contact page.",
  });
  assert.ok(link.startsWith("mailto:olatunbosun.olu10@gmail.com?"));
  assert.ok(link.includes("Ada%20%26%20Grace"));
  assert.ok(decodeURIComponent(link).includes("Reply to: ada@example.com"));
});
