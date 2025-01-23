import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // Log the user session state
    console.log("User session data:", user);

    // If user is not authenticated, redirect to login
    if (!user) {
      console.log("User not authenticated. Redirecting to login...");
      console.log("Redirect triggered from URL:", new URL(window.location.href).pathname);
      redirect("/api/auth/login");
    }

    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Profile!</h1>
        {/* <p className="text-gray-600">Hello, {user.given_name || "User"}!</p>
        <div className="mt-4">
          <p>Email: {user.email}</p>
        </div> */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching user session:", error);

    // Handle unexpected errors and show a fallback message
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">An error occurred</h1>
        <p className="text-gray-600">
          We couldn't load your profile. Please try again later.
        </p>
      </div>
    );
  }
}
