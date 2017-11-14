<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    public static function archives(){
    	return static::latest()->take(2)->get();
    }
}
