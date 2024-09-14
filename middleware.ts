import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  // Only protect routes that are NOT `/dashboard` and still need authentication
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

// Define which routes are protected ( i excluded `/dashboard` or any of its sub-routes)
const isProtectedRoute = createRouteMatcher([
  // I Added routes that need protection here, excluding /dashboard
  '/((?!dashboard).*)', // Protect everything except /dashboard
]);
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};