"use client";
import { slugCreate, notify, axiosAPIinstance } from "@/utils/helper";
import { useRouter } from "next/navigation";


export default function MultipleImageAdd({ productData }) {
    const router = useRouter()
    function submitHandler(e) {
        e.preventDefault();
        const payload = new FormData();
        for (let img of e.target.image.files) {
            payload.append("images", img)
        }
        axiosAPIinstance.post(`product/otherImageAdd/${productData?.product?._id}`, payload).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                e.reset();
                router.push("/admin/product")

            };
        }).catch((error) => {
            notify(error?.response?.data?.message, false)
        })

    }

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">


            {/* HEADER */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Add Images</h1>

            </div>
            <div className="flex overflow-x-scroll gap-10">
                {
                    productData?.product?.other_images.map((item, index) => {
                        return <img key={index} className="w-20 h-20" src={productData.imageBaseUrl + "other/" + item} />
                    })
                }
                <img src="" alt="" />
            </div>

            {/* FORM */}
            <form onSubmit={submitHandler} className="space-y-6">

                <div>
                    <label className="text-sm font-medium text-gray-600">
                        Image
                    </label>
                    <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3">

                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            multiple
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-orange-50 file:text-[#ff7b00]
                            hover:file:bg-orange-100"
                        />
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center justify-end gap-4 pt-6">


                    <button

                        type="submit"
                        className="px-6 py-2 rounded-xl bg-[#ff7b00] text-white hover:opacity-90"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
