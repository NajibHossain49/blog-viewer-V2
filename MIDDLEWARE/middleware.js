// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     return NextResponse.next();
//   },
//   {
//     // Add the routes to protect
//     callbacks: {
//       authorized: ({ req }) => {
//         return true;
//       },
//     },
//   }
// );


// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     return NextResponse.next();
//   },
//   {
//     // Add the routes to protect
//     publicRoutes: ["/", "/api/auth/login", "/api/auth/logout"], // Public routes
//     callbacks: {
//       authorized: ({ req }) => {
//         const token = req.cookies.get("kinde_token"); // Or use your auth token
//         return !!token; // Allow only if the token exists
//       },
//     },
//   }
// );
