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
    category: Category;
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

export default function CategoryShow({ category, products, categories }: Props) {
    const getCategoryEmoji = (categoryName: string) => {
        const emojiMap: { [key: string]: string } = {
            'hijab': '🧕',
            'tudung': '👳‍♀️',
            'caps': '🧢',
            'hats': '👒',
            'accessories': '📿',
        };
        return emojiMap[categoryName.toLowerCase()] || '👑';
    };

    return (
        <>
            <Head title={`${category.name} - Kampung Tudung`} />
            
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
                                <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
                                <Link href="/categories" className="text-purple-600 font-medium">Categories</Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/categories" className="text-gray-500 hover:text-gray-700">Categories</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">{category.name}</span>
                    </nav>
                </div>

                {/* Category Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center">
                            <div className="text-8xl mb-4">
                                {getCategoryEmoji(category.name)}
                            </div>
                            <h2 className="text-4xl font-bold mb-4">{category.name} Collection</h2>
                            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
                                {category.description}
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="text-lg px-8">
                                    📞 Get Bulk Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar - Other Categories */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Other Categories 📂</h3>
                                <div className="space-y-2">
                                    {categories.filter(cat => cat.id !== category.id).map((cat) => (
                                        <Link
                                            key={cat.id}
                                            href={`/categories/${cat.slug}`}
                                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{cat.name}</span>
                                                <span className="text-xs text-gray-400">
                                                    ({cat.available_products_count})
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <Link href="/products">
                                        <Button variant="outline" size="sm" className="w-full">
                                            View All Products
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="lg:col-span-3">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {products.data.length} Products Found
                                </h3>
                            </div>

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
                                                        <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                                                            {product.name}
                                                        </h4>
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
                                    <div className="text-6xl mb-4">{getCategoryEmoji(category.name)}</div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        No Products Available Yet
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        We're working on adding new {category.name.toLowerCase()} products. 
                                        Check back soon or contact us for custom orders!
                                    </p>
                                    <div className="space-x-4">
                                        <Link href="/categories">
                                            <Button variant="outline">Browse Other Categories</Button>
                                        </Link>
                                        <Link href="/contact">
                                            <Button>Contact for Custom Orders</Button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}