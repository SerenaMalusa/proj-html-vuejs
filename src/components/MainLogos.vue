<script>

    // import store
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
                imgs: [
                    {
                        companyName: 'RKO',
                        imgName: 'h4-clients-img-01.png',
                    },
                    {
                        companyName: 'RKO',
                        imgName: 'h4-clients-img-03.png',
                    },
                    {
                        companyName: 'RKO',
                        imgName: 'h4-clients-img-05.png',
                    },
                    {
                        companyName: 'RKO',
                        imgName: 'h4-clients-img-07.png',
                    },
                    {
                        companyName: 'RKO',
                        imgName: 'h4-clients-img-09.png',
                    },
                ],
            }
        }
    }
</script>

<template>
    <section class="section-padding pt-5">
        <div class="container-l">
            <div class="container-s d-flex justify-content-between">

                <img 
                v-for="(img,i) in imgs" :key="i" 
                :src="store.getPath(img)" 
                :alt="`${img.companyName}logo`"
                >

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    img:hover {
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(44%) sepia(61%) saturate(6593%) hue-rotate(354deg) brightness(104%) contrast(99%);
    }

</style>