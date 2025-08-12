<?php

namespace Database\Factories;

use App\Models\Inquiry;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inquiry>
 */
class InquiryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Inquiry>
     */
    protected $model = Inquiry::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'company' => $this->faker->optional()->company(),
            'country' => $this->faker->country(),
            'subject' => $this->faker->sentence(),
            'message' => $this->faker->paragraphs(2, true),
            'product_id' => $this->faker->optional()->randomElement(Product::pluck('id')->toArray()),
            'status' => $this->faker->randomElement(['new', 'replied', 'closed']),
        ];
    }
}