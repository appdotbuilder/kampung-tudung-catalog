<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Inquiry;
use Illuminate\Database\Seeder;

class ProductCatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create categories
        $categories = [
            [
                'name' => 'Hijab',
                'description' => 'Beautiful hijabs in various styles and colors perfect for daily wear and special occasions',
                'slug' => 'hijab'
            ],
            [
                'name' => 'Tudung',
                'description' => 'Traditional Malaysian tudung collection featuring premium fabrics and elegant designs',
                'slug' => 'tudung'
            ],
            [
                'name' => 'Caps',
                'description' => 'Stylish caps and headwear for men and women, perfect for casual and sports activities',
                'slug' => 'caps'
            ],
            [
                'name' => 'Hats',
                'description' => 'Fashion hats for all occasions - from sun hats to formal headwear',
                'slug' => 'hats'
            ],
            [
                'name' => 'Accessories',
                'description' => 'Hijab pins, clips, brooches and other accessories to complete your look',
                'slug' => 'accessories'
            ],
        ];

        foreach ($categories as $categoryData) {
            $category = Category::create($categoryData);

            // Create products for each category
            $productsByCategory = [
                'Hijab' => [
                    ['name' => 'Premium Silk Hijab - Midnight Blue', 'price' => 45.00, 'featured' => true],
                    ['name' => 'Chiffon Square Hijab - Rose Gold', 'price' => 25.00, 'featured' => true],
                    ['name' => 'Cotton Jersey Hijab - Classic Black', 'price' => 18.00, 'featured' => false],
                    ['name' => 'Bamboo Fiber Hijab - Forest Green', 'price' => 32.00, 'featured' => false],
                    ['name' => 'Instant Hijab - Elegant Cream', 'price' => 22.00, 'featured' => true],
                ],
                'Tudung' => [
                    ['name' => 'Tudung Bawal Premium - Royal Purple', 'price' => 38.00, 'featured' => true],
                    ['name' => 'Tudung Sarung - Traditional Batik', 'price' => 42.00, 'featured' => false],
                    ['name' => 'Tudung Lycra - Soft Pink', 'price' => 28.00, 'featured' => false],
                    ['name' => 'Tudung Chiffon - Ocean Blue', 'price' => 35.00, 'featured' => true],
                ],
                'Caps' => [
                    ['name' => 'Unisex Baseball Cap - Navy', 'price' => 15.00, 'featured' => false],
                    ['name' => 'Snapback Cap - Urban Grey', 'price' => 20.00, 'featured' => false],
                    ['name' => 'Sports Cap - Athletic Red', 'price' => 18.00, 'featured' => false],
                ],
                'Hats' => [
                    ['name' => 'Wide Brim Sun Hat - Natural Straw', 'price' => 35.00, 'featured' => true],
                    ['name' => 'Vintage Fedora - Charcoal', 'price' => 55.00, 'featured' => false],
                    ['name' => 'Bucket Hat - Floral Print', 'price' => 22.00, 'featured' => false],
                ],
                'Accessories' => [
                    ['name' => 'Magnetic Hijab Pin Set - Gold Tone', 'price' => 12.00, 'featured' => false],
                    ['name' => 'Pearl Brooch Collection', 'price' => 25.00, 'featured' => true],
                    ['name' => 'Under Cap Set - 3 Colors', 'price' => 15.00, 'featured' => false],
                ],
            ];

            if (isset($productsByCategory[$category->name])) {
                foreach ($productsByCategory[$category->name] as $productData) {
                    Product::create([
                        'name' => $productData['name'],
                        'description' => "High-quality " . strtolower($category->name) . " made from premium materials. Perfect for international buyers looking for authentic Malaysian headwear. Each piece is carefully crafted with attention to detail and comfort. Suitable for daily wear and special occasions. Available in multiple colors and sizes to meet your specific requirements.",
                        'price' => $productData['price'],
                        'slug' => \Illuminate\Support\Str::slug($productData['name']),
                        'category_id' => $category->id,
                        'images' => [
                            'https://via.placeholder.com/600x600/4F46E5/ffffff?text=' . urlencode($category->name),
                            'https://via.placeholder.com/600x600/7C3AED/ffffff?text=' . urlencode('Detail'),
                            'https://via.placeholder.com/600x600/EC4899/ffffff?text=' . urlencode('Style'),
                        ],
                        'featured' => $productData['featured'],
                        'available' => true,
                    ]);
                }
            }
        }

        // Create some sample inquiries
        Inquiry::factory(10)->create();
    }
}