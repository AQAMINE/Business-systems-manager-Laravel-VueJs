<template>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
            <div class="position-sticky pt-1">
                <ul class="nav flex-column ">
                    <li class="nav-item bg-dark">
                        <router-link class="nav-link active" aria-current="page" :to="{name: 'dashboard'}">
                        <span data-feather="home"></span>
                        <h6 class="list-group-item list-group-item-action text-light bg-dark mt-2"><i class="fa-solid fa-gauge"></i> Dashboard</h6>
                        </router-link>
                    </li>
                </ul>


                <ul class="nav flex-column mb-2 list-group">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenutask" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-list-check"></i> Tasks
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenutask">
                        <li v-if="isAdmin"><router-link class="dropdown-item" :to="{name: 'addTask'}"> <i class="fa fa-plus"></i> Add task</router-link></li>
                        <li><router-link class="dropdown-item" :to="{ name: 'tasks' }"><i class="fa fa-list"></i> Task list</router-link></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdmin">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuEmployee" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-person-dots-from-line"></i> Employee
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuEmployee">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add Employee</router-link></li>
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> Staff List</a></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdminOrEditor">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuCustomers" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-users-between-lines"></i>  Customers
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuCustomers">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add customer</router-link></li>
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> List of customers</a></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdminOrEditor">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuInvoices" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-file-invoice-dollar"></i>  Invoices
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuInvoices">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add invoce</router-link></li>
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> List of invoices</a></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdminOrEditor">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuProducts" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-dice"></i>  Products
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuProducts">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add product</router-link></li>
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> List of products</a></li>
                        <hr>
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-folder-tree"></i> Categories</router-link></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdminOrEditor">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuOrders" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-box-open"></i>  Orders
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuOrders">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add order</router-link></li>
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> List of orders</a></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdminOrEditor">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuStock" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-boxes-stacked"></i>  Stock
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuStock">
                        <!-- <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add order</router-link></li> -->
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> Stock List</a></li>
                    </ul>
                    </li>
                </ul>
                
                <ul class="nav flex-column mb-2 list-group" v-if="isAdminOrEditor">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuExpenses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-sack-xmark"></i>  Expenses
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuExpenses">
                        <li><router-link class="dropdown-item" :to="{name: 'dashboard'}"> <i class="fa fa-plus"></i> Add expense</router-link></li>
                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> List of expenses</a></li>
                    </ul>
                    </li>
                </ul>

                <ul class="nav flex-column mb-2 list-group" v-if="isAdmin">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuSettings" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-gear" ></i>  Settings 
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuSettings">
                            <li><router-link class="dropdown-item" :to="{name: 'settings'}"> <i class="fa fa-screwdriver-wrench"></i> General settings</router-link></li>
                            
                        </ul>
                    </li>
                </ul>
                
            </div>
        </nav>
</template>
<script>

export default {
    
    data(){
        return{

        }
    }
}
</script>
<style scoped>
/*Start Icons Color*/
.fa-list-check{
    /**Tasks */
    color: #f27a23a8
}
.fa-person-dots-from-line{
    /**employee */
    color: #8f5fe8 ;
}
.fa-users-between-lines{
    /**Customers */
    color: #fcab00a8;
}
.fa-file-invoice-dollar{
    /**invoices */
    color: #82fc00a8;
}
.fa-dice{
    /**products */
    color: #fcd200a8;
}
.fa-box-open{
    /**orders */
    color: #bb0edea8;
}
.fa-boxes-stacked{
    /**stock */
    color: #0ebfdea8;
}
.fa-sack-xmark{
    /* Expenses */
    color: #31de0ea8;
}
.fa-gear{
    /**settings */
    color: #fc0031a8;
}
/**End Icons Color */
span{
    font-size: 15px;
}
i{
    background-color: #2a2d3a;
    padding: 10px;
    border-radius: 15%;
    margin-right:5px ;
}
.list-group-item{
    font-size: 13px;
}

.bg-dark{
    background-color: #191c24 !important;
}
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
    .sidebar {
        top: 5rem;
    }
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
    font-weight: 500;
    color: #333;
    padding: 0px;
}



.sidebar .nav-link.active {
    color: #2470dc;
}

.sidebar .nav-link{
    padding: .5rem 1rem;
}
.sidebar .nav-item:hover{
    background-color: #0f0f15 !important;
    color: #6c7293;
    
}
.sidebar .nav-link:hover{
    color: white !important;
}

.text-orange{
    color: #6c7293 !important;
}




/*Start dropdown*/
.dropdown a{
    color:#6c7293 !important;
}
.dropdown .dropdown-item:hover{
    color:white !important;
}
.sidebar .nav-link:hover{
    color: white !important;
}

/* .router-link-active{
} */
</style>