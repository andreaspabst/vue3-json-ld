// Import necessary modules from vue
import type { App, Component } from 'vue';
// Import VueJsonLd component
import VueJsonLdComponent from './components/VueJsonLd';

/**
 * Interface for VueJsonLdPlugin
 * @interface VueJsonLdPlugin
 */
interface VueJsonLdPlugin {
    // Method to install the plugin
    install: (app: App) => void;
}

/**
 * VueJsonLdPlugin object
 * @type {VueJsonLdPlugin}
 */
const VueJsonLd: VueJsonLdPlugin = {
    /**
     * Install function for the plugin
     * @param {App} app - The application instance
     */
    install(app: App) {
        // Register the VueJsonLd component globally
        app.component('vue-json-ld', VueJsonLdComponent as Component);
    }
}

// Export the VueJsonLdPlugin object as the default export
export default VueJsonLd;