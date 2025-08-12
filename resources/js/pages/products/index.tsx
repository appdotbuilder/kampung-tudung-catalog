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
    available_products_count: number;
}

interface Props {
    products: {
        data: Product[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    categories: Category[];
    [key: string]: unknown;
}

export default function ProductsIndex({ products, categories }: Props) {
    return (
        <>
            <Head title="All Products - Kampung Tudung" />
            
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <Link href="/" className="flex items-center space-x-4">
                                <div className="text-3xl">🧕</div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Kampung Tudung</h1>
                                    <p className="text-sm text-gray-600">Premium Headwear Collection</p>
                                </div>
                            </Link>
                            <nav className="hidden md:flex items-center space-x-8">
                                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                                <Link href="/products" className="text-purple-600 font-medium">Products</Link>
                                <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">All Products 🛍️</h2>
                            <p className="text-gray-600 mt-2">Discover our complete collection of premium headwear</p>
                        </div>
                        <Link href="/contact">
                            <Button>Get Quote</Button>
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar - Categories */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Categories 📂</h3>
                                <div className="space-y-2">
                                    <Link 
                                        href="/products" 
                                        className="block px-3 py-2 text-purple-600 bg-purple-50 rounded-md font-medium"
                                    >
                                        All Products ({products.data.length})
                                    </Link>
                                    {categories.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={`/categories/${category.slug}`}
                                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            {category.name} ({category.available_products_count})
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="lg:col-span-3">
                            {products.data.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {products.data.map((product) => (
                                            <Link 
                                                key={product.id} 
                                                href={`/products/${product.slug}`}
                                                className="group"
                                            >
                                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                                    <img
                                                        src={product.images[0]}
                                                        alt={product.name}
                                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="p-6">
                                                        <p className="text-xs text-purple-600 uppercase font-medium mb-2">
                                                            {product.category.name}
                                                        </p>
                                                        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                                                            {product.name}
                                                        </h3>
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-xl font-bold text-purple-600">
                                                                ${product.price}
                                                            </p>
                                                            <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                                                                View Details →
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {products.links && products.links.length > 3 && (
                                        <div className="flex justify-center items-center space-x-2 mt-8">
                                            {products.links.map((link, index) => (
                                                <div key={index}>
                                                    {link.url ? (
                                                        <Link
                                                            href={link.url}
                                                            className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                                                link.active
                                                                    ? 'bg-purple-600 text-white'
                                                                    : 'bg-white text-gray-600 hover:bg-purple-50 border'
                                                            }`}
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                        />
                                                    ) : (
                                                        <span
                                                            className="px-3 py-2 text-sm text-gray-400"
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-4xl mb-4">😔</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                                    <p className="text-gray-600 mb-6">
                                        We couldn't find any products matching your criteria.
                                    </p>
                                    <Link href="/categories">
                                        <Button>Browse Categories</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}