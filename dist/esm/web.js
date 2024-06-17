import { WebPlugin } from '@capacitor/core';
export class CapacitorPresentationWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map