"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quill_component_core_js_1 = require("../quill-component.core.js");
var QuillComponent = function () { function t() { this.format = "html", this.debug = "warn", this.placeholder = "Insert text here ...", this.strict = !0, this.styles = "{}", this.customToolbarPosition = "top", this.preserveWhitespace = !1, this.defaultModules = { toolbar: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{ header: 1 }, { header: 2 }], [{ list: "ordered" }, { list: "bullet" }], [{ script: "sub" }, { script: "super" }], [{ indent: "-1" }, { indent: "+1" }], [{ direction: "rtl" }], [{ size: ["small", !1, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, !1] }], [{ color: [].slice() }, { background: [].slice() }], [{ font: [].slice() }], [{ align: [].slice() }], ["clean"], ["link", "image", "video"]] }; } return t.prototype.setEditorContent = function (t) { if ("html" === this.format) {
    var e = this.quillEditor.clipboard.convert(t);
    this.quillEditor.setContents(e, "api");
}
else if ("text" === this.format)
    this.quillEditor.setText(t);
else if ("json" === this.format)
    try {
        this.quillEditor.setContents(JSON.parse(t), "api");
    }
    catch (e) {
        this.quillEditor.setText(t, "api");
    }
else
    this.quillEditor.setText(t, "api"); }, t.prototype.getEditorContent = function () { var t = this.quillEditor.getText(), e = this.quillEditor.getContents(), o = this.editorElement.children[0].innerHTML; if ("<p><br></p>" !== o && "<div><br><div>" !== o || (o = ""), "html" === this.format)
    return o; if ("text" === this.format)
    this.quillEditor.getText();
else {
    if ("json" !== this.format)
        return t;
    try {
        return JSON.stringify(e);
    }
    catch (e) {
        return t;
    }
} }, t.prototype.componentDidLoad = function () { var t = this, e = this.modules ? JSON.parse(this.modules) : this.defaultModules, o = this.wrapperElement.querySelector('[slot="quill-toolbar"]'); if (o && (e.toolbar = o), this.quillEditor = new Quill(this.editorElement, { debug: this.debug, modules: e, placeholder: this.placeholder, readOnly: this.readOnly || !1, theme: this.theme || "snow", formats: this.formats, bounds: this.bounds ? "self" === this.bounds ? this.editorElement : this.bounds : document.body, strict: this.strict, scrollingContainer: this.scrollingContainer }), this.styles) {
    var i = JSON.parse(this.styles);
    Object.keys(i).forEach(function (e) { t.editorElement.style.setProperty(e, i[e]); });
} this.content && (this.setEditorContent(this.content), this.quillEditor.history.clear()), this.onInitialised.emit(this.quillEditor), this.selectionChangeEvent = this.quillEditor.on("selection-change", function (e, o, i) { null === e ? t.onBlur.emit({ editor: t.quillEditor, source: i }) : null === o && t.onFocus.emit({ editor: t.quillEditor, source: i }), t.onSelectionChanged.emit({ editor: t.quillEditor, range: e, oldRange: o, source: i }); }), this.textChangeEvent = this.quillEditor.on("text-change", function (e, o, i) { var n = t.quillEditor.getText(), r = t.quillEditor.getContents(), l = t.editorElement.querySelector(".ql-editor").innerHTML; "<p><br></p>" !== l && "<div><br><div>" !== l || (l = null), t.onContentChanged.emit({ editor: t.quillEditor, content: r, delta: e, html: l, oldDelta: o, source: i, text: n }); }); }, t.prototype.componentDidUnload = function () { this.selectionChangeEvent && this.selectionChangeEvent.removeListener("selection-change"), this.textChangeEvent && this.textChangeEvent.removeListener("text-change"); }, t.prototype.updateContent = function (t) { var e = this.getEditorContent(); if (["text", "html", "json"].indexOf(this.format) > -1 && t === e)
    return null; var o = !1; try {
    var i = JSON.stringify(t);
    o = JSON.stringify(e) !== i;
}
catch (t) {
    return null;
} if (!o)
    return null; this.setEditorContent(t); }, t.prototype.updateReadOnly = function (t, e) { this.quillEditor && t !== e && this.quillEditor.enable(!t); }, t.prototype.updatePlaceholder = function (t, e) { this.quillEditor && t !== e && (this.quillEditor.root.dataset.placeholder = t); }, t.prototype.updateStyle = function (t, e) { var o = this; if (this.editorElement) {
    if (e) {
        var i = JSON.parse(e);
        Object.keys(i).forEach(function (t) { o.editorElement.style.setProperty(t, ""); });
    }
    if (t) {
        var n = JSON.parse(t);
        Object.keys(n).forEach(function (t) { o.editorElement.style.setProperty(t, n[t]); });
    }
} }, t.prototype.render = function () { var t = this, e = quill_component_core_js_1.h(this.preserveWhitespace ? "pre" : "div", { "quill-element": !0, ref: function (e) { return t.editorElement = e; } }), o = [quill_component_core_js_1.h("slot", { name: "quill-toolbar" })]; return "bottom" === this.customToolbarPosition ? o.unshift(e) : o.push(e), o; }, Object.defineProperty(t, "is", { get: function () { return "quill-component"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "scoped"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { bounds: { type: String, attr: "bounds" }, content: { type: String, attr: "content", watchCallbacks: ["updateContent"] }, customToolbarPosition: { type: String, attr: "custom-toolbar-position" }, debug: { type: String, attr: "debug" }, format: { type: String, attr: "format" }, formats: { type: "Any", attr: "formats" }, modules: { type: String, attr: "modules" }, placeholder: { type: String, attr: "placeholder", watchCallbacks: ["updatePlaceholder"] }, preserveWhitespace: { type: Boolean, attr: "preserve-whitespace" }, readOnly: { type: Boolean, attr: "read-only", watchCallbacks: ["updateReadOnly"] }, scrollingContainer: { type: String, attr: "scrolling-container" }, strict: { type: Boolean, attr: "strict" }, styles: { type: String, attr: "styles", watchCallbacks: ["updateStyle"] }, theme: { type: String, attr: "theme" }, wrapperElement: { elementRef: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "events", { get: function () { return [{ name: "onInitialised", method: "onInitialised", bubbles: !0, cancelable: !0, composed: !0 }, { name: "onContentChanged", method: "onContentChanged", bubbles: !0, cancelable: !0, composed: !0 }, { name: "onSelectionChanged", method: "onSelectionChanged", bubbles: !0, cancelable: !0, composed: !0 }, { name: "onFocus", method: "onFocus", bubbles: !0, cancelable: !0, composed: !0 }, { name: "onBlur", method: "onBlur", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), t; }();
exports.QuillComponent = QuillComponent;
