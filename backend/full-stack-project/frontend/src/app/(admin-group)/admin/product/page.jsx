import Link from "next/link";
import { getProducts } from "@/api/product";
import StatusBadge from "@/components/admin/StatusBadge";
import DeleteBtn from "@/components/admin/DeleteBtn";
import ViewButton from "@/components/admin/ViewButton";

import { FiEdit, FiPlus } from "react-icons/fi";
import { FaImages } from "react-icons/fa";

export default async function Page() {
  const productJSON = await getProducts();

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Product Management</h2>
          <p className="text-gray-500 text-sm">
            Manage products, pricing and status
          </p>
        </div>

        <Link href="/admin/product/add">
          <button className="flex items-center gap-2 bg-[#ff7b00] text-white px-5 py-2 rounded-xl hover:opacity-90">
            <FiPlus size={18} />
            Add Product
          </button>
        </Link>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Prices</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {productJSON?.product?.map((product) => (
              <tr
                key={product._id}
                className="border-t hover:bg-orange-50 transition"
              >
                {/* IMAGE */}
                <td className="p-4">
                  <img
                    src={`${productJSON.imageBaseUrl}main/${product.thumbnail}`}
                    alt={product.name}
                    className="w-20 h-12 object-fit rounded-md"
                  />
                </td>

                {/* NAME */}
                <td className="p-4 font-medium">{product.name}</td>

                {/* PRICE */}
                <td className="p-4 text-gray-600">
                  <div className="flex flex-col gap-1">

                    <span className="font-semibold text-black">
                      Final: ₹{product.final_price}
                    </span>
                  </div>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge
                      url={`product/status/${product._id}`}
                      status={product.status}
                      flag="status"
                    />

                    <StatusBadge
                      url={`product/status/${product._id}`}
                      status={product.is_hot}
                      flag="is_hot"
                    />
                    <StatusBadge
                      url={`product/status/${product._id}`}
                      status={product.is_home}
                      flag="is_home"
                    />
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <Link href={`/admin/product/edit/${product._id}`}>
                      <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                        <FiEdit />
                      </button>
                    </Link>

                    <DeleteBtn url={`product/delete/${product._id}`} />

                    <ViewButton
                      imageBaseUrl={productJSON.imageBaseUrl}
                      product={product}
                    />

                    <Link
                      href={`/admin/product/add-multiple-images/${product._id}`}
                    >
                      <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                        <FaImages />
                      </button>
                    </Link>
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
