const getOrganisationId = require("./getOrganisationId");

const mockSuccessResponse = {
  organizations: [
    {
      _type: "organization",
      name: "KAITAO LI",
      vertical: "default",
      parent_id: null,
      locale: null,
      created: "2024-01-22T22:02:31",
      image_id: null,
      id: "1979017765573",
    },
  ],
  pagination: {
    object_count: 1,
    continuation:
      "AGWl1yHnJGD4PyQwhTqacMolJ5EFXGsewlJEVV4wgz620XLPjBs-_dRoOhYDkHUCUYCdjHVkVagv",
    page_count: 1,
    page_size: 50,
    has_more_items: false,
    page_number: 1,
  },
};

// 模拟 fetch 函数
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockSuccessResponse),
  }),
);

// 在每个测试之前清除所有模拟的调用、实例和结果
beforeEach(() => {
  fetch.mockClear();
});

test("fetches organization id from Eventbrite API", async () => {
  const apiToken = "36E55PWIMNCZFEZWHE4I"; // 用你的实际 API 令牌替换此处
  const orgId = await getOrganisationId(apiToken);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://www.eventbriteapi.com/v3/users/me/organizations/?token=${"36E55PWIMNCZFEZWHE4I"}`,
  );
  expect(orgId).toBe("1979017765573"); // 期望函数返回正确的组织 ID
});
