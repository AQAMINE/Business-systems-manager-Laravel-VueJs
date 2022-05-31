<?php

namespace App\Http\Api\V1\Repositories;

use Auth;
use App\Models\Task;
use App\Http\Resources\TaskResource;
use App\Http\Api\V1\Interfaces\TaskRepositoryInterface;
use App\Http\Requests\Api\V1\TasksRequests\TasksRequests;

class TaskRepository implements TaskRepositoryInterface{

    public function all(){
        $data = Task::all();
        return  TaskResource::collection($data);
    }
    public function createTask($request){
        return Task::create($request);
    }
    public function getTasksByUserId($id){
        $data = Task::where('user_id' , $id)->get();
        return  TaskResource::collection($data);
    }

    public function updateTask($id , $request){
        return Task::find($id)->update($request);
    }

    public function deleteTask($id){

        return Task::destroy($id);
    }

    public function taskState($id){
        $task = Task::find($id);
        if($task->complated == 0){
            return Task::find($id)->update([
                'complated' => 1
            ]);
        }else{
            return Task::find($id)->update([
                'complated' => 0
            ]);
        }
    }

}
