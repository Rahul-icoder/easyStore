const setToLocalStorage = (key, value) => {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key) => {
  let value = localStorage.getItem(key);
  if (typeof value === "object") {
    let value = localStorage.getItem(key);
    return JSON.parse(value);
  }
  return value;
};

const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

module.exports = {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
};
