import { Layout } from "../layout/layout.types";

// Types
export type Scheme = 'auto' | 'dark' | 'light';
export type Theme = 'default' | string;

export interface AppConfig {
    layout: Layout;
    scheme: Scheme;
    theme: Theme;
}

export const appConfig: AppConfig = {
    layout: 'classy',
    scheme: 'light',
    theme: 'default'
};
