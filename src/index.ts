import { App } from 'vue';
import VueJsonLdComponent from './components/VueJsonLd';

const VueJsonLd = {
    install(app: App) {
        app.component('vue-json-ld', VueJsonLdComponent);
    }
}

export default VueJsonLd;