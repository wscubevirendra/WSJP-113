"use client";
import Link from "next/link";

import {
  FiEdit,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

const users = [
  {
    id: 1,
    name: "Robert Fox",
    email: "robert@mail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "John Wick",
    email: "john@mail.com",
    role: "Editor",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sarah Smith",
    email: "sarah@mail.com",
    role: "User",
    status: "Blocked",
  },
];

export default function page() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-gray-500 text-sm">
            Manage users, roles and status
          </p>
        </div>

        {/* SINGLE BUTTON */}
        <Link href="/admin/category/add">
          <button className="flex items-center gap-2 bg-[#ff7b00] text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
            <FiPlus size={18} />
            Add User
          </button>
        </Link>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="p-4 text-left rounded-l-xl">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left rounded-r-xl">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-orange-50 transition"
              >
                <td className="p-4 font-medium">
                  {user.name}
                </td>
                <td className="p-4 text-gray-600">
                  {user.email}
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <StatusBadge status={user.status} />
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                      <FiEdit />
                    </button>
                    <button className="p-2 rounded-lg bg-red-100 text-red-500 hover:bg-red-200">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* STATUS BADGE */
function StatusBadge({ status }) {
  const base =
    "px-3 py-1 rounded-full text-sm font-medium";

  if (status === "Active") {
    return (
      <span className={`${base} bg-green-100 text-green-600`}>
        Active
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className={`${base} bg-yellow-100 text-yellow-600`}>
        Pending
      </span>
    );
  }

  return (
    <span className={`${base} bg-red-100 text-red-600`}>
      Blocked
    </span>
  );
}
