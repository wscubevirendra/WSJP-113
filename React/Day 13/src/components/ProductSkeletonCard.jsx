export default function ProductSkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="h-56 w-full rounded-t-2xl bg-gray-200"></div>

      {/* Content */}
      <div className="p-4">
        {/* Title Skeleton */}
        <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">
          <div className="h-5 w-16 rounded bg-gray-200"></div>

          <div className="h-9 w-28 rounded-xl bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
