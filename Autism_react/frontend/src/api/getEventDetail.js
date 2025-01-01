async function getEventDetail(organisationId, apiToken) {
  try {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/organizations/${organisationId}/events/?token=${apiToken}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// module.exports = getEventDetail;
export default getEventDetail;
// 调用函数并传递你的 API 令牌
getEventDetail("36E55PWIMNCZFEZWHE4I");
