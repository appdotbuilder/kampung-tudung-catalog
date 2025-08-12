import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    available_products_count: number;
}

interface Props {
    categories: Category[];
    [key: string]: unknown;
}

export default function CategoriesIndex({ categories }: Props) {
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
            <Head title="Categories - Kampung Tudung" />
            
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

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Product Categories 📂
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our diverse range of premium headwear categories. 
                            From traditional Malaysian tudung to modern hijabs and stylish hats.
                        </p>
                    </div>

                    {categories.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories.map((category) => (
                                <Link 
                                    key={category.id} 
                                    href={`/categories/${category.slug}`}
                                    className="group"
                                >
                                    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-purple-200 group-hover:border-purple-500">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {getCategoryEmoji(category.name)}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {category.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {category.available_products_count} products
                                                </span>
                                                <span className="text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                                                    Explore →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-6">😔</div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Categories Found</h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                We're currently updating our product categories. Please check back soon!
                            </p>
                            <Link href="/">
                                <Button size="lg">
                                    🏠 Back to Home
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* Quick Actions */}
                    <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Can't Find What You're Looking For? 🤔
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            We specialize in custom orders and bulk purchases for international buyers. 
                            Let us know what you need!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/products">
                                <Button size="lg" variant="secondary" className="text-lg px-8">
                                    🛍️ Browse All Products
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-purple-600">
                                    📞 Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}