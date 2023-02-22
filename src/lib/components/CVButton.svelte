<script>
    import DownloadIcon from "../icons/DownloadIcon.svelte";
    import cv from '../../assets/cv.pdf'
</script>

<div>
    <a href={cv} target="_blank" class="cv">
        <slot name="text" class="cv__span">CV</slot>
        <DownloadIcon />
    </a>
</div>

<style lang="scss">
    .cv{
        background-color: $primary-color;
        display: block;
        height: 40px;
        font-weight: 700;
        color: $title-color;
        text-decoration: none;
        display: flex;
        gap: 10px;
        padding-inline: 16px;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
        transition: background-color .2s;
        z-index: -1;
        margin-inline: 12px;

        &:hover {
            background-color: $dark-primary-color;
        }

        &__span{
            text-shadow: $text-shadow;
        }
    }

    :global(body.dark){
        & .cv{
            background-color: $dark-primary-color;

            &:hover {
            background-color: $primary-color;
        }
        }
    }
</style>