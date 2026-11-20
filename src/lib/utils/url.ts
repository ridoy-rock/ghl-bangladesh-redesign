// Sub-folder the site is served from ("" at the domain root)
const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

// true for links that leave the site (https://…, //…, mailto:, tel:)
export const isExternal = (url: string) =>
  /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(url) || /^(?:mailto|tel):/i.test(url);

// Prefix an internal path ("/images/logo.svg", "/#events") with the sub-folder.
// External links and same-page anchors ("#events") are returned untouched.
export const withBase = (url: string) => {
  if (!url || isExternal(url) || url.startsWith("#")) return url;
  return `${base}/${url.replace(/^\/+/, "")}`;
};

// Path of the current page without the sub-folder: always starts with "/"
export const pagePath = (pathname: string) => {
  const path = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname;
  return path.startsWith("/") ? path : `/${path}`;
};
