"use client";

export default function ProfilePage() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Email:</strong> user@example.com</p>
      <p><strong>Member since:</strong> Jan 2025</p>
      <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}
