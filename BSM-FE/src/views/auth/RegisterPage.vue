<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-lg-4 col-md-4 d-sm-none d-md-block  d-none  prog-container text-center">
                <h1>Your Process!</h1>
                <div class="progress-rounded ">
                    <i class="fa fa-circle-notch "></i>
                    <span class="">100%</span>
                </div>

            </div>

            <div class="col-lg-8 col-md-8 col-sm-12 form-container">
                <h1 class="text-center">Set up your account </h1>
                <h5 class="text-center">We are glad to have you onboard</h5>
                <form action="" class="form-input mt-5" >
                    <div class="mt-5">
                        <!-- Error Div (You  must Toggel .d-none class) -->
                        <div class="error-zone d-none">
                            <p class="error"><i class="fa fa-triangle-exclamation"></i> Please typee your firstname !</p>
                        </div>
                        <input type="text" name="" id="firstname" class="form-control rounded-0" placeholder="First Name">
                    </div>
                    <div class="mt-3">
                        <input type="text" name="" id="lastname" class="form-control rounded-0" placeholder="Last Name">
                    </div>
                    <div class="mt-3">
                        <input type="email" name="" id="email" class="form-control rounded-0" placeholder="Email">
                    </div>
                    <div class="mt-3">
                        <input type="password" name="" id="password" class="form-control rounded-0" placeholder="Password">
                    </div>
                    <div class="mt-3">
                        <input type="password" name="" id="password2" class="form-control rounded-0" placeholder="Re enter password">
                    </div>
                    <div class="mt-3 terms-check">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">I agree with aqamine <a
                                    href="#" data-bs-toggle="modal" data-bs-target="#PrivacyPolicy">Terms</a>, <a href="#" data-bs-toggle="modal" data-bs-target="#PrivacyPolicy">Privacy Policy</a> and <a href="#" data-bs-toggle="modal" data-bs-target="#PrivacyPolicy">E-Sign</a>
                                consent</label>
                        </div>
                    </div>
                    <div class="mt-3  register-btn-div">
                        <button class="btn btn-light rounded-0 register-button mb-5">Register </button>
                    </div>
                    <p class="login-p mt-3">Already have an account? <a href="login.html">Sign In <i
                                class="fa fa-arrow-right-to-bracket"></i></a></p>
                </form>

                <!-- Spinner -->
                <base-spinner  color="text-light" class="mt-5"></base-spinner>
            </div>
        </div>

        <!-- Start Policy Modal -->
        <div class="modal fade " id="PrivacyPolicy" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="PrivacyPolicyLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content rounded-0 bg-dark text-light">
                    <div class="modal-header">
                        <h4 class="modal-title" id="PrivacyPolicyLabel">You must read this !</h4>
                    </div>
                    <div class="modal-body policy-modal-body">
                        <h3>Terms</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3>Privacy Policy</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3>E-Sign</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light rounded-0 btn-sm" data-bs-dismiss="modal" aria-label="Close">Understood</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Policy Modal -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import './../../assets/css/register.css';
</style>