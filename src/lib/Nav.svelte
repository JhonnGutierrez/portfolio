<script>
    import { fade } from 'svelte/transition';

    import MailIcon from "./icons/MailIcon.svelte";
    import GitHubIcon from "./icons/GitHubIcon.svelte";
    import LinkedInIcon from "./icons/LinkedInIcon.svelte";

    import CVButton from "./components/CVButton.svelte";
    import LangButton from "./components/LangButton.svelte";
    import ThemeButton from "./components/ThemeButton.svelte";
    import MailModal from "./components/MailModal.svelte";

    let mail = false

    function mailButton () {
        mail = true
        navigator.clipboard.writeText('jhonngutierrez.contact@gmail.com')
        setTimeout(() => {
            mail = false
        }, 3000);
    }
</script>

<nav class="nav">
    <div class="nav__container">
        <div class="nav__container__left">
            <ul class="nav__container__left__list">
                <li class="nav__container__left__list__li">
                    <button on:click={mailButton} class="nav__container__left__list__li__a">
                        <MailIcon /> <span class="nav__container__left__list__li__a__span">
                            Mail
                        </span>
                    </button>
                    {#if mail}
                        <div class="nav__container__left__list__li__modal"  transition:fade>
                            <MailModal />
                        </div>
                    {/if}
                </li>
                <li class="nav__container__left__list__li">
                    <a href="https://github.com/JhonnGutierrez" target="_blank" rel="noreferrer" class="nav__container__left__list__li__a">
                        <GitHubIcon /> <span class="nav__container__left__list__li__a__span">
                            GitHub
                        </span>
                    </a>
                </li>
                <li class="nav__container__left__list__li">
                    <a href="https://www.linkedin.com/in/jhonn-gutierrez-643592238/" target="_blank" rel="noreferrer" class="nav__container__left__list__li__a">
                        <LinkedInIcon /> <span class="nav__container__left__list__li__a__span">
                            LinkedIn
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav__container__center">
            <CVButton />
        </div>
        <div class="nav__container__right">
            <LangButton />
            <ThemeButton />
            
        </div>
    </div>
</nav>

<style lang="scss">
    .nav{
        width: 100%;
        position: fixed;
        padding: 32px 12px 12px;

        &__container{
            background-color: $block-color;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            justify-content: space-between;
            align-items: center;
            padding-inline: 32px;
            height: 60px;
            border-radius: 30px;
            box-shadow: $box-shadow;
            border-bottom: 2px solid $border-color;

            &__left{
                &__list{
                    display: flex;
                    gap: 24px;

                    &__li{
                        list-style: none;
                        position: relative;

                        &__modal{
                            position: absolute;
                            top: 64px;
                            left: -8px;
                        }

                        &__a{
                            font-size: 2rem;
                            transition: color .2s;
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            background-color: transparent;
                            border: none;
                            cursor: pointer;

                            // gap: 8px;
                            
                            &__span{
                                font-size: 1.6rem;
                                visibility: hidden;
                                opacity: 0;
                                width: 0;

                                &::before{
                                    content: '~';
                                    margin-inline: 8px;
                                }
                            }

                            &:hover{
                                color: $primary-color;
                            }
                        }
                    }
                }
            }

            &__center{
                justify-self: center;
            }

            &__right{
                display: flex;
                justify-content: flex-end;
                gap: 24px;
            }
        }

        @media (min-width: 896px) {
            padding: 16px 12px;
            width: calc(100vw - (5vw * 2));

            &__container{
                padding-inline: 64px;
                &__left__list{
                    gap: 48px;

                    &__li__a__span{
                        visibility: visible;
                        opacity: 1;
                        width: auto;
                    }
                }

                &__center{
                    justify-self: flex-end;
                    margin-right: 10px;
                }

                &__right{
                    gap: 40px;
                }
            }
        }

        @media (min-width: 1024px) {
            width: calc(100vw - (12vw * 2));
            padding: 16px 12px;

            &__container{
                // &__center{
                //     justify-self: flex-end;
                // }

                // &__right{
                //     gap: 48px;
                // }
            }
        }
    }


    :global(body.dark){
        & .nav__container{
            background-color: $dark-block-color;
            border-bottom: 2px solid $dark-border-color;

            &__left__list__li__a{
                color: $dark-text-color;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
</style>