<script>
    import { t } from '../../i18n.js'
    import { fade } from 'svelte/transition';
    import CVButton from './CVButton.svelte'
    import MailIcon from '../icons/MailIcon.svelte'
    import GitHubIcon from '../icons/GitHubIcon.svelte'
    import LinkedInIcon from '../icons/LinkedInIcon.svelte'
    import MailModal from './MailModal.svelte'

    let mail = false

    function mailButton () {
        mail = true
        navigator.clipboard.writeText('jhonngutierrez.contact@gmail.com')
        setTimeout(() => {
            mail = false
        }, 3000);
    }
</script>

<div class="contact">
    <div class="contact__buttons">
        <h2 class="contact__buttons__title">{$t("contact.title")}</h2>
        <ul class="contact__buttons__list">
            <li class="contact__buttons__list__li">
                <button on:click={mailButton} class="contact__buttons__list__li__a">
                    <MailIcon /> <span class="contact__buttons__list__li__a__span">
                        Mail
                    </span>
                </button>
                {#if mail}
                    <div class="contact__buttons__list__li__modal"  transition:fade>
                        <MailModal />
                    </div>
                {/if}
            </li>
            <li class="contact__buttons__list__li">
                <a href="https://github.com/JhonnGutierrez" target="_blank" rel="noreferrer" class="contact__buttons__list__li__a">
                    <GitHubIcon /> <span class="contact__buttons__list__li__a__span">
                        GitHub
                    </span>
                </a>
            </li>
            <li class="contact__buttons__list__li">
                <a href="https://www.linkedin.com/in/jhonn-gutierrez-643592238/" target="_blank" rel="noreferrer" class="contact__buttons__list__li__a">
                    <LinkedInIcon /> <span class="contact__buttons__list__li__a__span">
                        LinkedIn
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <div class="contact__button">
        <CVButton >
            <span slot="text" class="contact__cv">{$t("contact.download")}</span>
        </CVButton>
    </div>
</div>

<style lang="scss">
    .contact{
        border-radius: 20px;
        padding: 12px;
        box-shadow: $box-shadow;
        background-color: $block-color;
        border-bottom: 2px solid $border-color;
        
        &__buttons{
            padding-bottom: 16px;
            &__title{
                text-align: center;
                font-size: 2.4rem;
            }

            &__list{
                display: flex;
                gap: 28px;
                justify-content: center;
                // background-color: #f00;
                
                
                
                &__li{
                    padding-left: 32px;
                    list-style: none;
                    position: relative;
                    padding-block: 12px;

                    &__modal{
                        position: absolute;
                        top: 76px;
                        left: 28px;
                    }

                    &__a{
                        font-size: 2rem;
                        transition: color .2s;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        background-color: transparent;
                        border: none;
                        cursor: pointer;

                        &__span{
                            font-size: 1.6rem;
                            margin-top: 4px;
                        }

                        &:hover{
                            color: $primary-color;
                        }
                    }
                }
            }
        }

        &__cv{
            font-size: 2rem;
        }

        @media (min-width: 896px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 40px 60px;
            &__buttons{
                padding-bottom: 0;

                &__title{
                    text-align: left;
                }

                &__list{
                    justify-content: flex-start;
                    &__li{
                        padding-inline: 0;

                        &__a{
                            flex-direction: row;
                            align-items: center;
                            
                            &__span{
                                margin-top: 0;
                                &::before{
                                    content: '~';
                                    margin-inline: 4px;
                                }
                            }
                        }
                    }
                }

                
            }

            &__button{
                display: grid;
                align-items: center;
            }
        }
    }

    :global(body.dark) {
        & .contact{
            background-color: $dark-block-color;
            border-bottom: 2px solid $dark-border-color;

            &__buttons__list__li__a{
                color: $dark-text-color;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
</style>