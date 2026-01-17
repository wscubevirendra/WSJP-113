"use client";
import { cloneElement, useEffect, useRef, useState } from "react";
import { FiTag, FiLink, FiImage } from "react-icons/fi";
import { slugCreate, notify, axiosAPIinstance } from "@/utils/helper";
import { getCategories } from "@/api/category";
import { getBrands } from "@/api/brand";
import { getColors } from "@/api/color";
import Select from 'react-select'
import { Editor } from 'primereact/editor';


export default function AddCategoryPage() {
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState([]);
    const [selColor_ids, setselColorIds] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const nameRef = useRef();
    const slugRef = useRef();
    const op = useRef();
    const dp = useRef();
    const fp = useRef();

    async function fetchData() {
        const category = await getCategories();
        const brand = await getBrands();
        const color = await getColors();
        setCategories(category.data);
        setBrands(brand.data);
        setColors(color.data);
    }

    useEffect(
        () => {
            fetchData();
        },
        []
    )

    function generateSlug() {
        const slug = slugCreate(nameRef.current.value);
        slugRef.current.value = slug
    }
    function calculateDiscountPer() {
        const originalPrice = Number(op.current.value);
        const finalPrice = Number(fp.current.value);

        if (originalPrice <= 0 || finalPrice < 0) {
            console.log("Invalid price");
            return;
        }

        const discount = ((originalPrice - finalPrice) / originalPrice) * 100;
        dp.current.value = Number(discount.toFixed(2))

    }


    function colorIdSet(data) {
        const colorIds = data.map(o => o.value)
        setselColorIds(colorIds);

    }






    function submitHandler(e) {
        e.preventDefault();
        const payload = new FormData();
        payload.append("name", nameRef.current.value);
        payload.append("slug", slugRef.current.value);
        payload.append("description", description);
        payload.append("original_price", op.current.value);
        payload.append("discount_percentage", dp.current.value);
        payload.append("final_price", fp.current.value);
        payload.append("category_id", e.target.categoryId.value);
        payload.append("color_ids", JSON.stringify(selColor_ids));
        payload.append("brand_id", e.target.brandId.value);
        payload.append("thumbnail", e.target.image.files[0]);
        axiosAPIinstance.post("product/create", payload).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                // nameRef.current.value = "";
                // slugRef.current.value = "";
            }
        }).catch((error) => {
            console.log(error)
            notify(error?.response?.data?.message, false)
        })

    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-10">

            {/* HEADER */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Add Category</h1>
            </div>
            <form onSubmit={submitHandler} className="space-y-6">
                <div className="grid gap-4 grid-cols-2">
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Category Name
                        </label>
                        <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                            <FiTag className="text-gray-400" />
                            <input
                                onChange={generateSlug}
                                ref={nameRef}
                                type="text"
                                placeholder="Enter category name"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Slug
                        </label>
                        <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                            <FiLink className="text-gray-400" />
                            <input
                                ref={slugRef}
                                readOnly
                                type="text"
                                placeholder="enter-category-slug"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Original Price
                            </label>
                            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                                <FiTag className="text-gray-400" />
                                <input
                                    onChange={calculateDiscountPer}
                                    ref={op}
                                    type="text"
                                    placeholder="Enter OP name"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Discount %
                            </label>
                            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                                <FiTag className="text-gray-400" />
                                <input
                                    readOnly
                                    ref={dp}
                                    type="text"
                                    placeholder="Enter Discount %"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Final Price
                            </label>
                            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                                <FiTag className="text-gray-400" />
                                <input
                                    onChange={calculateDiscountPer}
                                    ref={fp}
                                    type="text"
                                    placeholder="Enter Final Price"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label className="text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                            <FiTag className="text-gray-400" />
                            {/* <textarea
                                onChange={generateSlug}
                                name="description"
                                type="text"
                                placeholder="Enter category name"
                               
                            /> */}
                            <Editor className="w-full outline-none" onTextChange={(e) => setDescription(e.htmlValue)} style={{ height: '320px' }} />
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Category
                            </label>
                            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                                <FiTag className="text-gray-400" />
                                <Select name="categoryId" className="w-full outline-none" id="" options={
                                    categories.map((cat) => {
                                        return (
                                            { value: cat._id, label: cat.name }
                                        )
                                    })
                                } />


                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Brand
                            </label>
                            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                                <FiTag className="text-gray-400" />
                                <Select name="brandId" className="w-full outline-none" id="" options={
                                    brands.map((br) => {
                                        return (
                                            { value: br._id, label: br.name }
                                        )
                                    })
                                } />


                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Color
                            </label>
                            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                                <FiTag className="text-gray-400" />
                                <Select isMulti closeMenuOnSelect={false} onChange={colorIdSet} className="w-full outline-none" name="" id="" options={
                                    colors.map((col) => {
                                        return (
                                            { value: col._id, label: col.name }
                                        )
                                    })
                                } />


                            </div>
                        </div>

                    </div>

                </div>



                <div>
                    <label className="text-sm font-medium text-gray-600">
                        thumbnail
                    </label>
                    <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3">
                        <FiImage className="text-gray-400" />
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
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
                        type="button"
                        className="px-6 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button

                        type="submit"
                        className="px-6 py-2 rounded-xl bg-[#ff7b00] text-white hover:opacity-90"
                    >
                        Save Category
                    </button>
                </div>
            </form>
        </div>
    );
}
