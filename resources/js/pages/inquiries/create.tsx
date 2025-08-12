import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Product {
    id: number;
    name: string;
}

interface Props {
    products: Product[];
    [key: string]: unknown;
}



export default function InquiryCreate({ products }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        company: '',
        country: '',
        subject: '',
        message: '',
        product_id: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('inquiries.store'));
    };

    return (
        <>
            <Head title="Contact Us - Kampung Tudung" />
            
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
                                <Link href="/contact" className="text-purple-600 font-medium">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Contact Us 📞
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ready to place an order or have questions about our products? 
                            We're here to help international buyers find the perfect headwear solutions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-6">Get in Touch 🌟</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">📧</div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="opacity-90">info@kampungtudung.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">📱</div>
                                        <div>
                                            <p className="font-medium">WhatsApp</p>
                                            <p className="opacity-90">+60 12-345-6789</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">🌍</div>
                                        <div>
                                            <p className="font-medium">Shipping</p>
                                            <p className="opacity-90">Worldwide Delivery</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">⏰</div>
                                        <div>
                                            <p className="font-medium">Response Time</p>
                                            <p className="opacity-90">24-48 hours</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-white/20">
                                    <h4 className="font-semibold mb-3">Why Choose Us? ✨</h4>
                                    <ul className="space-y-2 text-sm opacity-90">
                                        <li>• Bulk order specialists</li>
                                        <li>• Custom design options</li>
                                        <li>• Competitive wholesale prices</li>
                                        <li>• Quality guarantee</li>
                                        <li>• Fast international shipping</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Basic Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Company Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={data.company}
                                                onChange={e => setData('company', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="Your company name (optional)"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                id="country"
                                                value={data.country}
                                                onChange={e => setData('country', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="Your country"
                                            />
                                        </div>
                                    </div>

                                    {/* Product Interest */}
                                    <div>
                                        <label htmlFor="product_id" className="block text-sm font-medium text-gray-700 mb-2">
                                            Interested Product (Optional)
                                        </label>
                                        <select
                                            id="product_id"
                                            value={data.product_id}
                                            onChange={e => setData('product_id', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select a product (optional)</option>
                                            {products.map((product) => (
                                                <option key={product.id} value={product.id.toString()}>
                                                    {product.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={data.subject}
                                            onChange={e => setData('subject', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="e.g., Bulk Order Inquiry, Product Questions, Custom Design Request"
                                            required
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Tell us about your requirements, quantities needed, preferred colors, shipping destination, and any other details..."
                                            required
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                        )}
                                        <p className="mt-1 text-sm text-gray-500">
                                            Please include details like quantity, colors, sizes, and shipping destination.
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={processing}
                                            className="w-full text-lg"
                                        >
                                            {processing ? '📤 Sending...' : '📧 Send Inquiry'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 bg-blue-50 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                            💡 Tips for International Buyers
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                            <div>
                                <h4 className="font-semibold mb-2">📦 For Bulk Orders:</h4>
                                <ul className="space-y-1">
                                    <li>• Specify quantities and sizes</li>
                                    <li>• Mention preferred colors</li>
                                    <li>• Include your target price range</li>
                                    <li>• Share your delivery timeline</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">🎨 For Custom Designs:</h4>
                                <ul className="space-y-1">
                                    <li>• Attach reference images if possible</li>
                                    <li>• Describe material preferences</li>
                                    <li>• Mention minimum order quantities</li>
                                    <li>• Share your brand requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}