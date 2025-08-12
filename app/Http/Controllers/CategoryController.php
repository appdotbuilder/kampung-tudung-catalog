<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the categories.
     */
    public function index()
    {
        $categories = Category::withCount(['availableProducts'])->get();

        return Inertia::render('categories/index', [
            'categories' => $categories
        ]);
    }

    /**
     * Display the specified category and its products.
     */
    public function show(Category $category)
    {
        $products = Product::with('category')
            ->where('category_id', $category->id)
            ->available()
            ->latest()
            ->paginate(12);

        $categories = Category::withCount(['availableProducts'])->get();

        return Inertia::render('categories/show', [
            'category' => $category,
            'products' => $products,
            'categories' => $categories
        ]);
    }
}