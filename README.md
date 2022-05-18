# Business systems manager - Laravel/VueJs

## 🤩 If you want to run this code, you need to follow these steps:

### 🟢 FrontEnd Using VueJs
1. You must install nodejs from https://nodejs.org/en/
2. ``` cd BSM-FE ```
3. Run ``` npm install ``` in the extracted project folder to install all required dependencies => This will create a node_modules folder which is missing
4. Run ``` npm run serve ``` to bring up the development server, view the app at localhost:8080 (or whichever port is shown in your terminal)
5. 🤞🏼🤞🏼#Run ``` npm run lint ``` Lints and fixes files

### 🔴 BackEnd Laravel

1. In your cli ```cd BSM-BE```
2. Copy ```.env.example``` into ```.env``` and run ```php artisan key:generate```
3. Run ```php artisan migrate```
4. Run ```composer install```
 #### 🤞🏼🤞🏼 Auth JWT🤞🏼🤞🏼 See more https://jwt-auth.readthedocs.io/en/develop/laravel-installation/.
6. Run ```php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"```
7. Run ```php artisan jwt:secret```
8. Run ```php artisan serve```

<img src="https://user-images.githubusercontent.com/32686488/169119645-4e13172d-8f88-4040-9ad0-f44c3409ad01.png"/>
<img src="https://user-images.githubusercontent.com/32686488/169119663-8855ad34-5ea0-4e9d-aec8-890d4f738409.png"/>
