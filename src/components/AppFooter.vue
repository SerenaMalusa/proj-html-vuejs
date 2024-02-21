<script>

    // import components
    import FooterList from './FooterList.vue';

    export default {
        data () {
            return {
                linkList:  [
                    {
                        title: 'About',
                        extraComponent: 'AppSocial',
                        listItems: [
                            {
                                icon: {
                                    kitClass: '',
                                    iconClass: '',
                                },
                                text: 'We creted Everlead to effectively become the stepping stone towards meeting all your goals & achieving business success',  
                                link: '',
                            },
                        ]
                    },
                    {
                        title: 'Twitter',
                        extraComponent: '',
                        listItems: [
                            {
                                icon: {
                                    kitClass: 'brands',
                                    iconClass: 'twitter',
                                },
                                text: `@alisadadm Hi @alisadadm can you please submit a ticket at..`,  
                                link: '',
                            },
                            {
                                icon: {
                                    kitClass: 'brands',
                                    iconClass: 'twitter',
                                },
                                text: `@HenrySefaBoaky check out our there Gloia wich has all the necessary elements to build a multi vendor marketplace
                                https://t.co/c9BIYxZBlI`,  
                                link: '',
                            },
                        ]
                    },
                    {
                        title: 'Important Links',
                        extraComponent: '',
                        listItems: [
                            {
                                icon: {
                                    kitClass: '',
                                    iconClass: '',
                                },
                                text: 'About me',  
                                link: '#',
                            },
                            {
                                icon: {
                                    kitClass: '',
                                    iconClass: '',
                                },
                                text: 'About us',  
                                link: '#',
                            },
                            {
                                icon: {
                                    kitClass: '',
                                    iconClass: '',
                                },
                                text: 'Lenguage packs',  
                                link: '#',
                            },
                            {
                                icon: {
                                    kitClass: '',
                                    iconClass: '',
                                },
                                text: 'Become a coach',  
                                link: '#',
                            },
                            {
                                icon: {
                                    kitClass: '',
                                    iconClass: '',
                                },
                                text: 'Monthly events',  
                                link: '#',
                            },
                        ]
                    },
                    {
                        title: 'Contact me',
                        extraComponent: 'AppSearchBar',
                        listItems: [
                            {   
                                icon: {
                                    kitClass: 'solid',
                                    iconClass: 'location-dot',
                                },
                                text: '457 BigBlue Street, NY 10013',  
                                link: '#',
                            },
                            {
                                icon: {
                                    kitClass: 'solid',
                                    iconClass: 'phone',
                                },
                                text: '(315) 5512 - 2579',  
                                link: '#',
                            },
                            {
                                icon: {
                                    kitClass: 'solid',
                                    iconClass: 'envelope',
                                },
                                text: 'everlead@mikado.com',  
                                link: '#',
                            },
                        ]
                    },

                ],

            }
        },
        components: {
            FooterList,
        },
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
                    <component :is="link.extraComponent"></component>
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