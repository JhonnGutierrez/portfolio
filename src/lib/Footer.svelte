<script>
    import { t } from '../i18n.js'
    import ContactMe from './components/ContactMe.svelte'
</script>

<footer class="footer">
    <ContactMe />
    <p class="footer__made-by">{$t("contact.madeBy")}</p>
</footer>

<style lang="scss">
    .footer{
        padding-inline: 12px;
        margin-top: 116px;

        &__made-by{
            text-align: center;
            padding-block: 16px 40px;
        }
    }
</style>