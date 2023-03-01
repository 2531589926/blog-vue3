export const utils = {
  //时间戳转日期
  millisecondsFormat(milliseconds: number): string {
    let date; // 参数需要毫秒数，所以这里将秒数乘于 1000
    if (milliseconds === undefined || milliseconds === null) {
      date = new Date();
    } else {
      date = new Date(milliseconds);
    }

    let Y = date.getFullYear() + "-";
    let M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    let h =
      (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    let m =
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
      ":";
    let s =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  },
  //判断字符串是否为链接
  checkUrl(url: string): boolean {
    const re =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return re.test(url);
  },
  //验证颜色是否合法
  checkIsColor(bgVal: string): boolean {
    let type = "";
    if (/^rgb\(/.test(bgVal)) {
      //如果是rgb开头，200-249，250-255，0-199
      type =
        "^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$";
    } else if (/^rgba\(/.test(bgVal)) {
      //如果是rgba开头，判断0-255:200-249，250-255，0-199 判断0-1：0 1 1.0 0.0-0.9
      type =
        "^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$";
    } else if (/^#/.test(bgVal)) {
      //六位或者三位
      type = "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$";
    } else if (/^hsl\(/.test(bgVal)) {
      //判断0-360 判断0-100%(0可以没有百分号)
      type =
        "^[hH][Ss][Ll][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[)]$";
    } else if (/^hsla\(/.test(bgVal)) {
      type =
        "^[hH][Ss][Ll][Aa][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[)]$";
    }
    let re = new RegExp(type);

    return bgVal.match(re) == null;
  },
};
