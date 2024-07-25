// JsonLdPlugin.js
import VueJsonLd from '../components/JsonLd.js';

const JsonLdPlugin = {
    install(app) {
        app.component('vue-json-ld', VueJsonLd);
    }
}

export default JsonLdPlugin;