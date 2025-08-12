import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: {
        id: number;
        name: string;
        slug: string;
    };
    slug: string;
}

interface Props {
    product: Product;
    relatedProducts: Product[];
    [key: string]: unknown;
}

export default function ProductShow({ product, relatedProducts }: Props) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <>
            <Head title={`${product.name} - Kampung Tudung`} />
            
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
                                <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
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
                        <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
                        <span className="text-gray-400">/</span>
                        <Link 
                            href={`/categories/${product.category.slug}`} 
                            className="text-gray-500 hover:text-gray-700"
                        >
                            {product.category.name}
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Product Images */}
                        <div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                            {product.images.length > 1 && (
                                <div className="grid grid-cols-3 gap-2">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`rounded-md overflow-hidden ${
                                                selectedImage === index 
                                                    ? 'ring-2 ring-purple-600' 
                                                    : 'opacity-70 hover:opacity-100'
                                            }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.name} view ${index + 1}`}
                                                className="w-full h-24 object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div>
                            <div className="mb-4">
                                <Link 
                                    href={`/categories/${product.category.slug}`}
                                    className="text-purple-600 text-sm font-medium hover:underline"
                                >
                                    {product.category.name}
                                </Link>
                            </div>
                            
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>
                            
                            <div className="text-2xl font-bold text-purple-600 mb-6">
                                ${product.price}
                            </div>

                            <div className="prose prose-gray max-w-none mb-8">
                                <div className="whitespace-pre-wrap text-gray-700">
                                    {product.description}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <Link href={`/contact?product=${product.id}`}>
                                    <Button size="lg" className="w-full text-lg">
                                        📞 Inquire About This Product
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg" className="w-full text-lg">
                                        💬 Get Bulk Quote
                                    </Button>
                                </Link>
                            </div>

                            {/* Product Features */}
                            <div className="mt-8 bg-purple-50 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">✨ Why Choose This Product?</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Premium quality materials</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Authentic Malaysian craftsmanship</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Perfect for international buyers</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Bulk orders available</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Worldwide shipping</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <section className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Related Products from {product.category.name} 🔗
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <Link 
                                        key={relatedProduct.id} 
                                        href={`/products/${relatedProduct.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            <img
                                                src={relatedProduct.images[0]}
                                                alt={relatedProduct.name}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="p-4">
                                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                                    {relatedProduct.name}
                                                </h3>
                                                <p className="text-lg font-bold text-purple-600">
                                                    ${relatedProduct.price}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}