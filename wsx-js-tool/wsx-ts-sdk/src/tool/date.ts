function getToday(withTime :boolean = false) :Date {
  const today = new Date();
  if (!withTime) {
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
  }
  today.setMilliseconds(0);
  return today;
}

function getDaysAgo(day: number, withTime :boolean = false) :Date {
  const daysAgo = new Date();
  daysAgo.setDate(daysAgo.getDate() - day + 1);
  if (!withTime) {
    daysAgo.setHours(0);
    daysAgo.setMinutes(0);
    daysAgo.setSeconds(0);
  }
  daysAgo.setMilliseconds(0);
  return daysAgo;
}

// 把Date类型，或时间戳 转换成2020-11-24 的字符串
function getFormatDate(date :Date) :string {
  const newDate = new Date(date);
  const Y = `${newDate.getFullYear()}-`;
  const M = `${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-`;
  const D = `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()} `;
  return `${Y}${M}${D}`;
}

function toHHmmss(date :number) :string{
  let time;
  const hours = date % (1000 * 60 * 60 * 24) / (1000 * 60 * 60);
  const minutes = date % (1000 * 60 * 60) / (1000 * 60);
  const seconds = date % (1000 * 60) / 1000;
  time = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
  return time;
}


export {
  getToday,
  getDaysAgo,
  getFormatDate,
  toHHmmss,
};
