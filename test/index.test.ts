import index from "../src/index";

describe("starter", () => {
  it("should return package name", () => {
    const name = "node-ts-starter-template";

    expect(index).toBe(name);
  });
});
