// src/app/login/page.js
import LoginForm from "@/components/LoginForm";
import Slideshow from "@/components/Slideshow";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-md rounded">
        <div className="w-1/2">
          <LoginForm />
        </div>
        <div className="w-1/2">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}