// JsonLdPlugin.js
import VueJsonLd from '../components/VueJsonLd.ts';

const JsonLdPlugin = {
    install(app) {
        app.component('vue-json-ld', VueJsonLd);
    }
}

export default JsonLdPlugin;