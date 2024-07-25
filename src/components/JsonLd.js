import { h, onMounted, ref } from 'vue';

export default {
    props: {
        jsonLd: {
            type: Object,
            required: true
        },
        head: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const scriptTag = ref(null);

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

        return () => props.head ? null : h('div', [scriptTag.value]);
    }
};