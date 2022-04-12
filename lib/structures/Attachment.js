"use strict";

const Base = require("./Base");

/**
 * Represents an attachment
 * @prop {id} id The attachment ID
 * @prop {string} filename The filename of the attachment
 * @prop {string?} description The description of the attachment
 * @prop {string?} contentType The content type of the attachment
 * @prop {number} size The size of the attachment
 * @prop {string} url The URL of the attachment
 * @prop {string} proxyUrl The proxy URL of the attachment
 * @prop {string?} height The height of the attachment
 * @prop {string?} width The width of the attachment
 * @prop {boolean?} ephemeral Whether the attachment is ephemeral
 */
class Attachment extends Base {
    constructor(data, client) {
        super(data.id);
        this._client = client;

        this.filename = data.filename;
        this.description = data.description !== undefined ? data.description : null;
        this.contentType = data.content_type !== undefined ? data.content_type : null;
        this.size = data.size;
        this.url = data.url;
        this.proxyUrl = data.proxy_url;
        this.height = data.height !== undefined ? data.height : null;
        this.width = data.width !== undefined ? data.width : null;
        this.ephemeral = data.ephemeral !== undefined ? data.ephemeral : null;
    }

    toString() {
        return `[Attachment ${this.id}]`;
    }

    toJSON(props = []) {
        return super.toJSON([
            "filename",
            "description",
            "contentType",
            "size",
            "url",
            "proxyUrl",
            "height",
            "width",
            "ephemeral",
            ...props
        ]);
    }
}

module.exports = Attachment;
