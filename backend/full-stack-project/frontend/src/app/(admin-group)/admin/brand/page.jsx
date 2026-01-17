
import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge"
import {
  FiEdit,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { getBrands } from "@/api/brand";


export default async function page() {
  const brands = await getBrands();

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Brand Management</h2>
          <p className="text-gray-500 text-sm">
            Manage Category, Name and Actions
          </p>
        </div>

        {/* SINGLE BUTTON */}
        <Link href="/admin/brand/add">
          <button className="flex items-center gap-2 bg-[#ff7b00] text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
            <FiPlus size={18} />
            Add Brand
          </button>
        </Link>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="p-4 text-left rounded-l-xl">image</th>
              <th className="p-4 text-left rounded-l-xl">Name</th>
              <th className="p-4 text-left">Slug</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left rounded-r-xl">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              brands
              &&
              brands.data.map((cat) => (
                <tr
                  key={cat._id}
                  className="border-t hover:bg-orange-50 transition"
                >
                  <td className="p-4 font-medium">
                    <img className="w-20 rounded-md h-10" src={process.env.NEXT_PUBLIC_BRAND_IMAGE_URL + cat.image} alt={cat.name} />
                  </td>
                  <td className="p-4 font-medium">
                    {cat.name}
                  </td>
                  <td className="p-4 text-gray-600">
                    {cat.slug}
                  </td>


                  {/* STATUS */}
                  <td className="p-4 flex gap-2">
                    <StatusBadge id={cat._id} status={cat.status} flag="status" />
                    <StatusBadge id={cat._id} status={cat.is_top} flag="is_top" />
                    <StatusBadge id={cat._id} status={cat.is_best} flag="is_best" />
                    <StatusBadge id={cat._id} status={cat.is_home} flag="is_home" />
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/category/edit/${cat._id}`}>
                        <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                          <FiEdit />
                        </button>
                      </Link>

                      <DeleteBtn url={`category/delete/${cat._id}`} />
                    </div>
                  </td>
                </tr>
              ))

            }
          </tbody>
        </table>
      </div>
    </div >
  );
}

