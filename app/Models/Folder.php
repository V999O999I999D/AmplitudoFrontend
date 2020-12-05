<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use RecursiveRelationships\Traits\HasRecursiveRelationships;

class Folder extends Model
{
    use HasFactory, HasRecursiveRelationships;
}
