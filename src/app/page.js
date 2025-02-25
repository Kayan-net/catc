// src/app/page.js
import AuthStatus from "@/components/AuthStatus";

export default async function Home() {
  return (
    <div>
      <h1>Welcome to CATC Travel Agency</h1>
      <AuthStatus />
    </div>
  );
}