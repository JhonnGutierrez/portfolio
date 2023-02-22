<script>
    import { t } from '../../i18n'
    import TypescriptLogo from '../icons/TypescriptLogo.svelte'
    import SassLogo from '../icons/SassLogo.svelte'
    import ReactLogo from '../icons/ReactLogo.svelte'
    import SvelteLogo from '../icons/SvelteLogo.svelte'
</script>

<div class="hero">
    <div class="hero__title">
        <h1 class="hero__title__h1">
            <p class="hero__title__h1__hey">{$t("hero.greetings")}</p>
            <p class="hero__title__h1__name">Jhonn Gutierrez</p>
        </h1>
        <p class="hero__title__p">
            {`<${$t("hero.position")} />`}
        </p>
    </div>
    <p class="hero__introducing">
        {$t("hero.description")}
    </p>


    <div class="hero__technologies">
        <div class="hero__technologies__tech">
            <div class="hero__technologies__tech__icon">
                <SvelteLogo />
            </div>
            <p class="hero__technologies__tech__p">
                Svelte
            </p>
        </div>
            
        <div class="hero__technologies__tech">
            <div class="hero__technologies__tech__icon">
                <SassLogo />
            </div>
            <p class="hero__technologies__tech__p">
                Sass
            </p>
        </div>
        <div class="hero__technologies__tech">
            <div class="hero__technologies__tech__icon">
                <ReactLogo />    
            </div>
            <p class="hero__technologies__tech__p">
                React
            </p>
        </div>
        <div class="hero__technologies__tech">
            <div class="hero__technologies__tech__icon">
                <TypescriptLogo />
            </div>
            <p class="hero__technologies__tech__p">
                Typescript
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .hero{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        
        &__title{
            
            margin-block: 116px 60px;

            &__h1{
                font-size: 4rem;

                &__hey{
                    margin-bottom: 8px;
                }

                &__name{
                    background-color: $primary-color;
                    color: $title-color;
                    padding: 8px 20px;
                    border-radius: 16px;
                    text-shadow: $text-shadow;
                    font-weight: 700;
                }
            }

            &__p{
                margin-top: 8px;
                font-weight: 700;
                font-size: 2.4rem;
            }
        }

        &__introducing{
            padding-inline: 16px;
        }

        &__technologies{
            margin-block: 116px;
            background-color: $block-color;
            width: 100%;
            padding: 20px 40px;
            border-radius: 16px;
            border-bottom: 2px solid $border-color;
            box-shadow: $box-shadow;
            display: flex;
            justify-content: space-between;

            &__tech{
                display: flex;
                align-items: center;
                font-size: 2rem;
                font-weight: 700;

                &__p{
                    visibility: hidden;
                    width: 0;
                    opacity: 0;
                    overflow: hidden;
                }

                &__icon{
                    height: 44px;
                    font-size: 4.4rem;
                    fill: $text-color;
                    stroke: $text-color;
                }
            }
        }

        @media (min-width: 896px) {
            &__title{
                &__h1{
                    font-size: 6.8rem;
                }

                &__p{
                    margin-top: 32px;
                    font-size: 3.6rem;
                }
            }

            &__introducing{
                width: 594px;
                font-size: 2rem;
            }

            &__technologies{
                padding-inline: 14%;

                &__tech{
                    &__p{
                        margin-left: 12px;
                        visibility: visible;
                        width: auto;
                        opacity: 1;
                        // overflow: hidden;
                    }
                }
            }
        }

        // @media (min-width: 768px) and (max-width: 1024px) {
        //     &__technologies{
        //         &__tech{
        //             flex-direction: column;
        //             justify-content: center;

        //             &__p{
        //                 margin-left: 0;
        //                 margin-top: 8px;
        //             }
        //         }
        //     }
        // }
    }

    :global(body.dark){
        & .hero{
            &__title__h1__name{
                background-color: $dark-primary-color;
            }

            &__technologies{
                background-color: $dark-block-color;
                border-bottom: 2px solid $dark-border-color;

                &__tech{
                    &__icon{
                        fill: $dark-text-color;
                        stroke: $dark-text-color;
                    }
                }
            }
        }
    }
</style>