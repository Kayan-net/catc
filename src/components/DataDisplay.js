// // src/components/DataDisplay.js (Client Component - WITH 'use client')
// 'use client';

// import { SessionProvider } from 'next-auth/react';

// export default function DataDisplay({ data }) {
//   const { data: session } = SessionProvider();

//   return (
//     <div>
//       <SessionProvider>
//         {session && data.filter(item => item.userId === session.user.id).map(item => (
//         <div key={item.id}>{item.name}</div>
//         ))}
//       </SessionProvider>
//     </div>
//   );
// }