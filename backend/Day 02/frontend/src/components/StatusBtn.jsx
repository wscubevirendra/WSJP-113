'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';


export default function StatusBtn({ id, status }) {
    const router = useRouter()
    const notify = (msg, flag) => toast(msg, { type: flag ? "sucess" : "error" });
    function statusHandler() {
        axios.patch(`http://localhost:5000/student/update/${id}`).then(
            (response) => {
                if (response.data.flag == 1) {
                    notify(response.data.message, response.data.flag);
                    router.refresh()
                } else {
                    notify(response.data.message, response.data.flag)
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }

    return (
        <td className="py-3 px-6">
            <span onClick={statusHandler} className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-semibold">
                {status ? "Active" : "Inactive"}
            </span>
        </td>
    )
}
