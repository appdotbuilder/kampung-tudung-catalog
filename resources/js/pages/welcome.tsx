import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    category: {
        id: number;
        name: string;
        slug: string;
    };
    slug: string;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    available_products_count: number;
}

interface Props {
    featuredProducts: Product[];
    categories: Category[];
    latestProducts: Product[];
    [key: string]: unknown;
}

export default function Welcome({ featuredProducts, categories }: Props) {
    return (
        <>
            <Head title="Kampung Tudung - Premium Tudung & Hats for International Buyers" />
            
            <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl">🧕</div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Kampung Tudung</h1>
                                    <p className="text-sm text-gray-600">Premium Headwear Collection</p>
                                </div>
                            </div>
                            <nav className="hidden md:flex items-center space-x-8">
                                <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
                                <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                                <Link href="/dashboard">
                                    <Button>Dashboard</Button>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            🌟 Premium Tudung & Hats Collection
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Discover our exquisite collection of traditional Malaysian tudung, hijabs, and fashion hats. 
                            Crafted with premium materials for international buyers seeking authentic, high-quality headwear.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/products">
                                <Button size="lg" className="text-lg px-8">
                                    🛍️ Browse Products
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="text-lg px-8">
                                    📧 Get Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Why Choose Kampung Tudung? ✨
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🌍</div>
                                <h4 className="text-xl font-semibold mb-2">International Shipping</h4>
                                <p className="text-gray-600">Worldwide delivery to bring authentic Malaysian headwear to your doorstep</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">✨</div>
                                <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
                                <p className="text-gray-600">Carefully selected materials and traditional craftsmanship in every piece</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🎨</div>
                                <h4 className="text-xl font-semibold mb-2">Diverse Collection</h4>
                                <p className="text-gray-600">From traditional tudung to modern hijabs and stylish hats</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                {featuredProducts.length > 0 && (
                    <section className="py-16 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                ⭐ Featured Products
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {featuredProducts.slice(0, 4).map((product) => (
                                    <Link 
                                        key={product.id} 
                                        href={`/products/${product.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="p-4">
                                                <p className="text-xs text-purple-600 uppercase font-medium">
                                                    {product.category.name}
                                                </p>
                                                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                                    {product.name}
                                                </h4>
                                                <p className="text-lg font-bold text-purple-600">
                                                    ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <Link href="/products">
                                    <Button variant="outline" size="lg">
                                        View All Products →
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Categories */}
                {categories.length > 0 && (
                    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                📂 Shop by Category
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories.map((category) => (
                                    <Link 
                                        key={category.id} 
                                        href={`/categories/${category.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                                {category.name}
                                            </h4>
                                            <p className="text-gray-600 mb-4">{category.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-purple-600 font-medium">
                                                    {category.available_products_count} products
                                                </span>
                                                <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-4xl font-bold mb-6">
                            Ready to Place Your Order? 🚀
                        </h3>
                        <p className="text-xl mb-8 opacity-90">
                            Contact us for bulk orders, custom designs, or general inquiries. 
                            We're here to help international buyers find the perfect headwear solutions.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="text-lg px-8">
                                📞 Contact Us Now
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="text-2xl">🧕</div>
                                    <span className="text-xl font-bold">Kampung Tudung</span>
                                </div>
                                <p className="text-gray-400">
                                    Your trusted partner for premium Malaysian headwear, 
                                    serving international buyers with authentic products.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <div className="space-y-2 text-gray-400">
                                    <Link href="/products" className="block hover:text-white">Products</Link>
                                    <Link href="/categories" className="block hover:text-white">Categories</Link>
                                    <Link href="/contact" className="block hover:text-white">Contact</Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Contact Info</h4>
                                <div className="space-y-2 text-gray-400">
                                    <p>📧 info@kampungtudung.com</p>
                                    <p>📱 +60 12-345-6789</p>
                                    <p>🌍 Worldwide Shipping</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2024 Kampung Tudung. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}