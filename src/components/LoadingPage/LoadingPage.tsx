"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { getUserSession } from "@/services/authServices";

const LoadingPage = () => {
  const { isLogged, handleGoogleLogin } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        const userData = await getUserSession();

        if (!userData) {
          console.log("No active session found");
          router.push("/login");
          return;
        }

        console.log("Session verified successfully");
        handleGoogleLogin(userData);
        router.push("/profile");
      } catch (error) {
        console.error("Error verifying session:", error);
        router.push("/login");
      }
    };

    if (!isLogged()) {
      verifySession();
    } else {
      router.push("/profile");
    }
  }, [isLogged, handleGoogleLogin, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default LoadingPage;
