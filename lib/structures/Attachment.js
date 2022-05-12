"use strict";

const Base = require("./Base");

/**
 * Represents an attachment
 * @prop {Object} data The attachment data
 * @prop {String} data.id The attachment ID
 * @prop {String} data.filename The filename of the attachment
 * @prop {String?} data.description The description of the attachment
 * @prop {String?} data.contentType The content type of the attachment
 * @prop {Number} data.size The size of the attachment
 * @prop {String} data.url The URL of the attachment
 * @prop {String} data.proxyUrl The proxy URL of the attachment
 * @prop {Number?} data.height The height of the attachment
 * @prop {Number?} data.width The width of the attachment
 * @prop {Boolean?} data.ephemeral Whether the attachment is ephemeral
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
