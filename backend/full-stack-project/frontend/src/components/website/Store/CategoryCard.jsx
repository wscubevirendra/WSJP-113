const CategoryCard = ({ name, path ,count}) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer">
            {/* Image */}
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <img
                    src={path}
                    alt={name}
                    className="h-10 object-contain"
                />
            </div>

            {/* Text */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900">
                    {name}
                </h4>
                <p className="text-xs text-gray-500">
                    {count} Items
                </p>
            </div>
        </div>
    );
};

export default CategoryCard;
