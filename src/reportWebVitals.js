const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// const reportWebVitals = (onPerfEntry) => {
//   if (onPerfEntry && typeof onPerfEntry === 'function') {
//     getCLS(onPerfEntry);
//     getFID(onPerfEntry);
//     getFCP(onPerfEntry);
//     getLCP(onPerfEntry);
//     getTTFB(onPerfEntry);
//   }
// };

// export default reportWebVitals;