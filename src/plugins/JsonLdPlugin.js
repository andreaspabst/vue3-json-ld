// Import the VueJsonLd component
import VueJsonLd from '../components/VueJsonLd.ts';

/**
 * JsonLdPlugin is a Vue plugin that registers the VueJsonLd component globally.
 * @type {Object}
 */
const JsonLdPlugin = {
    /**
     * The install function is called by Vue.use() method.
     * It registers the VueJsonLd component globally.
     * @param {Object} app - The application instance
     */
    install(app) {
        // Register the VueJsonLd component globally
        app.component('vue-json-ld', VueJsonLd);
    }
}

// Export the JsonLdPlugin object as the default export
export default JsonLdPlugin;