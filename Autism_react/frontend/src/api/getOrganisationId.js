async function getOrganisationId(apiToken) {
  try {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/users/me/organizations/?token=${apiToken}`,
    );
    const data = await response.json();
    if (data && data.organizations && data.organizations.length > 0) {
      // console.log('Organization data:', data);
      const organisationId = data.organizations[0].id;
      // console.log(organisationId);
      return organisationId; // Return the ID
    }
    return null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// module.exports = getOrganisationId;
export default getOrganisationId;
// 调用函数并传递你的 API 令牌
getOrganisationId("36E55PWIMNCZFEZWHE4I");
