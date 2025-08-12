<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Product>
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $products = [
            'Premium Silk Hijab',
            'Cotton Tudung Bawal',
            'Chiffon Long Scarf',
            'Instant Hijab',
            'Prayer Telekung',
            'Fashion Beret',
            'Baseball Cap',
            'Wide Brim Hat',
            'Bucket Hat',
            'Hijab Pin Set',
            'Magnetic Brooch',
            'Under Cap',
        ];

        $name = $this->faker->randomElement($products) . ' - ' . $this->faker->colorName();
        
        return [
            'name' => $name,
            'description' => $this->faker->paragraphs(3, true),
            'price' => $this->faker->randomFloat(2, 15, 150),
            'slug' => Str::slug($name),
            'category_id' => Category::factory(),
            'images' => [
                'https://via.placeholder.com/600x600/4F46E5/ffffff?text=Product+1',
                'https://via.placeholder.com/600x600/7C3AED/ffffff?text=Product+2',
                'https://via.placeholder.com/600x600/EC4899/ffffff?text=Product+3',
            ],
            'featured' => $this->faker->boolean(20),
            'available' => $this->faker->boolean(95),
        ];
    }
}