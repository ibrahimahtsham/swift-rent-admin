export function getCookie(cookieName) {
  return document.cookie
    .replace(`/(?:(?:^|.*;\s*)${cookieName}\s*\=\s*([^;]*).*$)|^.*$/`, "$1")
    .split("=")[1];
}

export function clearCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  });
}
