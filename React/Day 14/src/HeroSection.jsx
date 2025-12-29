import React from "react";

export default function HeroSection({
    title = "WsCube Tech",
    subtitle = "Learn Web Development with Industry Experts",
    myclass = "",
    children,
}) {
    return (
        <section
            className={`w-full my-4 rounded-2xl bg-gradient-to-r from-red-400  px-6 py-10 text-white ${myclass}`}
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <h2 className="text-3xl font-bold md:text-4xl">
                    {title}
                </h2>

                {/* Sub Heading */}
                <p className="mt-2 max-w-xl text-sm opacity-90 md:text-base">
                    {subtitle}
                </p>

                {/* Extra Content */}
                {children && (
                    <div className="mt-6">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}
