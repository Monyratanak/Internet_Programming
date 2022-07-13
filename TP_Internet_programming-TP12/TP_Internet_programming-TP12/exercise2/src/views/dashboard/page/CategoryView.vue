<script>
import categoriesApi from "../../../libs/apis/category";
import categoryDialog from '../../../components/CategoryDialog'

export default {
    components:{
        categoryDialog
    },
    data(){
        return{
            categories: [],
            showDialog: true
        }
    },
    async mounted(){
        this.categories = await categoriesApi.getCategoryItem();
    },
    methods: {
        addNew(){
            this.showDialog = !this.showDialog
        }
    }
}
</script>

<template>
    <main>
        <div class="header">
            <div class="hleft">Category</div>
            <div class="hright">
                <button @click="addNew()">Add new</button>
            </div>
        </div>
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>imageUrl</th>
                    <th>action</th>
                </tr>
                <tr v-for="category in categories" :key="category._id">
                    <td>{{category.name}}</td>
                    <td>{{category.desc}}</td>
                    <td>{{category.imageUrl}}</td>
                    <td>
                        <button>edit</button>
                        <button>delete</button>
                    </td>
                </tr>
            </table>
        </div>
        <categoryDialog title="Add New Category" btn="Create"/>
    </main>
</template>

<style scoped>
main{
    padding: 10px 20px 10px 20px;
}
.header{
    display: flex;
    margin-bottom: 20px;
}
.hleft{
    font-size: large;
    width: 50%;
    text-align: left;
}
.hright{
    width: 50%;
    text-align: right;
}
table{
    border: 2px solid black;
    width: 100%;
    border-collapse: collapse;
}
th{
    background-color: antiquewhite;
    border-right: 2px solid black
}
td{
    border-right: 2px solid black;
}
button{
    margin-left: 5px;
}
</style>