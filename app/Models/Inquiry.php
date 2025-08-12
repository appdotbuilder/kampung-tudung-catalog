<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Inquiry
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $company
 * @property string|null $country
 * @property string $subject
 * @property string $message
 * @property int|null $product_id
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Product|null $product
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry query()
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereSubject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereUpdatedAt($value)
 * @method static \Database\Factories\InquiryFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Inquiry extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'company',
        'country',
        'subject',
        'message',
        'product_id',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the product that owns the inquiry.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}