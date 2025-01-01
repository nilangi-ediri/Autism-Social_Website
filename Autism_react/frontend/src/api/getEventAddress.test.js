const getEventAddress = require("./getEventAddress");

const mockSuccessResponse = {
  address: {
    address_1: "The University of Adelaide, 阿德莱德 南澳大利亚州澳大利亚",
    address_2: "",
    city: "阿德莱德",
    region: "SA",
    postal_code: "5005",
    country: "AU",
    latitude: "-34.92060300000001",
    longitude: "138.6062277",
    localized_address_display:
      "The University of Adelaide, 阿德莱德 南澳大利亚州澳大利亚, 阿德莱德, SA 5005",
    localized_area_display: "阿德莱德, SA",
    localized_multi_line_address_display: [
      "The University of Adelaide, 阿德莱德 南澳大利亚州澳大利亚",
      "阿德莱德, SA 5005",
    ],
  },
  resource_uri: "https://www.eventbriteapi.com/v3/venues/195135079/",
  id: "195135079",
  age_restriction: null,
  capacity: null,
  name: "The University of Adelaide, 阿德莱德 南澳大利亚州澳大利亚",
  latitude: "-34.92060300000001",
  longitude: "138.6062277",
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
  const eventadress = await getEventAddress("195135079", apiToken);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://www.eventbriteapi.com/v3/venues/195135079/?token=36E55PWIMNCZFEZWHE4I`,
  );
  expect(eventadress).toBe(mockSuccessResponse); // 期望函数返回正确的组织 ID
});
