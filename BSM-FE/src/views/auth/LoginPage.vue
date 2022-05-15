<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-lg-4 col-md-4 d-sm-none d-md-block  d-none  prog-container text-center">
                <!-- <h1>Sign in!</h1> -->
                <!-- <div class="progress-rounded ">
                    <i class="fa fa-circle-notch "></i>
                    <span class="">100%</span>
                </div> -->
                <img src="./../../assets/svg/register.svg" class="svg-side" alt="">
            </div>

            <div class="col-lg-8 col-md-8 col-sm-12 form-container">
                <h1 class="text-center">Welcome Back Again ! </h1>
                <h5 class="text-center">Reach the best service in Morocco</h5>
                <form action="" class="form-input mt-5" >

                    <div class="mt-5">
                        <!-- Error Div (You  must Toggel .d-none class) -->
                        <div class="error-zone ">
                            <p class="error"><i class="fa fa-triangle-exclamation"></i> Email or password incorrect please try again!</p>
                        </div>
                        <input type="email" name="" id="email" class="form-control rounded-0" placeholder="Email">
                    </div>
                    <div class="mt-3">
                        <input type="password" name="" id="password" class="form-control rounded-0" placeholder="Password">
                    </div>


                    <div class="mt-3 terms-check">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Remember me on this device 
                                </label>
                        </div>
                    </div>
                    <div class="mt-3  register-btn-div">
                        <button class="btn btn-light rounded-0 register-button mb-5">Login </button>
                    </div>
                    <p class="login-p mt-3">Create new account? 
                                <router-link class="to-login"  to="register">
                                    <i class="fa fa-arrow-right-to-bracket">  Register </i>
                                </router-link></p>
                </form>

                <!-- Spinner -->
                <base-spinner color="text-light" class="mt-5"></base-spinner>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
@import './../../assets/css/login.css';

</style>