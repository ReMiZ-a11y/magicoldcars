module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@sanity/image-url [external] (@sanity/image-url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@sanity/image-url", () => require("@sanity/image-url"));

module.exports = mod;
}),
"[externals]/next-sanity [external] (next-sanity, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("next-sanity");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/sanity/config/client-config.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const config = {
    projectId: ("TURBOPACK compile-time value", "x9mv3dcz"),
    dataset: 'production',
    apiVersion: "2025-02-19",
    useCdn: true,
    token: process.env.SANITY_PROJECT_API_TOKEN,
    perspective: 'published'
};
const __TURBOPACK__default__export__ = config;
}),
"[project]/src/sanity/queries/shop-queries.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "allCategoriesQuery",
    ()=>allCategoriesQuery,
    "allOrdersQuery",
    ()=>allOrdersQuery,
    "allProductsQuery",
    ()=>allProductsQuery,
    "bestSellerQuery",
    ()=>bestSellerQuery,
    "categoryByIdQuery",
    ()=>categoryByIdQuery,
    "countdownQuery",
    ()=>countdownQuery,
    "heroBannerQuery",
    ()=>heroBannerQuery,
    "heroSliderQuery",
    ()=>heroSliderQuery,
    "orderByIdQuery",
    ()=>orderByIdQuery,
    "orderData",
    ()=>orderData,
    "productByCategoryQuery",
    ()=>productByCategoryQuery,
    "productData",
    ()=>productData,
    "singleCategoryQuery",
    ()=>singleCategoryQuery,
    "singleProductQuery",
    ()=>singleProductQuery
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-sanity [external] (next-sanity, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const productData = `
{
  _id,
  name,
  description,
  shortDescription,
  category->,
  slug,
  tags,
  colors,
  sizes,
  customAttributes,
  additionalInformation,
  thumbnails,
  previewImages,
  publishedAt,
  price,
  discountedPrice,
  offers,
  status,
  price_id,
  body,
  currency,
  'reviews': *[
    _type == "review" && references(^._id)
  ] | order(publishedAt desc) {
    _id,
    name,
    email,
    comment
  }
}
`;
const orderData = `{
  _id,
  orderId,
  status,
  totalPrice,
  userId,
  quantity,
  orderTitle,
  _createdAt
}`;
const allCategoriesQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[
    _type == "category" &&
    count(*[_type == "product" && references(^._id)]) > 0
  ] {
    _id,
    title,
    image,
    slug,
    "productCount": count(
      *[_type == "product" && references(^._id)]
    )
  }
`;
const singleCategoryQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    image,
    slug,
    "productCount": count(
      *[_type == "product" && references(^._id)]
    )
  }
`;
const categoryByIdQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "category" && _id == $id][0] {
    _id,
    title
  }
`;
const allProductsQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "product"] | order(_createdAt desc) ${productData}
`;
const bestSellerQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "product"] | order(count(reviews) desc) ${productData}
`;
const singleProductQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "product" && slug.current == $slug][0] ${productData}
`;
const productByCategoryQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[
    _type == "product" &&
    category->slug.current == $slug
  ] | order(_createdAt desc) ${productData}
`;
const allOrdersQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "order"] | order(_createdAt desc) ${orderData}
`;
const orderByIdQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "order" && orderId == $orderId][0] ${orderData}
`;
const heroBannerQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "heroBanner"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    image,
    "post": post->{
      _id,
      title,
      slug,
      publishedAt
    }
  }
`;
const heroSliderQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "heroSlider"] | order(_createdAt desc) {
    _id,
    name,
    image,
    discount,
    description,
    "post": post->{
      _id,
      title,
      slug,
      publishedAt
    }
  }
