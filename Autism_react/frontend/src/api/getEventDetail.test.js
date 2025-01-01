const getEventDetail = require("./getEventDetail");

const mockSuccessResponse = {
  pagination: {
    object_count: 2,
    page_number: 1,
    page_size: 50,
    page_count: 1,
    has_more_items: false,
  },
  events: [
    {
      name: {
        text: "just for testing",
        html: "just for testing",
      },
      description: {
        text: "This is a testing event for website api",
        html: "This is a testing event for website api",
      },
      url: "https://www.eventbrite.com/e/just-for-testing-tickets-807552480207",
      start: {
        timezone: "Australia/Adelaide",
        local: "2024-03-03T19:00:00",
        utc: "2024-03-03T08:30:00Z",
      },
      end: {
        timezone: "Australia/Adelaide",
        local: "2024-03-03T22:00:00",
        utc: "2024-03-03T11:30:00Z",
      },
      organization_id: "1979017765573",
      created: "2024-01-23T06:03:44Z",
      changed: "2024-01-23T06:07:16Z",
      published: "2024-01-23T06:07:16Z",
      capacity: 25,
      capacity_is_custom: true,
      status: "live",
      currency: "AUD",
      listed: false,
      shareable: false,
      invite_only: false,
      online_event: true,
      show_remaining: false,
      tx_time_limit: 1200,
      hide_start_date: false,
      hide_end_date: false,
      locale: "en_AU",
      is_locked: false,
      privacy_setting: "unlocked",
      is_series: false,
      is_series_parent: false,
      inventory_type: "limited",
      is_reserved_seating: false,
      show_pick_a_seat: false,
      show_seatmap_thumbnail: false,
      show_colors_in_seatmap_thumbnail: false,
      source: "coyote",
      is_free: true,
      version: null,
      summary: "This is a testing event for website api",
      facebook_event_id: null,
      logo_id: "680506719",
      organizer_id: "77892163963",
      venue_id: null,
      category_id: "199",
      subcategory_id: null,
      format_id: "100",
      id: "807552480207",
      resource_uri: "https://www.eventbriteapi.com/v3/events/807552480207/",
      is_externally_ticketed: false,
      logo: {
        crop_mask: {
          top_left: {
            x: 0,
            y: 64,
          },
          width: 1792,
          height: 896,
        },
        original: {
          url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F680506719%2F1523627996173%2F1%2Foriginal.20240123-060359?auto=format%2Ccompress&q=75&sharp=10&s=ea56ab7d648de998a128b4adb28d83c8",
          width: 1792,
          height: 1024,
        },
        id: "680506719",
        url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F680506719%2F1523627996173%2F1%2Foriginal.20240123-060359?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C64%2C1792%2C896&s=efe7aeb1c1110859093e631a64f2529a",
        aspect_ratio: "2",
        edge_color: null,
        edge_color_set: true,
      },
    },
    {
      name: {
        text: "testing api 2",
        html: "testing api 2",
      },
      description: {
        text: "Join us at Testing API 2, where tech enthusiasts gather to explore the latest trends in API testing and share their experiences in a fun-fil",
        html: "Join us at Testing API 2, where tech enthusiasts gather to explore the latest trends in API testing and share their experiences in a fun-fil",
      },
      url: "https://www.eventbrite.com/e/testing-api-2-tickets-808535510477",
      start: {
        timezone: "Australia/Adelaide",
        local: "2024-03-04T10:00:00",
        utc: "2024-03-03T23:30:00Z",
      },
      end: {
        timezone: "Australia/Adelaide",
        local: "2024-03-04T12:00:00",
        utc: "2024-03-04T01:30:00Z",
      },
      organization_id: "1979017765573",
      created: "2024-01-24T01:15:09Z",
      changed: "2024-01-24T01:15:36Z",
      published: "2024-01-24T01:15:36Z",
      capacity: 10,
      capacity_is_custom: true,
      status: "live",
      currency: "AUD",
      listed: true,
      shareable: false,
      invite_only: false,
      online_event: false,
      show_remaining: false,
      tx_time_limit: 1200,
      hide_start_date: false,
      hide_end_date: false,
      locale: "en_AU",
      is_locked: false,
      privacy_setting: "unlocked",
      is_series: false,
      is_series_parent: false,
      inventory_type: "limited",
      is_reserved_seating: false,
      show_pick_a_seat: false,
      show_seatmap_thumbnail: false,
      show_colors_in_seatmap_thumbnail: false,
      source: "auto_create",
      is_free: false,
      version: null,
      summary:
        "Join us at Testing API 2, where tech enthusiasts gather to explore the latest trends in API testing and share their experiences in a fun-fil",
      facebook_event_id: null,
      logo_id: "681319399",
      organizer_id: "77892163963",
      venue_id: "194358669",
      category_id: "102",
      subcategory_id: "2004",
      format_id: "100",
      id: "808535510477",
      resource_uri: "https://www.eventbriteapi.com/v3/events/808535510477/",
      is_externally_ticketed: false,
      logo: {
        crop_mask: {
          top_left: {
            x: 0,
            y: 0,
          },
          width: 940,
          height: 470,
        },
        original: {
          url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F681319399%2F1979017765573%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=592a9c1f3a23620c730944c509a13950",
          width: 940,
          height: 470,
        },
        id: "681319399",
        url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F681319399%2F1979017765573%2F1%2Foriginal.png?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=83ea74d14804920ebb7ebe8eb4ec1a4b",
        aspect_ratio: "2",
        edge_color: "#324655",
        edge_color_set: true,
      },
    },
  ],
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
  const eventdetail = await getEventDetail("1979017765573", apiToken);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://www.eventbriteapi.com/v3/organizations/1979017765573/events/?token=36E55PWIMNCZFEZWHE4I`,
  );
  expect(eventdetail).toBe(mockSuccessResponse); // 期望函数返回正确的组织 ID
});
