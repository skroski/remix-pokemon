import {
  Link,
  React,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-42FWLRND.js";

// browser-route-module:/Users/danielskroski/Documents/remix-pokemon/app/routes/pokemon/$name.tsx?browser
init_react();

// app/routes/pokemon/$name.tsx
init_react();
var import_react = __toModule(require_react());
var handle = {
  title: (params) => params.name,
  breadcrumb: (params) => /* @__PURE__ */ React.createElement(Link, {
    to: `/pokemon/${params.name}`,
    className: "text-sm font-medium text-gray-400 hover:text-gray-200"
  }, params.name)
};
var meta = ({ data }) => {
  return {
    title: data ? data.name : "Oops..."
  };
};
var name_default = () => {
  const data = useLoaderData();
  const attributes = (0, import_react.useMemo)(() => ({
    HP: data.hp,
    Attack: data.attack,
    Defense: data.defense,
    Speed: data.speed,
    "Special Attack": data.special_attack,
    "Special Defense": data.special_defense
  }), [data]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hover:scale-105 transition duration-200 group block w-full aspect-w-10 aspect-h-8 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `/pokemon/${data.name.toLowerCase()}.jpg`,
    alt: "",
    className: "object-cover pointer-events-none group-hover:opacity-75"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Attribute"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, "Value"))), /* @__PURE__ */ React.createElement("tbody", null, Object.entries(attributes).map(([key, value], idx) => /* @__PURE__ */ React.createElement("tr", {
    key,
    className: idx % 2 === 0 ? "bg-white" : "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
  }, key), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
  }, value)))))))))));
};
export {
  name_default as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/pokemon/$name-U3A5DAB2.js.map
