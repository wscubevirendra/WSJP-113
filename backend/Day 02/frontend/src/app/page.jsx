import { getStudents } from '@/api-call/studentAPI'
import React from 'react'
import Link from 'next/link';
import StatusBtn from '@/components/StatusBtn';
import { ToastContainer } from 'react-toastify';

export default async function page() {
  const studentJSON = await getStudents();
  const students = studentJSON.students;



  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer />
      <Link href="/add">
        <button className='bg-amber-500 px-10 py-2 border rounded-2xl m-2 font-bold text-white'>Add Student +</button>
      </Link>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-gray-700 font-medium uppercase">Name</th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium uppercase">Email</th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium uppercase">Age</th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium uppercase">Course Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {
            students.map((data) => {
              return (

                <tr key={data._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{data.name}</td>
                  <td className="py-3 px-6">{data.email}</td>
                  <td className="py-3 px-6">{data.age}</td>
                  <StatusBtn id={data._id} status={data.status} />
                </tr>
              )
            })
          }


        </tbody>
      </table>
    </div>

  )
}
