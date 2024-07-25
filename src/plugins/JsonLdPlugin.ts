// Import necessary modules from vue
import { App } from 'vue';
// Import VueJsonLd component
import VueJsonLd from '../components/VueJsonLd';

/**
 * Interface for JsonLdPlugin
 * @interface JsonLdPlugin
 */
interface JsonLdPlugin {
    // Method to install the plugin
    install: (app: App) => void;
}

/**
 * JsonLdPlugin object
 * @type {JsonLdPlugin}
 */
const JsonLdPlugin: JsonLdPlugin = {
    /**
     * Install function for the plugin
     * @param {App} app - The application instance
     */
    install(app: App) {
        // Register the VueJsonLd component globally
        app.component('vue-json-ld', VueJsonLd);
    }
}

// Export the JsonLdPlugin object as the default export
export default JsonLdPlugin;