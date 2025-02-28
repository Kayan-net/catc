// src/app/register/page.js
import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <RegistrationForm />
      </div>
    </div>
  );
}