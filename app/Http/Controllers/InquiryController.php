<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInquiryRequest;
use App\Models\Inquiry;
use App\Models\Product;
use Inertia\Inertia;

class InquiryController extends Controller
{
    /**
     * Show the form for creating a new inquiry.
     */
    public function create()
    {
        $products = Product::available()->select('id', 'name')->get();

        return Inertia::render('inquiries/create', [
            'products' => $products
        ]);
    }

    /**
     * Store a newly created inquiry in storage.
     */
    public function store(StoreInquiryRequest $request)
    {
        $inquiry = Inquiry::create($request->validated());

        return redirect()->back()
            ->with('success', 'Your inquiry has been sent successfully! We will get back to you soon.');
    }
}