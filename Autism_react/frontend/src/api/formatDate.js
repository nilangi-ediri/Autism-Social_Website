function formatDate(dateString) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // 将字符串转换为日期对象
  const date = new Date(dateString);

  // 使用toLocaleString方法格式化日期
  return date
    .toLocaleString("en-US", options)
    .replace(",", "")
    .replace(" ", " · ");
}

// 给定的日期时间字符串
const localTime = "2024-03-03T19:00:00";

export default formatDate;
// 调用函数并输出结果
console.log(formatDate(localTime));
