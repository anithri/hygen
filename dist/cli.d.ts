#!/usr/bin/env node
/// <reference types="yargs" />
export declare const hygenYargs: (argv: string[]) => {
    [x: string]: unknown;
    _: string[];
    $0: string;
};
export declare const availableActions: () => Promise<any>;
