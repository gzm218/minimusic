//改变评论数量、播放数量
export default function changeValue(num) {
  let res = 0;
  if (num >= 10000000) {
    res = num / 10000000;
    res = parseInt(res) + ' ' + '亿';
  } else if (num >= 10000) {
    res = num / 10000;
    res = parseInt(res) + ' ' + '万';
  } else {
    res = num;
  }
  return res;
}
