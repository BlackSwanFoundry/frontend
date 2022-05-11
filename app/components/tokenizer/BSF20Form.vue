<template>
    <section class="card ml-3">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <form
            accept-charset="UTF-8"
            v-on:submit.prevent="onSave"
            method="POST">
            <fieldset class="form-group">
                <select class="form-control" v-model="tokenType" @change="onTypeChange($event)">
                    <option value="" selected disabled>Choose</option>
                    <option v-for="token in types" :value="token.id" :key="token.id">{{ token.name }}</option>
                </select>
            </fieldset>
            <fieldset class="form-group">
                <label>Token Name</label>
                <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    placeholder="Token Name.."/>
            </fieldset>
            <fieldset class="form-group">
                <label>Decimals</label>
                <input
                    type="number"
                    v-model="decimals"
                    class="form-control"
                    placeholder="Name"
                    required="required"/>
            </fieldset>
            <fieldset class="form-group">
                <label>Total Supply</label>
                <input
                    type="number"
                    v-model="total"
                    class="form-control"
                    placeholder="Name"
                    required="required"/>
            </fieldset>
            <hr>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
        </div>
    </section>
</template>

<script>
    // import web3 from "web3"

    export default{
        name: "ERC20Form",
        props: ["title"],
        data(){
            return {
                loading: true,
                name: "",
                decimals: 0,
                total: 0,
                isSuccess: false,
                types: [{id:1,name:"Basic Token"}, {id:2,name:"Liquidity Token"}],
                tokenType: null,
                liquidity: false
            };
        },
        methods: {
            onSave(){
                let data = {
                    name: this.name,
                    decimals: this.decimals,
                    total: this.total
                };

                // Do web3 things.
            },
            onTypeChange(event){
                console.log(event);
                console.log(event.target);
                let t = event.target[event.target.options.selectedIndex];
                console.log(t);
            }
        }
    }
</script>