<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Product name');
            $table->text('description')->comment('Detailed product description');
            $table->decimal('price', 10, 2)->nullable()->comment('Product price in USD');
            $table->string('slug')->unique()->comment('URL-friendly version of name');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->json('images')->nullable()->comment('Array of product image paths');
            $table->boolean('featured')->default(false)->comment('Whether product is featured');
            $table->boolean('available')->default(true)->comment('Whether product is available');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('name');
            $table->index('slug');
            $table->index('category_id');
            $table->index('featured');
            $table->index('available');
            $table->index(['category_id', 'available']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};