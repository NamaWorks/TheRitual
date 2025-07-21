const cache = new Map();

const getFromCache = (key) => {
  const cached = cache.get(key);
  if(cached && Date.now() - cached.timestamp < cached.ttl){
    return cached.data;
  }
  return null
};

const setCache = (key, data, ttl = 60000) => {
  cache.set(key, { data, timestamp: Date.now(), ttl })
};

module.exports = { getFromCache, setCache }