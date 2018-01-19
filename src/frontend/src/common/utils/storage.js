export const storage = {};

storage.write = (key, val) => {
  val = JSON.stringify(val);
  window.sessionStorage.setItem(key, val);
}

storage.read = (key) => {
  let val = window.sessionStorage.getItem(key);
  return JSON.parse(val);
}
