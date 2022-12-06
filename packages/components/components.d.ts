declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        vpButton: typeof import('vapour-ui').Button
        vpInput: typeof import('vapour-ui').Input
    }
}
export { }
