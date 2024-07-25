import { h, onMounted, ref, defineComponent, withCtx } from 'vue';
import { VNode, VNodeArrayChildren } from 'vue';

// Define the properties for the component
interface JsonLdProps {
    jsonLd: object; // JSON-LD data
    head: boolean; // Flag to determine if the script tag should be added to the head
}

export default defineComponent({
    // Define the component's properties
    props: {
        jsonLd: {
            type: Object as () => JsonLdProps['jsonLd'], // JSON-LD data
            required: false // Not required as it can be provided through the slot
        },
        head: {
            type: Boolean as () => JsonLdProps['head'], // Flag to determine if the script tag should be added to the head
            default: false // Default value is false
        }
    },
    setup(props: JsonLdProps, { slots }) {
        // Create a ref to hold the script tag
        const scriptTag = ref<HTMLScriptElement | null>(null);

        // When the component is mounted
        onMounted(() => {
            // If there's no JSON-LD data and no default slot, return
            if (!props.jsonLd && !slots.default) {
                return;
            }

            // Create a script element
            const scriptElement = document.createElement('script');
            scriptElement.type = 'application/ld+json'; // Set the type to 'application/ld+json'
            const slotContent = slots.default ? slots.default() : []; // Get the slot content or an empty array if there's no default slot

            // Get the text from the slot content or an empty string if there's no slot content
            const slotText = slotContent[0] && Array.isArray(slotContent[0].children) ?
                (slotContent[0].children as VNodeArrayChildren).map((vnode: VNode) => vnode.children).join('') :
                slotContent[0] ? slotContent[0].children as string : '';

            // Set the innerHTML of the script element
            scriptElement.innerHTML = props.head && slotContent.length > 0 ?
                slotText : // If head is true and there's slot content, use the slot text
                (
                    slotContent.length > 0 && typeof slotContent[0] === 'string' ?
                        slotContent[0] : // If there's slot content and the first item is a string, use the first item
                        JSON.stringify(props.jsonLd) // Otherwise, use the JSON-LD data
                );

            // If head is true
            if (props.head) {
                // If the innerHTML is not 'undefined'
                if (scriptElement.innerHTML !== 'undefined') {
                    // Append the script element to the head
                    document.head.appendChild(scriptElement);
                }
            } else {
                // Otherwise, set the value of the script tag ref to the script element
                scriptTag.value = scriptElement;
            }
        });

        // Define the render function
        return () => {

            // If there's no JSON-LD data and no default slot, return null
            if (!props.jsonLd && !slots.default) {
                return null;
            }

            // If head is true, return an empty div
            return props.head ?
                h('div', []) :
                // Otherwise, return a div with a script tag
                h('div', [
                    h('script', { type: 'application/ld+json' }, !props.head && slots.default ? slots.default()[0].children : (slots.default && typeof slots.default()[0] === 'string' ? slots.default()[0] : JSON.stringify(props.jsonLd)))
                ])
        }
    }
});