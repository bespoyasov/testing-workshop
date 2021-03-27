import { fetchCourse } from ".";

beforeEach(() => {
  global.fetch = jest.fn(() => {
    return {
      json: async () => "Test Response",
    };
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("when requested", () => {
  it("should call a required URL", async () => {
    await fetchCourse();

    expect(global.fetch).toHaveBeenCalledWith("http://localhost:4000/course");
  });

  it("should return the json from the response", async () => {
    const result = await fetchCourse();
    expect(result).toEqual("Test Response");
  });
});
