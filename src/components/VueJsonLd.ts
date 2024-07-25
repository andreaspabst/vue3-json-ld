import { h, onMounted, ref, defineComponent, withCtx } from 'vue';
import { VNode, VNodeArrayChildren } from 'vue';

interface JsonLdProps {
    jsonLd: object;
    head: boolean;
}

export default defineComponent({
    props: {
        jsonLd: {
            type: Object as () => JsonLdProps['jsonLd'],
            required: false
        },
        head: {
            type: Boolean as () => JsonLdProps['head'],
            default: false
        }
    },
    setup(props: JsonLdProps, { slots }) {
        const scriptTag = ref<HTMLScriptElement | null>(null);

        onMounted(() => {
            if (!props.jsonLd && !slots.default) {
                return;
            }

            const scriptElement = document.createElement('script');
            scriptElement.type = 'application/ld+json';
            const slotContent = slots.default ? slots.default() : [];
            const slotText = slotContent[0] && Array.isArray(slotContent[0].children) ?
                (slotContent[0].children as VNodeArrayChildren).map((vnode: VNode) => vnode.children).join('') :
                slotContent[0] ? slotContent[0].children as string : '';
            scriptElement.innerHTML = props.head && slotContent.length > 0 ?
                slotText :
                (
                    slotContent.length > 0 && typeof slotContent[0] === 'string' ?
                        slotContent[0] :
                        JSON.stringify(props.jsonLd)
                );

            if (props.head) {
                document.head.appendChild(scriptElement);
            } else {
                scriptTag.value = scriptElement;
            }
        });

        return () => {
            if (!props.jsonLd && !slots.default) {
                return null;
            }

            return props.head ?
                h('div', []) :
                h('div', [
                    h('script', { type: 'application/ld+json' }, slots.default && typeof slots.default()[0] === 'string' ? slots.default()[0] : JSON.stringify(props.jsonLd))
                ])
        }
    }
});