`;
const countdownQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "countdown"][0] {
    _id,
    title,
    image,
    subtitle,
    date,
    product->{
      slug,
      name
    }
  }
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/sanity/sanity-utils.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "client",
    ()=>client,
    "sanityFetch",
    ()=>sanityFetch
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-sanity [external] (next-sanity, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$config$2f$client$2d$config$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/config/client-config.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$config$2f$client$2d$config$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]);
async function sanityFetch({ query, qParams, tags, revalidate }) {
    const cacheConfig = process.env.SANITY_HOOK_SECRET ? {
        cache: "force-cache",
        next: {
            tags,
            ...revalidate !== undefined && {
                revalidate
            }
        }
    } : {
        cache: "no-cache",
        next: {
            tags
        }
    };
    return client.fetch(query, qParams, cacheConfig);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/sanity/sanity-shop-utils.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getAllProducts",
    ()=>getAllProducts,
    "getAllProductsCount",
    ()=>getAllProductsCount,
    "getCategories",
    ()=>getCategories,
    "getCategoryById",
    ()=>getCategoryById,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getCountdown",
    ()=>getCountdown,
    "getCoupons",
    ()=>getCoupons,
    "getHeroBanners",
    ()=>getHeroBanners,
    "getHeroSliders",
    ()=>getHeroSliders,
    "getHighestPrice",
    ()=>getHighestPrice,
    "getOrderById",
    ()=>getOrderById,
    "getOrders",
    ()=>getOrders,
    "getProduct",
    ()=>getProduct,
    "getProductsByFilter",
    ()=>getProductsByFilter,
    "imageBuilder",
    ()=>imageBuilder
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$sanity$2f$image$2d$url__$5b$external$5d$__$2840$sanity$2f$image$2d$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@sanity/image-url [external] (@sanity/image-url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-sanity [external] (next-sanity, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$config$2f$client$2d$config$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/config/client-config.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/queries/shop-queries.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/sanity-utils.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$config$2f$client$2d$config$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]);
async function getCategories() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["allCategoriesQuery"],
        qParams: {},
        tags: [
            "category"
        ]
    });
    return data;
}
async function getCategoryBySlug(slug) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["allCategoriesQuery"],
        qParams: {
            slug
        },
        tags: [
            "category"
        ]
    });
    return data;
}
async function getCategoryById(id) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["categoryByIdQuery"],
        qParams: {
            id
        },
        tags: [
            "category"
        ]
    });
}
async function getAllProducts() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["allProductsQuery"],
        qParams: {},
        tags: [
            "product",
            "category"
        ]
    });
}
const getProductsByFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$api$5d$__$28$ecmascript$29$__["unstable_cache"])(async (query, tags)=>{
    const filterQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`${query} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["productData"]}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: filterQuery,
        qParams: {},
        tags
    });
}, [
    "filtered-products"
], {
    tags: [
        "product"
    ]
});
async function getAllProductsCount() {
    return client.fetch(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`count(*[_type == "product"])`);
}
async function getProduct(slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`*[_type == "product" && slug.current == $slug] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["productData"]}[0]`,
        tags: [
            "product"
        ],
        qParams: {
            slug
        }
    });
}
async function getHighestPrice() {
    return client.fetch(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`*[_type == "product"] | order(price desc)[0].price`);
}
async function getOrders(query) {
    const orderQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`*[_type == "order" ${query}] | order(_createdAt desc) ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["orderData"]}`;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: orderQuery,
        qParams: {},
        tags: [
            "order"
        ]
    });
    return data;
}
async function getOrderById(orderId) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["orderByIdQuery"],
        qParams: {
            orderId
        },
        tags: [
            "order"
        ]
    });
    return data;
}
const getHeroBanners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$api$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["heroBannerQuery"],
        qParams: {},
        tags: [
            "heroBanner"
        ]
    }), [
    "hero-banners"
], {
    tags: [
        "heroBanner"
    ]
});
const getHeroSliders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$api$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["heroSliderQuery"],
        qParams: {},
        tags: [
            "heroSlider"
        ]
    }), [
    "hero-sliders"
], {
    tags: [
        "heroSlider"
    ]
});
async function getCoupons() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$config$2f$client$2d$config$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`*[_type == "coupon"] {
      _id,
      name,
      code,
      discount,
      maxRedemptions,
      timesRedemed
    }`);
}
async function getCountdown() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$queries$2f$shop$2d$queries$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["countdownQuery"],
        qParams: {},
        tags: [
            "countdown"
        ]
    });
    return data;
}
function imageBuilder(source) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$sanity$2f$image$2d$url__$5b$external$5d$__$2840$sanity$2f$image$2d$url$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$config$2f$client$2d$config$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]).image(source);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/api/products.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$shop$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/sanity-shop-utils.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$shop$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$shop$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function handler(req, res) {
    const { limit } = req.query;
    let query = '*[_type == "product"]';
    if (limit) {
        query = `*[_type == "product"][0...${limit}]`;
    }
    try {
        const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2d$shop$2d$utils$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["getProductsByFilter"])(query, [
            "product"
        ]);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch products"
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c6792447._.js.map