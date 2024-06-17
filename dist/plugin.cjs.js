'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorPresentation = core.registerPlugin('CapacitorPresentation', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorPresentationWeb()),
});

class CapacitorPresentationWeb extends core.WebPlugin {
    async openLink(options) {
        if (!options.url)
            return {
                error: 'URL is required',
            };
        try {
            const presentationRequest = new window.PresentationRequest([
                options.url,
            ]);
            const start = await presentationRequest.start();
            this.notifyListeners('onSuccessLoadUrl', start);
            return {
                success: start,
            };
        }
        catch (error) {
            console.log(error);
            this.notifyListeners('onFailLoadUrl', error);
            return {
                error: error,
            };
        }
    }
    async getDisplays() {
        const presentationRequest = new window.PresentationRequest(['']);
        try {
            await presentationRequest.getAvailability();
            return {
                displays: 1,
            };
        }
        catch (error) {
            return {
                displays: 0,
            };
        }
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorPresentationWeb: CapacitorPresentationWeb
});

exports.CapacitorPresentation = CapacitorPresentation;
//# sourceMappingURL=plugin.cjs.js.map
