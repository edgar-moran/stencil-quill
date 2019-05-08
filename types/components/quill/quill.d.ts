import '../../stencil.core';
import { ComponentDidLoad, ComponentDidUnload, EventEmitter } from '../../stencil.core';
export declare class QuillComponent implements ComponentDidLoad, ComponentDidUnload {
    onInitialised: EventEmitter<any>;
    onContentChanged: EventEmitter<{
        editor: any;
        content: any;
        text: string;
        html: string;
        delta: any;
        oldDelta: any;
        source: string;
    }>;
    onSelectionChanged: EventEmitter<{
        editor: any;
        range: any;
        oldRange: any;
        source: string;
    }>;
    onFocus: EventEmitter<{
        editor: any;
        source: string;
    }>;
    onBlur: EventEmitter<{
        editor: any;
        source: string;
    }>;
    wrapperElement: HTMLElement;
    format: 'html' | 'text' | 'json';
    bounds: HTMLElement | string;
    content: string;
    debug: string;
    formats: string[];
    modules: string;
    placeholder: string;
    readOnly: boolean;
    scrollingContainer: HTMLElement | string;
    strict: boolean;
    styles: string;
    theme: string;
    customToolbarPosition: 'top' | 'bottom';
    preserveWhitespace: boolean;
    quillEditor: any;
    editorElement: HTMLDivElement | HTMLPreElement;
    private defaultModules;
    selectionChangeEvent: any;
    textChangeEvent: any;
    setEditorContent(value: any): void;
    getEditorContent(): any;
    componentDidLoad(): void;
    componentDidUnload(): void;
    updateContent(newValue: any): void;
    updateReadOnly(newValue: boolean, oldValue: boolean): void;
    updatePlaceholder(newValue: string, oldValue: string): void;
    updateStyle(newValue: string, oldValue: string): void;
    render(): JSX.Element[];
}
