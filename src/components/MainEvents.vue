<script>
    export default {
        
    }
</script>

<template>
    <section class="section-padding">
            <div class="container-l">
                <div class="container-s">
                    <ul class="col-5">
                        <div class="section-title py-3 px-5">
                            <h4 class="text-capitalize text-serif">Upcoming events</h4> 
                        </div>

                        <li class="active px-5 py-3 d-flex gap-3 align-items-baseline">
                            <span class="event-date">
                                <div class="event-day text-serif">07</div>
                                <div class="event-month">Jan. 2024</div>
                            </span>

                            <span class="event-info">
                                <h6 class="h6 text-serif">Lorem</h6>
                                <p class="text-info mb-1">Lorem ipsum dolor sit amet.</p>
                                <p class="text-info mb-1">Lorem ipsum dolor sit amet.</p>
                                <a href="#">READ MORE</a>
                            </span>
                        </li>

                        <li class="px-5 py-3 d-flex gap-3 align-items-baseline">
                            <span class="event-date">
                                <div class="event-day text-serif">07</div>
                                <div class="event-month">Jan. 2024</div>
                            </span>

                            <span class="event-info">
                                <h6 class="h6 text-serif">Lorem</h6>
                                <p class="text-info mb-1">Lorem ipsum dolor sit amet.</p>
                                <p class="text-info mb-1">Lorem ipsum dolor sit amet.</p>
                                <a href="#">READ MORE</a>
                            </span>
                        </li>
                        <li class="px-5 py-3 d-flex gap-3 align-items-baseline">
                            <span class="event-date">
                                <div class="event-day text-serif">07</div>
                                <div class="event-month">Jan. 2024</div>
                            </span>

                            <span class="event-info">
                                <h6 class="h6 text-serif">Lorem</h6>
                                <p class="text-info mb-1">Lorem ipsum dolor sit amet.</p>
                                <p class="text-info mb-1">Lorem ipsum dolor sit amet.</p>
                                <a href="#">READ MORE</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    section {
        background-image: url(../assets/img/h1-img-09.jpg);
        background-size: cover;
        background-repeat: no-repeat;

        .container-s {
            ul {
                background-color: $main-bg;

                .section-title {
                        margin: 0;
                        box-shadow: 1px 11px 5px -3px rgba(191,191,191,0.75);

                        position: relative;
                        z-index: 2;
                    }

                li {
                    border-top: 1px solid #f1f1f1;

                    &.active {
                        background-color: $highlight-bg;
                    }                    
    
                    .event-date {
                        padding: calc($base-space / 4) calc($base-space / 2);
                        background-color: $secondary-bg;
                        color: $highlight-bg;
                        text-align: center;
                        font-size: 0.8rem;
    
                        .event-month {
                            font-size: 0.6rem;
                        }
                    }
    
                    .event-info {
                        font-size: 0.8rem;
                    }

                }
            }

        }

    }

</style>