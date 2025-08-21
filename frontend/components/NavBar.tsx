


// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-[#BBDCE5] text-gray-800 px-6 py-4 flex justify-between items-center shadow-md">
//       <h1 className="text-xl bg-[#154D71] font-bold">Keep Notes</h1>
//       <div className="space-x-4">
//         <Link href="/notes" className="text-xl bg-[#154D71] font-bold hover:underline">Notes</Link>
//         <Link href="/notes/add" className="text-xl bg-[#154D71] font-bold hover:underline">Add Note</Link>
//         <Link href="/profile" className="text-xl bg-[#154D71] font-bold hover:underline">Profile</Link>
//         <Link href="/login" className="text-xl bg-[#154D71] font-bold hover:underline">Logout</Link>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#BBDCE5] px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-[#154D71]">Keep Notes</h1>
      <div className="space-x-6">
        <Link href="/about" className="hover:underline text-[#154D71] font-bold">About</Link>
        <Link href="/notes/add" className="hover:underline text-[#154D71] font-bold">Notes</Link>
        <Link href="/profile" className="hover:underline text-[#154D71] font-bold">Account</Link>
        <Link href="/login" className="hover:underline text-[#154D71] font-bold">Logout</Link>
      </div>
    </nav>
  );
}
