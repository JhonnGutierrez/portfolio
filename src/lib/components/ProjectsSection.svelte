<script>
    import { derived } from 'svelte/store'
    import Project from './Project.svelte'
    import { t, locale } from '../../i18n'

    import GitHubIcon from '../icons/GitHubIcon.svelte'
    import LinkIcon from '../icons/LinkIcon.svelte'
</script>

<div class="projects">
    <h2 class="projects__title">{$t("projects.title")}</h2>
    <div class="projects__list">
        {#each $t("projects") as p, i}
            <Project key={i}>
                <h3 slot="title" class="projects__list__title">{p.title}</h3>
                <p slot="description" class="projects__list__description">{p.description}</p>
                <img slot="image" src={p.image} alt={p.title} class="projects__list__img">
                <a slot="page" href={p.links[0]} rel="noreferrer" target="_blank" class="projects__list__a"><GitHubIcon /></a>
                <a slot="github" href={p.links[1]} rel="noreferrer" target="_blank" class="projects__list__a"><LinkIcon /></a>
            </Project>
        {/each}
    </div>
</div>

<style lang="scss">
    .projects{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        &__title{
            font-size: 4rem;
            color: $title-color;
            background-color: $primary-color;
            padding: 8px 20px;
            border-radius: 16px;
            text-shadow: $text-shadow;
            font-weight: 700;
            text-align: center;
        }

        &__list{
            width: 100%;

            &__title{
                font-size: 2.4rem;
            }

            &__img{
                width: 100%;
                border-radius: 8px;
            }

            &__a{
                // padding: 16px;
                width: 50px;
                aspect-ratio: 1/1;
                display: grid;
                place-items: center;
                border-radius: 50%;
                border: 1px solid $border-color;
                font-size: 2rem;
                transition: background-color .2s, color .2s;
                
                &:hover {
                    filter: drop-shadow($text-shadow);
                    background-color: $primary-color;
                    color: $title-color;
                }
            }
        }

        @media (min-width: 896px) {
            &__title{
                font-size: 6.8rem;
                margin-top: 40px;
            }

            &__list{
                margin-top: 40px;
                display: grid;
                gap: 60px;
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    :global(body.dark){
        & .projects {
            &__title{
                background-color: $dark-primary-color;
            }

            &__list__a{
                border: 1px solid $dark-border-color;
                &:hover {
                    // filter: drop-shadow($text-shadow);
                    background-color: $dark-primary-color;
                    // color: $title-color;
                }
            }
        }
    }
</style>