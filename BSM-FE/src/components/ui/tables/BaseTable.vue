<template>
    <table class="table table-dark text-light ">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
    </table>
</template>

<style scoped>
.card{
    background-color: #1a1c24;
    border: 1px solid rgb(26 28 36);
    background-clip: border-box;
}
.card-title{
    
    font-weight: bold !important;
}

.table-dark{    
    --bs-table-bg: #1a1c24;
    border-color: white;
}



</style>