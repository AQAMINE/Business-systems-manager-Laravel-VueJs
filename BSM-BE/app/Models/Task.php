<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'task',
        'complated',
        'lastDate',
        'public',
        'user_id'
    ];



    public function user()
    {
        return $this->belongsTo('App\Models\User');
        // return $this->belongsTo(User::class , 'user_id');

    }

}
