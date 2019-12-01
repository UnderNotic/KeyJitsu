import HotkeyRegistry from "../HotkeyRegistry";
import keycode from "keycode";

const registry = new HotkeyRegistry();

it("should trigger notHit callback", () => {
  [
    { pressed: ["a"], listenFor: ["t"] },
    { pressed: ["w"], listenFor: ["ctrl+t"] },
    { pressed: ["1"], listenFor: ["t", "x"] },
    { pressed: ["ctrl", "a"], listenFor: ["t"] },
    { pressed: ["ctrl", "e"], listenFor: ["ctr+t"] }
  ].forEach(testArgs => {
    registry.resetLastPressedKeyCodes();

    const cbMock = jest.fn();
    registry.listenFor(testArgs.listenFor, cbMock);

    registry.onKeyPressed(testArgs.pressed.map(p => keycode(p)));

    expect(cbMock.mock.calls.length).toBe(1);
    expect(cbMock.mock.calls[0][0]).toBe(false);
  });
});

it("should trigger hit callback", () => {
  [
    { pressed: ["t"], listenFor: ["t"] },
    { pressed: ["ctrl", "x"], listenFor: ["ctrl+x"] },
    { pressed: ["alt", "1"], listenFor: ["alt+1", "x"] },
    { pressed: ["ctrl", "a"], listenFor: ["ctrl+a"] }
  ].forEach(testArgs => {
    registry.resetLastPressedKeyCodes();

    const cbMock = jest.fn();
    registry.listenFor(testArgs.listenFor, cbMock);

    registry.onKeyPressed(testArgs.pressed.map(p => keycode(p)));

    expect(cbMock.mock.calls.length).toBe(1);
    expect(cbMock.mock.calls[0][0]).toBe(true);
  });
});

it("should not trigger notHit callback when keys are hold down", () => {
  [
    { pressed: ["t"], listenFor: ["a"], expected: false, cbCalls: 1 },
    { pressed: ["t"], listenFor: ["ctrl+x"], cbCalls: 0 },
    { pressed: ["t"], listenFor: ["ctrl+a"], cbCalls: 0 }
  ].forEach(testArgs => {
    const cbMock = jest.fn();
    registry.listenFor(testArgs.listenFor, cbMock);

    registry.onKeyPressed(testArgs.pressed.map(p => keycode(p)));

    expect(cbMock.mock.calls.length).toBe(testArgs.cbCalls);
    if (testArgs.expected) {
      expect(cbMock.mock.calls[0][0]).toBe(testArgs.expected);
    }
  });
});

it("should trigger hit on complex shortcuts", () => {
  [
    { pressed: [["t"], ["a"]], listenFor: ["t a"] },
    { pressed: [["ctrl", "a"], ["x"]], listenFor: ["ctrl+a x"] },
    { pressed: [["a"], ["b"], ["c"], ["d"]], listenFor: ["a b c d"] }
  ].forEach(testArgs => {
    registry.resetLastPressedKeyCodes();
    const cbMock = jest.fn();
    registry.listenFor(testArgs.listenFor, cbMock);

    testArgs.pressed.forEach(p => {
      registry.onKeyPressed(p.map(s => keycode(s)));
    });

    expect(cbMock.mock.calls.length).toBe(1);
    expect(cbMock.mock.calls[0][0]).toBe(true);
  });
});
