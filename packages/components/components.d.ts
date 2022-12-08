declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        'vp-button': typeof import('vapour-ui').Button
        'vp-input': typeof import('vapour-ui').Input
    }
}
export { }
