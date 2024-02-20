<script>
    export default {
        
    }
</script>

<template>
    <div>
        
        <div class="container-l">
            <div class="container-s d-flex gap-2">
                <div>

                    <h6 class="text-serif">About</h6>
                    <div class="divider"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque animi exercitationem iusto pariatur distinctio accusamus culpa dicta neque! Qui!</p>

                </div>

                <div>
                    
                    <h6 class="text-serif">About</h6>
                    <div class="divider"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque animi exercitationem iusto pariatur distinctio accusamus culpa dicta neque! Qui!</p>

                </div>
                <div>
                    
                    <h6 class="text-serif">About</h6>
                    <div class="divider"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque animi exercitationem iusto pariatur distinctio accusamus culpa dicta neque! Qui!</p>

                </div>
                <div>
                    
                    <h6 class="text-serif">About</h6>
                    <div class="divider"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque animi exercitationem iusto pariatur distinctio accusamus culpa dicta neque! Qui!</p>

                </div>
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
            padding: 60px 0;

            .divider {
                background-color: $secondary-bg;
                width: 30px;
                height: 1px;
            }
        }

        .copyright {
            padding: calc($base-space / 3);
            background-color: $secondary-bg;
            text-align: center;
            font-size: 0.5rem;
        }
    }

</style>