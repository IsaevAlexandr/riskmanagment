export function setData<T>(key: string, data: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (_e) {}
}
export function getData<T>(key: string, defaultValue: T): T {
  try {
    const data = window.localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  } catch (_e) {}

  return defaultValue;
}
