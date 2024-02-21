<script>

    // import Axios
    import axios from 'axios';

    // import store 
    import { store } from '../store';

    // import components
    import FooterList from './FooterList.vue';

    export default {
        data () {
            return {
                store,
                linkList: [],
            }
        },
        components: {
            FooterList,
        },
        methods: {
            getEmail(inputEmail) {
               
                console.log(`l'utente con email ${inputEmail} vuole iscriversi alla newsletter`)
            
            },
            fetchData() {
                axios.get( store.apiUri + 'footerLinks').then((res) => {
                this.linkList = res.data;
                });
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>

<template>
    <div>
        
        <div class="container-l">
            <div class="container-s d-flex gap-3">
                <!-- <div>

                    <h6 class="text-serif">About</h6>
                    <div class="divider"></div>
                    <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque animi exercitationem iusto pariatur distinctio accusamus culpa dicta neque! Qui!</p>

                </div> -->

                <footer-list v-for="(link,i) in linkList" :key="i" :link="link">
                    <!-- <app-social></app-social> -->
                    <component 
                    v-if="link.extraComponent.props" 
                    :is="link.extraComponent.name" 
                    :links="link.extraComponent.props.links" 
                    :colours="link.extraComponent.props.colours"
                    @subscribe="getEmail"
                    ></component>
                </footer-list>

            </div>
        </div>

        <aside class="copyright">
            Copyrigth Everlead©MikadoTeams
        </aside>
    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    div {
        background-color: #181515;
        color: $footer-text;

        .debug {
            border: 1px solid white;
        }

        .container-s {
            padding: calc($base-space * 3) 0;
        }

        .copyright {
            padding: calc($base-space / 3);
            background-color: $secondary-bg;
            text-align: center;
            font-size: 0.5rem;
        }
    }

</style>