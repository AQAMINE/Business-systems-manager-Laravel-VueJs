<?php

namespace App\Http\Api\V1\Repositories;

use App\Models\Task;
use App\Http\Resources\TaskResource;
use App\Http\Api\V1\Interfaces\TaskRepositoryInterface;
use Auth;

class TaskRepository implements TaskRepositoryInterface{

    public function all(){
        $data = Task::where('user_id' , Auth::id())->get();
        return  TaskResource::collection($data);
    }

}
