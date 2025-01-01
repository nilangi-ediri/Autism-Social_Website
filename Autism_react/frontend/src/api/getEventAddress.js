async function getEventAddress(venue_id, apiToken) {
  try {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/venues/${venue_id}/?token=${apiToken}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// module.exports = getEventAddress;
export default getEventAddress;
// 调用函数并传递你的 API 令牌
getEventAddress("36E55PWIMNCZFEZWHE4I");
