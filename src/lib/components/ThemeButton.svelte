<script>
    import SunIcon from "../icons/SunIcon.svelte";
    import MoonIcon from "../icons/MoonIcon.svelte";
</script>

<button class="theme" on:click={
    () => {
        document.body.classList.toggle('dark')
    }
}>
    <div class="theme__circle">
        <div class="theme__circle__icon" >
            <MoonIcon />
        </div>
        <div class="theme__circle__icon" >
            <SunIcon />
        </div>
    </div>
</button>

<style lang="scss">
    .theme{
        height: 20px;
        width: 40px;
        border: none;
        border-radius: 10px;
        background-color: $background-color;
        border-bottom: 1px solid $border-color;
        box-shadow: inset $box-shadow;
        cursor: pointer;

        &:hover .theme__circle{
            background-color: $dark-primary-color;
        }

        &__circle{
            height: 20px;
            width: 20px;
            background-color: $primary-color;
            border-radius: 10px;
            position: relative;
            color: $title-color;
            transition: transform .2s, background-color .2s;
            
            &__icon{
                position: absolute;
                top: 0;
                left: 0;

                &:first-child{
                    opacity: 0;
                }
                
                &:nth-child(2){
                    opacity: 1;
                }
            }
        }
    }
    
    :global(body.dark){
        & .theme{
            background-color: $dark-background-color;
            border-bottom: 1px solid $dark-border-color;
            box-shadow: inset $box-shadow;

            &:hover .theme__circle{
                background-color: $primary-color;
            }

            &__circle{    
            transform: translateX(20px);
            background-color: $dark-primary-color;
            
            &__icon{
                &:first-child{
                    opacity: 1;
                    top: 2px;
                    left: 2px;
                }

                &:nth-child(2){
                    opacity: 0;
                }
            }
            }
        }
    }
</style>