export const activeRoute = routeName => {
  return window.location.href.indexOf(routeName) > -1;
};
