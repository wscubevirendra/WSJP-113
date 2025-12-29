export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-gray-600">
        Loading...
      </p>

    </div>
  );
}
