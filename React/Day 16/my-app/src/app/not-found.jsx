import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">

            <h1 className="text-6xl font-bold text-green-600 animate-pulse">
                404
            </h1>

            <p className="mt-2 text-gray-600">
                Page not found
            </p>

            <Link
                href="/"
                className="mt-5 text-green-600 underline hover:text-green-700"
            >
                Go back home
            </Link>

        </div>
    );
}
