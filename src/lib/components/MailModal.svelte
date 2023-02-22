<script>
    import { t } from '../../i18n.js'
</script>

<div class="modal">
    <p class="modal__message">{$t("modal")}</p>
</div>

<style lang="scss">
    .modal{
        background-color: $block-color;
        border-bottom: 1px solid $border-color;
        box-shadow: $box-shadow;
        padding: 20px;
        width: 200px;
        border-radius: 8px;
        position: relative;
        z-index: 10;

        &::before{
            content: '';
            position: absolute;
            top: -10px;
            left: 10px;
            background-color: inherit;
            // background-color: #f00;
            width: 20px;
            height: 20px;
            transform: rotateZ(45deg);
            border-top: 1px solid $border-color;
            border-left: 1px solid $border-color;
        }
    }

    :global(body.dark) {
        & .modal{
            background-color: $dark-block-color;
            border-bottom: 1px solid $dark-border-color;

            &::before{
                border-top: 1px solid $dark-border-color;
                border-left: 1px solid $dark-border-color;
            }
        }
    }
</style>