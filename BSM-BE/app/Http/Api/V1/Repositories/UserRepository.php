<?php


namespace App\Http\Api\V1\Repositories;

use Auth;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Api\V1\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface{
    public function all(){
        $data = User::all();
        return UserResource::collection($data);
    }
}
