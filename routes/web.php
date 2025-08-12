<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page with product catalog
Route::get('/', [HomeController::class, 'index'])->name('home');

// Product routes
Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index')->name('products.index');
    Route::get('/products/{product:slug}', 'show')->name('products.show');
});

// Category routes
Route::controller(CategoryController::class)->group(function () {
    Route::get('/categories', 'index')->name('categories.index');
    Route::get('/categories/{category:slug}', 'show')->name('categories.show');
});

// Inquiry routes
Route::controller(InquiryController::class)->group(function () {
    Route::get('/contact', 'create')->name('inquiries.create');
    Route::post('/contact', 'store')->name('inquiries.store');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
