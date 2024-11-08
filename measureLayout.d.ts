declare const measureLayout: (node: HTMLElement) => {
    x: number;
    y: number;
    width: number;
    height: number;
    left: number;
    top: number;
    readonly right: any;
    readonly bottom: any;
};
export default measureLayout;
export declare const getBoundingClientRect: (node: HTMLElement) => {
    x: number;
    y: number;
    width: number;
    height: number;
    left: number;
    top: number;
    readonly right: any;
    readonly bottom: any;
};
