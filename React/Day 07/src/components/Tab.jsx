import { useState } from "react";


export default function Tab() {
    const [tabContent, setTabContent] = useState("Profile");
    return (
        <div className="container my-5">
            <div className="row">


                <div className="col-3 border-end">
                    <div className="d-flex flex-column gap-3">

                        <button onClick={()=>setTabContent("Profile")} className={`btn btn-outline-primary w-100 ${tabContent === "Profile" ? "bg-primary text-white" : ""}`}>
                            Profile
                        </button>

                        <button onClick={()=>setTabContent("Orders")} className={`btn btn-outline-primary w-100 ${tabContent === "Orders" ? "bg-primary text-white" : ""}`}>
                            Orders
                        </button>

                        <button onClick={()=>setTabContent("Password")} className={`btn btn-outline-primary w-100 ${tabContent === "Password" ? "bg-primary text-white" : ""}`}>
                            Password
                        </button>

                        <button onClick={()=>setTabContent("My address")} className={`btn btn-outline-primary w-100 ${tabContent === "My address" ? "bg-primary text-white" : ""}`}>
                            My address
                        </button>

                    </div>
                </div>
                <div className="col-9">
                    {
                        tabContent === "Profile" &&
                        <div className="p-4 border rounded">

                            <h3>Tab Content Profile</h3>
                            <p className="text-muted">
                                The content for the selected tab will appear here.
                            </p>

                            {/* Fake Content Boxes */}
                            <div className="mt-4">
                                <div className="mb-3 p-3 bg-light border rounded">
                                    This is sample content block.
                                </div>

                                <div className="mb-3 p-3 bg-light border rounded">
                                    Add your content here...
                                </div>
                            </div>

                        </div>
                    }

                    {
                        tabContent === "Orders" &&
                        <div className="p-4 border rounded">

                            <h3>Tab Content Orders</h3>

                            {/* Fake Content Boxes */}
                            <div className="mt-4">
                                <div className="mb-3 p-3 bg-light border rounded">
                                    This is sample content block.
                                </div>

                                <div className="mb-3 p-3 bg-light border rounded">
                                    Add your content here...
                                </div>
                            </div>

                        </div>
                    }


                    {
                        tabContent === "Password" &&
                        <div className="p-4 border rounded">

                            <h3>Tab Content Password</h3>

                            {/* Fake Content Boxes */}
                            <div className="mt-4">
                                <div className="mb-3 p-3 bg-light border rounded">
                                    This is sample content block.
                                </div>

                                <div className="mb-3 p-3 bg-light border rounded">
                                    Add your content here...
                                </div>
                            </div>

                        </div>
                    }


                    {
                        tabContent === "My address" &&
                        <div className="p-4 border rounded">

                            <h3>Tab Content My address</h3>

                            {/* Fake Content Boxes */}
                            <div className="mt-4">
                                <div className="mb-3 p-3 bg-light border rounded">
                                    This is sample content block.
                                </div>

                                <div className="mb-3 p-3 bg-light border rounded">
                                    Add your content here...
                                </div>
                            </div>

                        </div>
                    }




                </div>

            </div>
        </div>
    );
}


 function button() {
  return (
    <div>Tab</div>
  )
}



