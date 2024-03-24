export function getCookie(key) {
  let cookies = document.cookie;
  let arrCookies = cookies.split("; ");
  let findedItem = arrCookies.find(function (value) {
    if (value.split("=")[0] == key) {
      return value;
    }
  });
  if (findedItem) {
    return findedItem.split("=")[1];
  } else {
    return undefined;
  }
}
