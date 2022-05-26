<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;



class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'task' => $this->task,
            'complated' => $this->complated,
            'created_at' => $this->created_at,
            'lastDate' => $this->lastDate,
            'public' => $this->public,
            'user' => [
                'firstName' => $this->user->firstName,
                'lastName' => $this->user->lastName,
                'email' => $this->user->email,
                'profilePicture' => $this->user->profilePicture
            ]

        ];
    }
}
