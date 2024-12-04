export function toSlug(str: string) {

    return encodeURIComponent(
        str
            // .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
    );
}

export function fromSlug(slug: string) {
    return decodeURIComponent(slug
        .replace(/-/g, " ")
    );
}