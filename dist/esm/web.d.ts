import { WebPlugin } from '@capacitor/core';
import type { CapacitorPresentationPlugin, OpenLinkOptions } from './definitions';
export declare class CapacitorPresentationWeb extends WebPlugin implements CapacitorPresentationPlugin {
    openLink(options: OpenLinkOptions): Promise<{
        success?: any;
        error?: any;
    }>;
    getDisplays(): Promise<{
        displays: number;
    }>;
}
