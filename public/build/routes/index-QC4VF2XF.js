import {
  Form,
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-HM3HY7VX.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/danielskroski/Documents/remix-pokemon/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toModule(require_react());
var meta = () => {
  return {
    title: "Pokemon",
    description: "Pokemon page!"
  };
};
function Index() {
  var _a;
  let pokemonList = useLoaderData();
  const [search, setSearch] = (0, import_react.useState)((_a = (0, import_react_router_dom.useSearchParams)()[0].get("q")) != null ? _a : "");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    method: "get",
    className: "mb-10 flex"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: search,
    onChange: (e) => setSearch(e.target.value),
    name: "q",
    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-lg border-gray-300 px-4 rounded-full",
    placeholder: "Pokemon"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "ml-4 inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Search")), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  }, pokemonList.map((p) => /* @__PURE__ */ React.createElement("li", {
    key: p.id,
    className: "relative"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/pokemon/${p.name}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hover:scale-110 transition duration-200 group block w-full aspect-w-10 aspect-h-8 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `/pokemon/${p.name.toLowerCase()}.jpg`,
    alt: "",
    className: "object-cover pointer-events-none group-hover:opacity-75"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
  }, p.name))))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-QC4VF2XF.js.map
