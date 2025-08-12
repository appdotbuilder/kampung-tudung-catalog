<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Category>
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            'Hijab' => 'Beautiful hijabs in various styles and colors',
            'Tudung' => 'Traditional Malaysian tudung collection',
            'Caps' => 'Stylish caps and headwear for men and women',
            'Hats' => 'Fashion hats for all occasions',
            'Accessories' => 'Hijab pins, clips and other accessories',
            'Prayer Wear' => 'Special occasion and prayer wear',
        ];

        $name = $this->faker->randomElement(array_keys($categories));
        
        return [
            'name' => $name,
            'description' => $categories[$name],
            'slug' => Str::slug($name),
        ];
    }
}