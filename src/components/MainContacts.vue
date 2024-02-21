<script>
    export default {
        data() {
            return {
                activeIndex: 0,
                locations: [
                    'New York',
                    'Norway',
                    'Australia',
                ],
                inputName: '',
                inputEmail: '',
                inputMessage: '',
            }
        },
        methods: {
            handleClick() {
                console.log('you want to read more');
            },
            printMessage() {
                // if the user did not enter an email or a message do nothing
                while(this.inputEmail == '' || this.inputMessage == '') return;

                console.log(
`received message:
'${this.inputMessage}'
from: ${this.inputName};
email: ${this.inputEmail}.`
                );

                this.inputName = '';
                this.inputEmail = '';
                this.inputMessage = '';

            }
        },
    }
</script>

<template>
    <section class="section-padding">
        <div class="container-l">
            <div class="container-s">

                <div class="d-flex">
                    <div class="world-map col-6">
                        <img src="../assets/img/h1-contact-rev-01.png" alt="the world map">

                        <div v-for="(location,i) in locations" :key="i" :id="'location-'+i" class="info-btn">
                            <img 
                            @click="activeIndex = i"
                            class="info-dot" 
                            src="../assets/img/h1-contact-rev-02.png" 
                            alt="info dot">
                            <div :class="i == activeIndex ? '':'d-none'" class="location">
                                
                                <img class="location-slot" src="../assets/img/h1-contact-rev-03.png" alt="location info container">
                                <div class="location-info">
                                    <h6 class="text-serif">{{ location }} Coaching</h6>
                                    <app-read-more link="#" @read-more="handleClick"/>
                                </div>                            

                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 ms-2">
                        
                        <section-title 
                        title="Contact us"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        titleSize="h2"
                        :hasFinishDot="true"
                        :hasDivider="true"
                        :isTextCentered="false"
                        />

                        <div class="form d-flex flex-wrap justify-content-between gap-3">
                            <input v-model="inputName" class="text-info flex-grow-1" name="name-input" placeholder="Your name" type="text">
                            <input v-model="inputEmail" class="text-info flex-grow-1" name="mail-input" placeholder="Your email" type="email" required>
                            <input v-model="inputMessage" class="text-info col-12" id="message-input" name="message-input" placeholder="Write a message..." type="text" required>
                        </div>

                        <app-button @button-clicked="printMessage" buttonType="secondary" text="send" class="mt-3"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .world-map {
        width: 528px;
        position: relative;
        .info-btn {
            position: absolute;
            
            img {
                display: block;    
    
                &.location-slot {
                    width: calc($base-space * 10);
                }
            }

            .info-dot:hover {
                cursor: pointer;
            }
    
            .location-info {
                position: absolute;
                top: calc($base-space * 2);
                left: calc($base-space * 0.75);
            }
    
            &#location-0 {
                top: 90px;
                left: 120px;
            }

            &#location-1 {
                top: 60px;
                left: 265px;
            }

            &#location-2 {
                top: 205px;
                left: 435px;

                .location {
                    position: absolute;
                    right: 0;
                    width: calc($base-space * 10);
                    .location-info {
                        position: absolute;
                        top: calc($base-space * 0.7);
                    }
                }
            }
        }
    }

    .form {
        input {
            border: none;
            border-bottom: 1px solid $form-border;
            background: none;
            font-family: inherit;

            &#message-input {
                height: 40px;
            }
        }
    }


</style>