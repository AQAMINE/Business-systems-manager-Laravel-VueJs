<template>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"><img src="../../assets/logo.png" alt=""></a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <h5 class="w-100 text-light">Bonjour </h5>
        <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->

            <ul class="nav flex-column mb-2 list-group">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuEmployee" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-user"></i> Profile
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuEmployee">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-user-pen"></i> Profile</router-link></li>
                        <li><a class="dropdown-item" @click="logout" href="#"><i class="fa fa-right-from-bracket"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>


        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
            <!-- <a class="nav-link px-3" href="#" @click="logout" ><i class="fa-solid fa-right-from-bracket"></i> Déconnexion</a> -->
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$store.dispatch('logout');
            this.$router.replace({name: 'login'});
        },
    },
    // computed:{
    //     fullName(){
    //         const user = this.$store.getters.user;
    //         return user.userable.user.fullname;
    //     }
    // }
}
</script>

<style scoped>
.bg-dark{
    background-color: #191c24 !important;
}
.navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}
.navbar-brand img{
    max-height: 30px;
}
.navbar .navbar-toggler {
    top: .25rem;
    right: 1rem;
}

.navbar h5{
    margin-left: 10px !important;
}
.navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
}

.form-control-dark {
        color: #fff;
        background-color: rgba(255, 255, 255, .1);
        border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

/* Start User DropDown */
.nav a{
    color: #dee2e6 !important;
    font-weight: bold;
    margin-top: 2px;
}
.nav .dropdown-toggle:hover {
    color: rgb(194, 193, 193) !important;
}
/* End User DropDown */
</style>