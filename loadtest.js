// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: '30s', target: 100 },   // ramp-up to 100 VUs
//     { duration: '1m', target: 200 },    // stay at 200 VUs
//     { duration: '30s', target: 500 },   // ramp-up to 500 VUs (stress)
//     { duration: '30s', target: 1000 },  // ramp-up to 1000 VUs (try to break)
//     { duration: '1m', target: 0 },      // ramp-down
//   ],
//   thresholds: {
//     http_req_failed: ['rate<0.05'],      // <5% errors
//     http_req_duration: ['p(95)<1000'],   // 95% requests <1s
//   },
// };

// export default function () {
//   const res = http.get('https://ddrobocon.iitd.ac.in/');
//   sleep(1); // simulate user think time
// }
