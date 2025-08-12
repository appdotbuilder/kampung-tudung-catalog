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
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Inquirer name');
            $table->string('email')->comment('Inquirer email');
            $table->string('company')->nullable()->comment('Company name');
            $table->string('country')->nullable()->comment('Country of origin');
            $table->string('subject')->comment('Inquiry subject');
            $table->text('message')->comment('Inquiry message');
            $table->foreignId('product_id')->nullable()->constrained()->onDelete('set null');
            $table->enum('status', ['new', 'replied', 'closed'])->default('new')->comment('Inquiry status');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('email');
            $table->index('status');
            $table->index('created_at');
            $table->index(['status', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};