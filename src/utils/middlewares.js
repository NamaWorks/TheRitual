// const isCached = async (req, res, next, cache) => {
//   try {
//     console.log(cache)
//     next()
//   } catch (err) {
//     console.log(err)
//   }
// };

// const isCached = (cache) => {
//   return async (req, res, next) => {
//     try {
//       if(cache==='fail'){
//         req.cacheValue = {test:'this is a cached. value'};
//       }; 
//     } catch (err) {
//       console.log(err);
//       req.cacheValue = {test:'this is NOT a cached value'};
//     }
//     next();
//   }
// };

// module.exports = { isCached };