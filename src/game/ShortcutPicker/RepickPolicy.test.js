import { ShouldRepick } from "./RepickPolicy";

it("should exclude from history", () => {
  const hotkeys = [
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
    { name: "e" }
  ];
  const history = [0, 1];
  const excludedList = [];
  const maxHistoryLength = 2;

  const res = ShouldRepick(hotkeys, history, excludedList, maxHistoryLength, 3);
  const res2 = ShouldRepick(
    hotkeys,
    history,
    excludedList,
    maxHistoryLength,
    1
  );
  const res3 = ShouldRepick(
    hotkeys,
    history,
    [{ name: "c" }],
    maxHistoryLength,
    1
  );

  const res4 = ShouldRepick(
    hotkeys,
    history,
    [{ name: "c" }, { name: "d" }, { name: "e" }],
    maxHistoryLength,
    0
  );

  expect(res).toBe(false);
  expect(res2).toBe(true);
  expect(res3).toBe(true);
  expect(res4).toBe(false);
});

it("should exclude excluded", () => {
  const hotkeys = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];
  const history = [];
  const excludedList = [{ name: "a" }, { name: "b" }];
  const maxHistoryLength = 2;

  const res = ShouldRepick(hotkeys, history, excludedList, maxHistoryLength, 3);
  const res2 = ShouldRepick(
    hotkeys,
    history,
    excludedList,
    maxHistoryLength,
    1
  );

  expect(res).toBe(false);
  expect(res2).toBe(true);
});

it("should not exclude using history if there is less available hotheys than 2", () => {
  const hotkeys = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];
  const history = [0, 1, 2];
  const excludedList = [];
  const maxHistoryLength = 5;

  const res = ShouldRepick(hotkeys, history, excludedList, maxHistoryLength, 0);
  const res2 = ShouldRepick(
    hotkeys,
    history,
    excludedList,
    maxHistoryLength,
    3
  );
  const res3 = ShouldRepick(
    [...hotkeys, { name: "e" }],
    history,
    [{ name: "e" }],
    maxHistoryLength,
    1
  );

  expect(res).toBe(false);
  expect(res2).toBe(false);
  expect(res3).toBe(false);
});

it("should not exclude from excluded if everything is excluded", () => {
  const hotkeys = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];
  const history = [];
  const excludedList = [
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" }
  ];
  const maxHistoryLength = 5;

  const res = ShouldRepick(hotkeys, history, excludedList, maxHistoryLength, 0);
  const res2 = ShouldRepick(
    hotkeys,
    history,
    excludedList,
    maxHistoryLength,
    3
  );

  expect(res).toBe(false);
  expect(res2).toBe(false);
});

it("should not exclude using history if there is less hotheys after exluding from excluded list", () => {
  const hotkeys = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];
  const history = [0, 1];
  const excludedList = [{ name: "c" }, { name: "d" }];
  const maxHistoryLength = 2;

  const res = ShouldRepick(hotkeys, history, excludedList, maxHistoryLength, 0);
  const res2 = ShouldRepick(
    hotkeys,
    history,
    excludedList,
    maxHistoryLength,
    1
  );

  expect(res).toBe(false);
  expect(res2).toBe(false);
});
