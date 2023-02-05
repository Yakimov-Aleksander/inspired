import { router } from './router';

export const getUrl = (params) => {
  const currentLocation = router.getCurrentLocation();

  let url = currentLocation.url;

  const searchParams = new URLSearchParams(currentLocation.queryString);

  for (const keys in params) {
    searchParams.set(keys, params[keys]);
  }

  url += `?${searchParams.toString()}`;

  return url;
};
