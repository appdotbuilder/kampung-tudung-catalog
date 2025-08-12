<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        // Get featured products
        $featuredProducts = Product::with('category')
            ->featured()
            ->available()
            ->limit(8)
            ->get();

        // Get categories with product count
        $categories = Category::withCount(['availableProducts'])
            ->get()
            ->filter(function ($category) {
                return $category->available_products_count > 0;
            })
            ->take(6);

        // Get latest products
        $latestProducts = Product::with('category')
            ->available()
            ->latest()
            ->limit(6)
            ->get();

        return Inertia::render('welcome', [
            'featuredProducts' => $featuredProducts,
            'categories' => $categories,
            'latestProducts' => $latestProducts
        ]);
    }
}