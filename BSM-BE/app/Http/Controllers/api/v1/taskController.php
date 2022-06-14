<?php

namespace App\Http\Controllers\api\v1;

use Auth;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

use App\Http\Controllers\Controller;
use App\Http\Api\V1\Interfaces\TaskRepositoryInterface;
use App\Http\Requests\Api\V1\TasksRequests\TasksRequests;

class taskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private TaskRepositoryInterface $taskRepository;

    public function __construct(TaskRepositoryInterface $taskRepository){
        $this->taskRepository = $taskRepository;
        $this->middleware('auth:api');
        $this->middleware('role:admin')->except(['show','taskState']);
    }

    public function index(): JsonResponse
    {
        return response()->json([
            'data' => $this->taskRepository->all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TasksRequests $request): JsonResponse
    {
        return response()->json(
            [
                'data' => $this->taskRepository->createTask($request->all())
            ],
            Response::HTTP_CREATED
        );

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id): JsonResponse
    {
        //
        if($id == Auth::id()){
            return response()->json([
                'data' => $this->taskRepository->getTasksByUserId(Auth::id())
            ]);
        }else{
            return response()->json('unauthorized');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id , TasksRequests $request): JsonResponse
    {
        return response()->json([
            'data' => $this->taskRepository->updateTask($id, $request->all())
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): JsonResponse
    {
        $this->taskRepository->deleteTask($id);
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }

    public function taskState($id): JsonResponse
    {
        $this->taskRepository->taskState($id);
        return response()->json('Process Done');
    }
}
