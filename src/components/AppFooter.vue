<script>

    // import components
    import FooterList from './FooterList.vue';
    // import AppSocial from './AppSocial.vue';

    export default {
        data () {
            return {
                linkList:  [
                    {
                        title: 'About',
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
                        listItems: [
                            {
                                icon: {
                                    kitClass: 'brands',
                                    iconClass: 'twitter',
                                },
                                text: `<a href="#">@alisadadm</a> Hi <a href="#">@alisadadm</a> can you please submit a ticket at..`,  
                                link: '',
                            },
                            {
                                icon: {
                                    kitClass: 'brands',
                                    iconClass: 'twitter',
                                },
                                text: `<a href="#">@HenrySefaBoaky</a> check out our there Gloia wich has all the necessary elements to build a multi vendor marketplace
                                <a href="#">https://t.co/c9BIYxZBlI</a>`,  
                                link: '',
                            },
                        ]
                    },
                    {
                        title: 'Important Links',
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
            // AppSocial,
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

                <footer-list v-for="link in linkList" :link="link">
                    <app-social></app-social>
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