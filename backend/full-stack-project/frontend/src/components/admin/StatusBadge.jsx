'use client'

import { axiosAPIinstance, notify } from "@/utils/helper";
import { useRouter } from "next/navigation";

function StatusBadge({ status, flag, url }) {
    const router = useRouter();
    let display = ""
    if (flag == "status") {
        display = status ? "Active" : "Inactive"
    }

    if (flag == "is_top") {
        display = status ? "Top" : "Not top"
    }

    if (flag == "is_best") {
        display = status ? "Best" : "Not Best"
    }

    if (flag == "is_home") {
        display = status ? "Home" : "Not Home"
    }

    if (flag == "is_best_seller") {
        display = status ? "is_best_seller" : "Not is_best_seller"
    }

    if (flag == "is_featured") {
        display = status ? "is_featured" : "Not is_featured"
    }

    if (flag == "is_hot") {
        display = status ? "is_hot" : "Not is_hot"
    }


    const base = "px-3 py-1 rounded-full cursor-pointer text-sm font-medium";

    function statusHandler(field) {
        axiosAPIinstance.patch(url, { field }).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                router.refresh();
            }
        }).catch((error) => {
            notify(error?.response?.data?.message, false)
        })
    }



    return (
        <span onClick={() => statusHandler(flag)} className={`${base} ${status ? "bg-green-100 text-green-600" : " bg-yellow-100 text-yellow-600"}`}>
            {display}
        </span>
    );
}



export default StatusBadge