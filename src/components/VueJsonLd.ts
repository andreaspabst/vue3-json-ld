import { h, onMounted, ref, defineComponent } from 'vue';

interface JsonLdProps {
    jsonLd: object;
    head: boolean;
}

export default defineComponent({
    props: {
        jsonLd: {
            type: Object as () => JsonLdProps['jsonLd'],
            required: true
        },
        head: {
            type: Boolean as () => JsonLdProps['head'],
            default: false
        }
    },
    setup(props: JsonLdProps) {
        const scriptTag = ref<HTMLScriptElement | null>(null);

        onMounted(() => {
            const scriptElement = document.createElement('script');
            scriptElement.type = 'application/ld+json';
            scriptElement.innerHTML = JSON.stringify(props.jsonLd);

            if (props.head) {
                document.head.appendChild(scriptElement);
            } else {
                scriptTag.value = scriptElement;
            }
        });



        return () => props.head ?
            h('div', []) :
            h('div', [
                h('script', { type: 'application/ld+json' }, JSON.stringify(props.jsonLd))
            ])
    }
});