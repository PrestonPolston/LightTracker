const showDataStorage = {
  saveToSessionStorage: (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  retrieveFromSessionStorage: (key) => {
    const data = sessionStorage.getItem(key);
    try {
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error("Error parsing session storage data:", error);
      return {};
    }
  },
  clearSessionStorage: (key) => {
    sessionStorage.removeItem(key);
  },
};

export default showDataStorage;
