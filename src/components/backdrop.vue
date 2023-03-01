<template>
    <div class="my-backdrop">
    </div>
</template>

<style scoped lang="scss">
.my-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(5vh);
    background-color: $--color-primary-light-9;
    z-index: -9999;

    &>.container {
        position: relative;
        width: 100%;
        height: 100%;

        &>div {
            position: absolute;
            border-radius: 100%;
            animation-name: bgAnimate;
            animation-direction: 3s;
            animation-iteration-count: infinite;

            @keyframes bgAnimate {
                0% {
                    transform: scale(1) translate(0);
                }

                25% {
                    transform: scale(1.25) translate(1vh 1vh 1vh);
                }

                50% {
                    transform: scale(1.5) translate(2vh 2vh 2vh);
                }

                75% {
                    transform: scale(1.25) translate(1vh 1vh 1vh);
                }

                100% {
                    transform: scale(1) translate(0);
                }
            }

            &::before,
            &::after {
                border-radius: 100%;
                position: absolute;
                content: "";
                animation-name: bgAnimate;
                animation-direction: 3s;
                animation-iteration-count: infinite;
            }

            &:nth-child(1) {
                width: 20vh;
                height: 20vh;
                background-color: $--color-primary;
                top: 15vh;
                left: 15vh;

                &::before {
                    width: 10vh;
                    height: 10vh;
                    margin-left: 30vh;
                    background-color: $--color-secondary;
                }

                &::after {
                    width: 15vh;
                    height: 15vh;
                    margin-left: 45vh;
                    margin-top: 15vh;
                    background-color: mix($--color-secondary, $--color-primary, 60%);
                }
            }

            &:nth-child(2) {
                width: 20vh;
                height: 20vh;
                background-color: $--color-secondary;
                top: 10vh;
                right: 40vh;

                &::before {
                    width: 10vh;
                    height: 10vh;
                    margin-left: -45vh;
                    margin-top: 20vh;
                    background-color: $--color-secondary;
                }

                &::after {
                    width: 15vh;
                    height: 15vh;
                    margin-left: -30vh;
                    margin-top: 15vh;
                    background-color: mix($--color-secondary, $--color-primary, 30%);
                }
            }

            &:nth-child(3) {
                width: 30vh;
                height: 30vh;
                background-color: $--color-primary;
                bottom: 16vh;
                left: 5vh;

                &::before {
                    width: 40vh;
                    height: 40vh;
                    margin-left: 30vh;
                    background-color: $--color-secondary;
                }

                &::after {
                    width: 15vh;
                    height: 15vh;
                    margin-left: 45vh;
                    margin-top: -22vh;
                    background-color: mix($--color-secondary, $--color-primary, 20%);
                }
            }

            &:nth-child(4) {
                width: 25vh;
                height: 25vh;
                background-color: $--color-secondary;
                bottom: 20vh;
                right: 8vh;

                &::before {
                    width: 40vh;
                    height: 40vh;
                    margin-left: -45vh;
                    background-color: $--color-primary;

                }

                &::after {
                    width: 15vh;
                    height: 15vh;
                    margin-left: -64vh;
                    margin-top: -15vh;
                    background-color: mix($--color-secondary, $--color-primary, 80%);
                }
            }
        }
    }
}
</style>