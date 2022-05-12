<template>
    <section id="bsf20-form" class="card">
        <div class="card-header">
            <h5 class="card-title">{{title}}</h5>
        </div>
        <form
            accept-charset="UTF-8"
            v-on:submit.prevent="onSave"
            method="POST">
            <div class="card-body">
                <div :class="alertClasses" role="alert" v-show="alerting">
                    {{message}}
                </div>      
                <fieldset class="form-group mb-2">
                    <label class="">TOKEN TYPE</label>
                    <select class="form-select" @change="onTypeChange($event)">
                        <option value="" selected disabled>SELECT TYPE..</option>
                        <option v-for="token in types" :value="token.id" :key="token.id">{{ token.name }}</option>
                    </select>
                </fieldset>
                <hr clas="ml-2 mr-2"/>
                <fieldset class="form-floating mb-2">
                    <input
                        id="token-name"
                        type="text"
                        v-model="name"
                        class="form-control"
                        placeholder="Token Name.."/>
                    <label for="token-name">Token Name</label>
                </fieldset>
                <div class="row">
                    <div class="col">
                        <fieldset class="form-floating">
                            <input
                                id="token-decimals"
                                type="number"
                                v-model="decimals"
                                class="form-control"
                                placeholder="Name"
                                required="required"/>
                            <label for="token-decimals">Decimals</label>
                        </fieldset>
                    </div>
                    <div class="col">
                        <fieldset class="form-floating">
                            <input
                                id="token-supply"
                                type="number"
                                v-model="total"
                                class="form-control"
                                placeholder="Name"
                                required="required"/>
                            <label for="token-supply">Total Supply</label>
                        </fieldset>
                    </div>
                </div>
                <hr v-show="liquidity" class="ml-2 mr-2">
                <fieldset class="form-group" v-show="liquidity">
                    <label>LIQUIDITY ROUTER</label>
                    <select class="form-control" v-model="liquidityRouter" @change="onRouterChange($event)">
                        <option value="" selected disabled>Choose</option>
                        <option v-for="router in routers" :value="router.id" :key="router.id">{{ router.name }}</option>
                    </select>
                    <br/>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"></div>
                    </div>
                </fieldset>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">MINT</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "BSF20Form",
        props: {
            title: String
        },
        data(){
            return {
                loading: true,
                name: "",
                decimals: 0,
                total: 0,
                isSuccess: false,
                types: [{id:1,name:"Basic Token"}, {id:2,name:"Liquidity Token"}],
                type: "0",
                liquidity: false,
                router: 0,
                routers: [{id:1,name:"BSFSwap"},{id:2,name:"PancakeSwap"}],
                alerting: false,
                message: "",
                color: "alert-primary"
            };
        },
        computed: {
            alertClasses(){
                return `alert ${this.color}`;
            }
        },
        methods: {
            onSave(){
                this.alerting = false;
                let data = {
                    name: this.name,
                    type: this.type,
                    decimals: this.decimals,
                    total: this.total,
                    liquidity: this.liquidity,
                    router: this.router
                };

                if(data.type === "0"){
                    this.message = "Invalid token type selected.";
                    this.color = "alert-danger";
                    this.alerting = true;
                    return;
                }

                if(data.decimals < 1 || data.decimals > 18){
                    this.message = "Invalid 'decimal' range: 1-18 required.";
                    this.color = "alert-danger";
                    this.alerting = true;
                    return;
                }

                if(data.total <= 0){
                    this.message = "Invalid 'initial supply' range: Greater than 0 required.";
                    this.color = "alert-danger";
                    this.alerting = true;
                    return;
                }

                if(data.type === "1") {

                }

                // Do web3 things.
            },
            onTypeChange(event){
                this.type = event.target[event.target.options.selectedIndex].value;
                if(this.type === "2"){
                    this.liquidity = true;
                }else{
                    this.liquidity = false;
                }
            }
        }
    }
</script>