(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/sanity/schemas/blockContent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const blockContent = {
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            name: "block",
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                {
                    title: "Normal",
                    value: "normal"
                },
                {
                    title: "H1",
                    value: "h1"
                },
                {
                    title: "H2",
                    value: "h2"
                },
                {
                    title: "H3",
                    value: "h3"
                },
                {
                    title: "H4",
                    value: "h4"
                },
                {
                    title: "Quote",
                    value: "blockquote"
                }
            ],
            lists: [
                {
                    title: "Bullet",
                    value: "bullet"
                }
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    {
                        title: "Strong",
                        value: "strong"
                    },
                    {
                        title: "Emphasis",
                        value: "em"
                    }
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: "URL",
                        name: "link",
                        type: "object",
                        fields: [
                            {
                                title: "URL",
                                name: "href",
                                type: "string"
                            },
                            {
                                title: "Open in new tab",
                                name: "blank",
                                type: "boolean"
                            }
                        ],
                        initialValue: {
                            blank: true
                        }
                    }
                ]
            }
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
            type: "image",
            name: "blockImage",
            title: "Image",
            options: {
                hotspot: true
            }
        }
    ]
};
const __TURBOPACK__default__export__ = blockContent;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/category.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                unique: true,
                slugify: (input)=>{
                    return input.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
                }
            },
            validation: (Rule)=>Rule.required().custom((fields)=>{
                    if (fields?.current !== fields?.current?.toLowerCase() || fields?.current.split(" ").includes("")) {
                        return "Slug must be lowercase and not be included space";
                    }
                    return true;
                })
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        }
    ]
};
const __TURBOPACK__default__export__ = category;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/post.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const post = {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "metadata",
            title: "Metadata",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                unique: true,
                slugify: (input)=>{
                    return input.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
                }
            },
            validation: (Rule)=>Rule.required().custom((fields)=>{
                    if (fields?.current !== fields?.current?.toLowerCase() || fields?.current.split(" ").includes("")) {
                        return "Slug must be lowercase and not be included space";
                    }
                    return true;
                })
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "string",
                    validation: (Rule)=>Rule.custom((fields)=>{
                            if (fields !== fields.toLowerCase() || fields.split(" ").includes("")) {
                                return "Tags must be lowercase and not be included space";
                            }
                            return true;
                        })
                }
            ]
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: {
                type: "author"
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "postCategory",
            title: "Post Category",
            type: "reference",
            to: {
                type: "postCategory"
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent"
        }
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage"
        },
        prepare (selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            });
        }
    }
};
const __TURBOPACK__default__export__ = post;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/product.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "blockContent"
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: {
                type: "category"
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "discountedPrice",
            title: "Price After Discount",
            type: "number",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "offers",
            title: "Offers",
            type: "array",
            of: [
                {
                    type: "string",
                    title: "Offer"
                }
            ]
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                unique: true,
                slugify: (input)=>{
                    return input.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
                }
            },
            validation: (Rule)=>Rule.required().custom((fields)=>{
                    if (fields?.current !== fields?.current?.toLowerCase() || fields?.current.split(" ").includes("")) {
                        return "Slug must be lowercase and not be included space";
                    }
                    return true;
                })
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "string",
                    title: "Tag",
                    validation: (Rule)=>Rule.custom((fields)=>{
                            if (fields !== fields.toLowerCase() || fields.split(" ").includes("")) {
                                return "Tags must be lowercase and not be included space";
                            }
                            return true;
                        })
                }
            ]
        },
        {
            name: "colors",
            title: "Colors",
            type: "array",
            of: [
                {
                    type: "string",
                    title: "Color",
                    validation: (Rule)=>Rule.custom((fields)=>{
                            if (fields !== fields.toLowerCase() || fields.split(" ").includes("")) {
                                return "Colors must be lowercase and not be included space";
                            }
                            return true;
                        })
                }
            ]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: "array",
            of: [
                {
                    type: "string",
                    title: "Size",
                    validation: (Rule)=>Rule.custom((fields)=>{
                            if (fields !== fields.toLowerCase() || fields.split(" ").includes("")) {
                                return "size must be lowercase and not be included space";
                            }
                            return true;
                        })
                }
            ]
        },
        {
            name: "customAttributes",
            title: "Custom Attributes",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "customAttribute",
                    title: "Custom Attribute",
                    fields: [
                        {
                            name: "attributeName",
                            title: "Attribute Name",
                            type: "string",
                            validation: (Rule)=>Rule.required()
                        },
                        {
                            name: "attributeValues",
                            title: "Attribute Values",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    name: "attributeValue",
                                    title: "Attribute Value",
                                    fields: [
                                        {
                                            name: "id",
                                            title: "ID",
                                            type: "string",
                                            validation: (Rule)=>Rule.required()
                                        },
                                        {
                                            name: "title",
                                            title: "Title",
                                            type: "string",
                                            validation: (Rule)=>Rule.required()
                                        }
                                    ],
                                    preview: {
                                        select: {
                                            title: "title",
                                            subtitle: "id"
                                        }
                                    }
                                }
                            ],
                            validation: (Rule)=>Rule.required()
                        }
                    ],
                    preview: {
                        select: {
                            title: "attributeName",
                            subtitle: "attributeValues.0.title"
                        }
                    }
                }
            ]
        },
        {
            name: "additionalInformation",
            title: "Additional Information",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "additionalInfo",
                    title: "Additional Info",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (Rule)=>Rule.required()
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "string",
                            validation: (Rule)=>Rule.required()
                        }
                    ],
                    preview: {
                        select: {
                            title: "name",
                            subtitle: "description"
                        }
                    }
                }
            ]
        },
        {
            name: "thumbnails",
            title: "Thumbnails",
            type: "array",
            validation: (Rule)=>Rule.required(),
            of: [
                {
                    type: "object",
                    name: "thumbnail",
                    title: "Thumbnail",
                    fields: [
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: "color",
                            title: "Color",
                            type: "string"
                        }
                    ],
                    preview: {
                        select: {
                            title: "color",
                            media: "image"
                        },
                        prepare (selection) {
                            const { title, media } = selection;
                            return {
                                title: title || "Thumbnail",
                                media
                            };
                        }
                    }
                }
            ]
        },
        {
            name: "previewImages",
            title: "Preview Images",
            type: "array",
            validation: (Rule)=>Rule.required(),
            of: [
                {
                    type: "object",
                    name: "previewImage",
                    title: "Preview Image",
                    fields: [
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: "color",
                            title: "Color",
                            type: "string"
                        }
                    ],
                    preview: {
                        select: {
                            title: "color",
                            media: "image"
                        },
                        prepare (selection) {
                            const { title, media } = selection;
                            return {
                                title: title || "Preview Image",
                                media
                            };
                        }
                    }
                }
            ]
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "status",
            title: "Stock Status",
            type: "boolean"
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent"
        }
    ],
    preview: {
        select: {
            title: "name",
            description: "shortDescription",
            category: "category.title",
            media: "thumbnails.0.image"
        },
        prepare (selection) {
            const { description, category, media } = selection;
            return {
                title: selection.title,
                subtitle: category,
                media
            };
        }
    }
};
const __TURBOPACK__default__export__ = product;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/review.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const review = {
    name: "review",
    type: "document",
    title: "Review",
    fields: [
        {
            name: "name",
            type: "string",
            readonly: true
        },
        {
            name: "email",
            type: "string",
            readonly: true
        },
        {
            name: "comment",
            type: "text",
            readonly: true
        },
        {
            name: "ratings",
            type: "number",
            readonly: true
        },
        {
            name: "product",
            type: "reference",
            to: [
                {
                    type: "product"
                }
            ]
        }
    ],
    preview: {
        select: {
            name: "name",
            comment: "comment",
            product: "product.name"
        },
        prepare ({ name, comment, product }) {
            return {
                title: `${name} on ${product}`,
                subtitle: comment
            };
        }
    }
};
const __TURBOPACK__default__export__ = review;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/order.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "orderTitle",
            title: "Order Title",
            type: "string"
        },
        {
            name: "orderId",
            title: "Order Id",
            type: "string"
        },
        {
            name: "status",
            title: "Shipping Satus",
            type: "string",
            options: {
                list: [
                    {
                        title: "Processing",
                        value: "processing"
                    },
                    {
                        title: "On Hold",
                        value: "on-hold"
                    },
                    {
                        title: "Delivered",
                        value: "delivered"
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "productQuantity",
            title: "Product Quantity",
            type: "string"
        },
        {
            name: "userId",
            title: "User Id",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "userEmail",
            title: "User Email",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "country",
            title: "Country",
            type: "string"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "postalCode",
            title: "Postal Code",
            type: "string"
        },
        {
            name: "line1",
            title: "Line 1",
            type: "string"
        },
        {
            name: "line2",
            title: "Line 2",
            type: "string"
        },
        {
            name: "orderDescription",
            title: "Order Description",
            type: "string"
        }
    ],
    preview: {
        select: {
            orderTitle: "orderTitle",
            orderId: "orderId"
        },
        prepare (selection) {
            const { orderId, orderTitle } = selection;
            return Object.assign({}, selection, {
                title: `${orderTitle}`,
                subtitle: `${orderId}`
            });
        }
    }
};
const __TURBOPACK__default__export__ = order;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/author.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const author = {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "bio",
            title: "Bio",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [
                        {
                            title: "Normal",
                            value: "normal"
                        }
                    ],
                    lists: []
                }
            ]
        }
    ],
    preview: {
        select: {
            title: "name",
            media: "image"
        }
    }
};
const __TURBOPACK__default__export__ = author;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/postCategory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const postCategory = {
    name: "postCategory",
    title: "Post Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                unique: true,
                slugify: (input)=>{
                    return input.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
                }
            },
            validation: (Rule)=>Rule.required().custom((fields)=>{
                    if (fields?.current !== fields?.current?.toLowerCase() || fields?.current.split(" ").includes("")) {
                        return "Slug must be lowercase and not be included space";
                    }
                    return true;
                })
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        }
    ]
};
const __TURBOPACK__default__export__ = postCategory;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/hero-banner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const heroBanner = {
    name: "heroBanner",
    type: "document",
    title: "Hero Banner",
    fields: [
        {
            name: "name",
            title: "Banner Name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "product",
            type: "reference",
            to: [
                {
                    type: "product"
                }
            ],
            validation: (Rule)=>Rule.required()
        }
    ],
    preview: {
        select: {
            product: "product.name",
            image: "image"
        },
        prepare (selection) {
            const { product, image } = selection;
            return {
                title: product,
                media: image
            };
        }
    }
};
const __TURBOPACK__default__export__ = heroBanner;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/hero-slider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const heroSlider = {
    name: "heroSlider",
    type: "document",
    title: "Hero Slider",
    fields: [
        {
            name: "name",
            title: "name",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "discount",
            title: "Discount Rate",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "product",
            type: "reference",
            to: [
                {
                    type: "product"
                }
            ],
            validation: (Rule)=>Rule.required()
        }
    ],
    preview: {
        select: {
            title: "name",
            image: "image"
        },
        prepare (selection) {
            const { title, image } = selection;
            return {
                title: title,
                media: image
            };
        }
    }
};
const __TURBOPACK__default__export__ = heroSlider;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/coupon.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const coupon = {
    name: "coupon",
    title: "Coupon",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Code Name",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "discount",
            title: "Discount (%)",
            type: "number"
        },
        {
            name: "code",
            title: "Code",
            type: "string"
        },
        {
            name: "maxRedemptions",
            title: "Max Redemptions",
            type: "number"
        },
        {
            name: "timesRedemed",
            title: "Times Redeemed",
            type: "number"
        }
    ]
};
const __TURBOPACK__default__export__ = coupon;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/countdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const countdown = {
    name: "countdown",
    title: "Countdown",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "product",
            title: "Product",
            type: "reference",
            to: [
                {
                    type: "product"
                }
            ],
            validation: (Rule)=>Rule.required()
        },
        {
            name: "date",
            title: "Date",
            type: "date",
            validation: (Rule)=>Rule.required()
        }
    ]
};
const __TURBOPACK__default__export__ = countdown;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemas/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$blockContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/blockContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/category.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$post$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/post.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/product.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/review.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$order$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/order.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$author$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/author.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$postCategory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/postCategory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$hero$2d$banner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/hero-banner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$hero$2d$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/hero-slider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$coupon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/coupon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/countdown.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const schemas = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$post$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$author$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$order$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$postCategory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$blockContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$hero$2d$banner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$hero$2d$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$coupon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
const __TURBOPACK__default__export__ = schemas;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemas/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
;
;
;
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    projectId: ("TURBOPACK compile-time value", "x9mv3dcz"),
    dataset: "production",
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
    apiVersion: "2023-03-09",
    basePath: "/admin",
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemas$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = config;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(studio)/admin/[[...index]]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
function AdminPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/src/app/(studio)/admin/[[...index]]/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e963b795._.js.map