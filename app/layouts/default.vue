<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">BSF</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Escrow</a>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/tokenizer">Tokenizer</nuxt-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Surety</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">White Papers</a>
                </li>
            </ul>
        </div>
        <WalletConnector @connect="initWeb3"/>
    </div>
</nav>
    <section class="app">
        <slot />
    </section>
    <!-- <Footer /> -->
</template>

<script>
import Web3 from "web3"
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "default",
    data(){
        return {
            errorMessage: ""
        }
    },
    computed: {
        ...mapGetters("web3", ["getInstance"]),
        web3(){
            return this.getInstance;
        }
    },
    methods: {
        ...mapMutations("web3", ["registerWeb3Instance"]),
        async initWeb3(){
            // Check for web3 provider
            if (typeof window.ethereum !== 'undefined') {
                try {
                // Ask to connect
                await window.ethereum.send('eth_requestAccounts');
                const instance = new Web3(window.ethereum)
                // Get necessary info on your node
                const networkId = await instance.eth.net.getId();
                const coinbase = await instance.eth.getCoinbase();
                const balance = await instance.eth.getBalance(coinbase);
                // Save it to store
                this.registerWeb3Instance({
                    networkId,
                    coinbase,
                    balance
                });
                this.errorMessage = '';
                } catch (error) {
                // User denied account access
                console.error('User denied web3 access', error);
                this.errorMessage = 'Please connect to your Ethereum address on Metamask before connecting to this website';
                return;
                }        
            }
            // No web3 provider
            else {
                console.error('No web3 provider detected');
                this.errorMessage = "No web3 provider detected. Did you install the Metamask extension on this browser?";
                return;
            }
        }
    }
}
</script>