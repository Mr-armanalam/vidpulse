export const setCustomParam = (key: string, value: string) => {
  // 1. Get the current URL and its search parameters
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  params.set(key, value);

  // 3. Construct the new URL string
  const newUrl = `${url.pathname}?${params.toString()}`;

  // 4. Update the browser URL without a full page reload
  window.history.pushState({ path: newUrl }, "", newUrl);
};
