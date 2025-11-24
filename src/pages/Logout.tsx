import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // your firebase config

// Inside your component
const handleLogout = async () => {
  try {
    await signOut(auth);
    // Redirect to login page
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
