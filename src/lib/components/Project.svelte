<div class="project">
    <div class="project__info">
        <slot name="title" >Error. No title</slot>
        <slot name="description">Error. No description</slot>
    </div>
    <div class="project__img-container">
        <slot name="image">Error. No image</slot>
    </div>
    <div class="project__links">
        <slot name="page">Error. No link</slot>
        <slot name="github">Error. No link</slot>
    </div>
</div>

<style lang="scss">
    .project{
        width: 100%;
        background-color: $block-color;
        box-shadow: $box-shadow;
        padding: 20px 16px;
        border-radius: 20px;
        margin-top: 28px;
        border-bottom: 2px solid $border-color;

        &__info{
            padding-left: 16px;
            padding-bottom: 20px;
        }

        &__img-container{
            border-radius: 12px;
            padding: 44px 24px;
            width: 100%;
            background-color: $background-color;
            box-shadow: inset $box-shadow;
        }

        &__links{
            display: flex;
            justify-content: flex-end;
            padding: 16px 16px 0 0;
            gap: 16px;
        }
        
        @media (min-width: 896px) {
            &__info{
                padding-left: 32px;
            }
        }
    }

    :global(body.dark){
        .project{
            border-bottom: 2px solid $dark-border-color;
            background-color: $dark-block-color;

            &__img-container{
                background-color: $dark-background-color;
            }
        }
    }
</style>