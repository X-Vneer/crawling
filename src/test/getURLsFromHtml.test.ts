import getURLsFromHtml from "../getURlsFromHtml";
import { expect, test } from "vitest";

test("with no ancher tags", () => {
  const baseUrl = "https://baseURL.sth.com";
  const input = `
    <html>
    <head></head>
    <body>
    </body>
    </html>
    `;
  expect(getURLsFromHtml(input, baseUrl)).toEqual([]);
});
test("Ancher tag with absolute url", () => {
  const baseUrl = "https://baseURL.sth.com";

  const input = `
    <html>
    <head></head>
    <body>
    <a href="https://something.sth.com/path">go</a>
    </body>
    </html>
    `;
  expect(getURLsFromHtml(input, baseUrl)).toEqual([
    "https://something.sth.com/path",
  ]);
});

test("Ancher tag with relative url", () => {
  const baseUrl = "https://baseURL.sth.com";
  const input = `
    <html>
    <head></head>
    <body>
    <a href="/path/">go</a>
    </body>
    </html>
    `;
  expect(getURLsFromHtml(input, baseUrl)).toEqual([
    "https://baseURL.sth.com/path",
  ]);
});
test("Ancher tag with invalild url", () => {
  const baseUrl = "https://baseURL.sth.com";
  const input = `
    <html>
    <head></head>
    <body>
    <a href="asfdk">go</a>
    </body>
    </html>
    `;
  expect(getURLsFromHtml(input, baseUrl)).toEqual([]);
});
