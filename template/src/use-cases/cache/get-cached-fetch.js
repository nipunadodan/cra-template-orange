//import { amsServer } from '../http-methods';
//import { cacheVersionMap, CACHE_NAME } from './constants';

export const CACHE_NAME = 'orange';
export const cacheVersionMap = new Map();

export const getCachedFetch = async (url, cacheMapKey) => {
    const cache = await caches.open(CACHE_NAME);

    // If cache has data return from cache
    const cacheData = await cache.match(url);

    if (cacheData) {
        return cacheData.json();
    }

    // GET data from backend and save in cache
    const headers = cacheVersionMap.get(cacheMapKey) ? { headers: { ETag: cacheVersionMap.get(cacheMapKey) } } : {}; // Use if needed to send cache data through header

    const api_base = process.env.REACT_APP_API_BASE;
    let obj; let code;

    const data = await fetch(api_base+url);

    code = data.status;
    obj = await data.json();

    if (code === 200) {
        await cache.put(url, new Response(JSON.stringify(obj)));

        // update the cache map
        cacheVersionMap.set(cacheMapKey, data.headers['etag']); // TODO: replace this with a valid data
    }

    return obj;
};
