<script>
    export default {
        data() {
            return {
                inputEmail: '',
            }
        },
        emit: [
            'subscribe',
        ],
        methods: {
            sendEmail() {

                if (this.inputEmail == '') return; 
                this.$emit('subscribe',this.inputEmail);
                this.inputEmail = '';

            }
        }
    }
</script>

<template>
    <div class="wrapper d-flex justify-content-between">
       <input @keyup.enter="sendEmail" v-model="inputEmail" type="text" placeholder="Your Email" required>
       <div @click="sendEmail" class="text-uppercase">Subscribe</div>
    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../../styles/partials/variables.scss' as *;
    @use '../../styles/partials/mixins.scss' as *;

    .wrapper {
        border-bottom: 1px solid $highlight-bg;
        font-size: 0.8rem;

        input {
            border: none;
            background: none;
            color: inherit;
        }
    }

</style>