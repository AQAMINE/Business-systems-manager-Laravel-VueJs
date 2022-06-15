<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //Tasks Repo Binding
        $this->app->bind(
            'App\Http\Api\V1\Interfaces\TaskRepositoryInterface',
            'App\Http\Api\V1\Repositories\TaskRepository'
        );

        //Users Repo Binding
        $this->app->bind(
            'App\Http\Api\V1\Interfaces\UserRepositoryInterface',
            'App\Http\Api\V1\Repositories\UserRepository'
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
