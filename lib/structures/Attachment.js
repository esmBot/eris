"use strict";

const Base = require("./Base");

/**
 * Represents an attachment
 * @prop {string} data The attachment data
 * @prop {id} data.id The attachment ID
 * @prop {string} data.filename The filename of the attachment
 * @prop {string?} data.description The description of the attachment
 * @prop {string?} data.contentType The content type of the attachment
 * @prop {number} data.size The size of the attachment
 * @prop {string} data.url The URL of the attachment
 * @prop {string} data.proxyUrl The proxy URL of the attachment
 * @prop {string?} data.height The height of the attachment
 * @prop {string?} data.width The width of the attachment
 * @prop {boolean?} data.ephemeral Whether the attachment is ephemeral
 */
class Attachment extends Base {
    constructor(data) {
        super(data.id);

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
