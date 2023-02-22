<script>
    import { locale, locales } from "../../i18n.js";
    import GlobalIcon from "../icons/GlobalIcon.svelte";

    function changeLang () {
        const newLocale = ($locale === 'en') ? 'es' : 'en'
        locale.set(newLocale)
    }
</script>

<button on:click={changeLang} class="lang">
    <GlobalIcon />
    <p>{$locale}</p>
</button>

<style lang="scss">
    .lang{
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 1.6rem;
        text-decoration: none;
        transition: color .2s;
        color: $text-color;
        cursor: pointer;
        
        &:hover {
            color: $primary-color;
        }
    }

    :global(body.dark){
        .lang{
            color: $dark-text-color;
            &:hover {
                color: $primary-color;
            }
        }
    }
</style>