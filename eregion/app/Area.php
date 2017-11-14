<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    public function region{
    	return $this->belongsTo(Post::class);
    }
}
