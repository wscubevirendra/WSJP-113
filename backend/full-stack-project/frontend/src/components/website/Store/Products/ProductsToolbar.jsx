'use client'

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ProductsToolbar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [limit, setLimit] = useState("0");
    const [sort, setSort] = useState("");

    /* 🔁 Sync URL → State */
    useEffect(() => {
        setLimit(searchParams.get("limit") || "0");
        setSort(searchParams.get("sort") || "");
    }, [searchParams]);

    /* 🔢 Limit Handler */
    function limitFilterHandler(value) {
        const query = new URLSearchParams(searchParams.toString());
        query.set("limit", value);
        router.push(`?${query.toString()}`);
    }

    /* 🔃 Sort Handler */
    function sortHandler(value) {
        const query = new URLSearchParams(searchParams.toString());

        if (value) query.set("sort", value);
        else query.delete("sort");

        router.push(`?${query.toString()}`);
    }

    return (
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <p>1–40 of 120 results</p>

            <div className="flex gap-4">
                {/* LIMIT */}
                <select
                    value={limit}
                    onChange={(e) => limitFilterHandler(e.target.value)}
                    className="border rounded px-2 py-1"
                >
                    <option value="0">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>

                {/* SORT */}
                <select
                    value={sort}
                    onChange={(e) => sortHandler(e.target.value)}
                    className="border rounded px-2 py-1"
                >
                    <option value="">Latest</option>
                    <option value="price_asc">Price Low → High</option>
                    <option value="price_desc">Price High → Low</option>
                </select>
            </div>
        </div>
    );
};

export default ProductsToolbar;
