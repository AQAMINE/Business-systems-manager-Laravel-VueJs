<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\taskController;
use App\Http\Controllers\api\v1\userController;
use App\Http\Controllers\api\v1\auth\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Taks
Route::apiResource('/tasks' ,taskController::class);
Route::patch('tasks/taskState/{id}' , [taskController::class , 'taskState']);

//Users
Route::apiResource('/users' , userController::class);

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('login', [AuthController::class , 'login']);
    Route::post('logout', [AuthController::class , 'logout']);
    Route::post('refresh', [AuthController::class , 'refresh']);
    Route::post('me', [AuthController::class , 'me']);
    Route::post('register' , [AuthController::class , 'register']);
});

//http://localhost:8080/api/v1/auth/register
