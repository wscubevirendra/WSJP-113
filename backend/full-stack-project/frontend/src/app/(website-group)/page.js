import ProductCard from "@/components/website/ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2499,
    image: "https://images.unsplash.com/photo-1518444028785-8f5c4b4b4f38",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 3999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    title: "Sneakers",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "Backpack",
    price: 1999,
    image: "https://images.unsplash.com/photo-1585386959984-a415522c15c3",
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
