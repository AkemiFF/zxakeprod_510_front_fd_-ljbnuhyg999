

const nextConfig = {

};

export default nextConfig;


// export default {
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             {
//               key: 'Access-Control-Allow-Credentials',
//               value: 'true',
//             },
//             {
//               key: 'Access-Control-Allow-Origin',
//               value: 'http://localhost:8000', // or your domain
//             },
//             {
//               key: 'Access-Control-Allow-Methods',
//               value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
//             },
//             {
//               key: 'Access-Control-Allow-Headers',
//               value: 'X-CSRFToken, X-Requested-With, Content-Type, Accept',
//             },
//           ],
//         },
//       ];
//     },
//   };