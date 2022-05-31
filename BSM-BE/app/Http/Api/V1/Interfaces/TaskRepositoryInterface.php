<?php

namespace App\Http\Api\V1\Interfaces;


interface TaskRepositoryInterface {

    public function all();
    public function getTasksByUserId($id);
    public function updateTask($id , $request);
    public function createTask($request);
    public function deleteTask($id);
    public function taskState($id);
}
