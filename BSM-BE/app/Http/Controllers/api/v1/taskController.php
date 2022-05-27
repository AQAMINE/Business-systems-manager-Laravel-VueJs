<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Auth;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

use App\Http\Api\V1\Interfaces\TaskRepositoryInterface;

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
        $this->middleware('role:admin');
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
    public function store(Request $request)
    {
        //

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(Task::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
