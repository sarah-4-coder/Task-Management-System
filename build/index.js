var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "src/app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// src/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("react"), import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_classix = __toESM(require("classix"));

// src/app/store/theme.store.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Theme = /* @__PURE__ */ ((Theme3) => (Theme3.LIGHT = "light", Theme3.DARK = "dark", Theme3.LAVA = "lava", Theme3.LIME = "lime", Theme3.BARBIE = "barbie", Theme3))(Theme || {}), themes = Object.values(Theme), Preference = /* @__PURE__ */ ((Preference3) => (Preference3.SELECTED = "selected", Preference3.SYSTEM = "system", Preference3))(Preference || {}), preferences = Object.values(Preference), DEFAULT_THEME = "light" /* LIGHT */, DEFAULT_PREFERENCE = "system" /* SYSTEM */, ThemeContext = (0, import_react2.createContext)(null), prefersLightMQ = "(prefers-color-scheme: light)", getSystemTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */, ThemeProvider = ({
  children,
  specifiedTheme,
  specifiedPreference
}) => {
  let [theme, setThemeState] = (0, import_react2.useState)(() => specifiedTheme ? themes.includes(specifiedTheme) ? specifiedTheme : null : typeof window != "object" ? null : getSystemTheme()), [preference, setPreference] = (0, import_react2.useState)(() => isValidPreference(specifiedPreference) ? specifiedPreference : DEFAULT_PREFERENCE), persistTheme = (0, import_react3.useFetcher)(), persistThemeRef = (0, import_react2.useRef)(persistTheme);
  (0, import_react2.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]), (0, import_react2.useEffect)(() => {
    let mediaQuery = window.matchMedia(prefersLightMQ), handleChange = () => {
      if (preference !== "system" /* SYSTEM */)
        return;
      let newTheme = mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */;
      setThemeState(newTheme);
    };
    return mediaQuery.addEventListener("change", handleChange), () => mediaQuery.removeEventListener("change", handleChange);
  }, [preference]);
  let setTheme = (0, import_react2.useCallback)(
    (newTheme, newPreference = "system" /* SYSTEM */) => {
      persistThemeRef.current.submit(
        { theme: newTheme, preference: newPreference },
        { action: "action/set-theme", method: "post" }
      ), setThemeState(newTheme), setPreference(newPreference);
    },
    []
  ), value = {
    theme,
    preference,
    setTheme
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeContext.Provider, { value, children }, void 0, !1, {
    fileName: "src/app/store/theme.store.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}, useTheme = () => {
  let themeContext = (0, import_react2.useContext)(ThemeContext);
  if (themeContext === null)
    throw new Error("useTheme must be used within a ThemeProvider");
  return themeContext;
}, isValidTheme = (theme) => themes.includes(theme), isValidPreference = (preference) => preferences.includes(preference);

// src/utils/meta.ts
var formatTags = (tags) => Object.entries(tags).map(([key, value]) => ({
  name: key,
  content: value
})), formatProperties = (properties) => Object.entries(properties).map(([key, value]) => ({
  property: key,
  content: value
}));

// src/app/session-storage/theme-storage.server.ts
var import_node = require("@remix-run/node");

// src/app/session-storage/shared.ts
var SESSION_SECRET = process.env.SESSION_SECRET || "default-secret";
if (!SESSION_SECRET)
  throw new Error("SESSION_SECRET must be set");

// src/app/session-storage/theme-storage.server.ts
var THEME_SESSION_KEY = "theme", THEME_PREFERENCE_SESSION_KEY = "themePreference", themeStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "theme_session",
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
}), getThemeSession = async (request) => {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      let theme = session.get(THEME_SESSION_KEY), preference = session.get(THEME_PREFERENCE_SESSION_KEY);
      return {
        theme: isValidTheme(theme) ? theme : void 0,
        preference: isValidPreference(preference) ? preference : void 0
      };
    },
    setTheme: ({ theme, preference }) => {
      isValidTheme(theme) && session.set(THEME_SESSION_KEY, theme), isValidPreference(preference) && session.set(THEME_PREFERENCE_SESSION_KEY, preference);
    },
    commit: () => themeStorage.commitSession(session, { expires: /* @__PURE__ */ new Date("2088-10-18") })
  };
};

// src/app/components/toast/toast.tsx
var import_react_toastify = require("react-toastify"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Toast = ({ theme }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  import_react_toastify.ToastContainer,
  {
    position: "top-right",
    autoClose: 5e3,
    hideProgressBar: !1,
    newestOnTop: !1,
    closeOnClick: !0,
    rtl: !1,
    pauseOnFocusLoss: !0,
    draggable: !0,
    pauseOnHover: !0,
    theme: theme === "light" ? "light" : "dark"
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/toast/toast.tsx",
    lineNumber: 8,
    columnNumber: 5
  },
  this
);

// src/app/components/error-base.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), ErrorBase = ({ variant, message, href }) => {
  let imgPath = `/images/error-${variant}.svg`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-[500px] text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: imgPath,
        alt: "Server error",
        className: "mx-auto mb-4 h-[350px] w-auto"
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/error-base.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    href ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "a",
      {
        href,
        className: "max-w-[100px] text-lg text-link hover:underline active:text-link-pressed",
        children: message
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/error-base.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "max-w-[100px] text-lg text-font", children: message }, void 0, !1, {
      fileName: "src/app/components/error-base.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/error-base.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};

// src/app/components/error-404/error-404.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Error404 = ({ message = "Error 404: Not Found", href }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorBase, { variant: "404", message, href }, void 0, !1, {
  fileName: "src/app/components/error-404/error-404.tsx",
  lineNumber: 4,
  columnNumber: 10
}, this);

// src/app/components/error-500/error-500.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Error500 = ({
  message = "Error 500: Server error",
  href
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ErrorBase, { variant: "500", message, href }, void 0, !1, {
  fileName: "src/app/components/error-500/error-500.tsx",
  lineNumber: 7,
  columnNumber: 10
}, this);

// src/app/styles/app-compiled.css
var app_compiled_default = "/build/_assets/app-compiled-AIH3Y62V.css";

// src/app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-O3VH7KO3.css";

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-MAHHHE2E.css";

// src/app/root.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: fonts_default },
  { rel: "stylesheet", href: app_compiled_default },
  { rel: "stylesheet", href: ReactToastify_default },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
], meta = () => {
  let title = "Jira clone", description = "Task manager application inspired in Jira. Side project made with Remix, React, Tailwind, TypeScript and more.", image = "https://jira-clone.fly.dev/static/images/select-theme-light.png", url = "https://jira-clone.fly.dev", tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "951",
    "twitter:image:height": "696",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [...formatTags(tags), ...formatProperties(properties)];
}, loader = async ({ request }) => {
  let themeSession = await getThemeSession(request), { theme, preference } = themeSession.getTheme();
  return (0, import_node2.json)({ theme, preference });
};
function AppWithProviders() {
  let { theme, preference } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeProvider, { specifiedTheme: theme, specifiedPreference: preference, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(App, {}, void 0, !1, {
    fileName: "src/app/root.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/root.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
var App = () => {
  let loaderData = (0, import_react5.useLoaderData)(), { theme: sessionTheme, preference: sessionPreference } = loaderData, { theme } = useTheme(), fetcher = (0, import_react5.useFetcher)();
  return (0, import_react4.useEffect)(() => {
    if (sessionTheme && sessionPreference === "selected" /* SELECTED */)
      return;
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" /* DARK */ : "light" /* LIGHT */;
    fetcher.submit(
      { theme: systemTheme, preference: "system" /* SYSTEM */ },
      { action: "action/set-theme", method: "post" }
    );
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", className: (0, import_classix.default)("h-full", theme), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/root.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { className: "h-full bg-elevation-surface font-primary text-font", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Toast, { theme: theme || "light" /* LIGHT */ }, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: sessionTheme ? "" : `
                (function () {
                  if (typeof window === 'undefined') return;

                  const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                  if (isSystemThemeDark) {
                    const htmlElement = document.documentElement;
                    htmlElement.classList.add('dark');
                  }
                })();
              `
          }
        },
        void 0,
        !1,
        {
          fileName: "src/app/root.tsx",
          lineNumber: 133,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/app/root.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/root.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}, errorComponentStyle = {
  maxWidth: "500px",
  width: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#0052cc",
  fontFamily: "sans-serif",
  fontWeight: "bold"
};
function ErrorBoundary({ error }) {
  return console.error(error), // Inline styles because tailwind is not loaded at this point
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: errorComponentStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Error500, { message: "It seems there is a critical error! Please try again or contact me at: danielserrano.contacto@gmail.com", href: "/" }, void 0, !1, {
    fileName: "src/app/root.tsx",
    lineNumber: 177,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/root.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("title", { children: "Oops! Not found" }, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/root.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: errorComponentStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Error404,
      {
        message: "It seems that you have lost! Go to the main page",
        href: "/"
      },
      void 0,
      !1,
      {
        fileName: "src/app/root.tsx",
        lineNumber: 192,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/root.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/root.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/root.tsx",
    lineNumber: 184,
    columnNumber: 5
  }, this);
}

// src/app/routes/action/set-theme.tsx
var set_theme_exports = {};
__export(set_theme_exports, {
  action: () => action,
  default: () => SetThemeAction,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader2 = () => (0, import_node3.redirect)("/", { status: 404 }), action = async ({ request }) => {
  let form = await request.formData(), theme = form.get("theme"), preference = form.get("preference"), themeSession = await getThemeSession(request);
  return themeSession.setTheme({ theme, preference }), (0, import_node3.json)(
    { success: !0 },
    {
      headers: { "Set-Cookie": await themeSession.commit() }
    }
  );
};
function SetThemeAction() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "Oops... You should not see this." }, void 0, !1, {
    fileName: "src/app/routes/action/set-theme.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// src/app/routes/action/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  default: () => SetThemeAction2,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");

// src/app/session-storage/user-storage.server.ts
var import_node4 = require("@remix-run/node");
var _30daysInSeconds = 60 * 60 * 24 * 30, USER_SESSION_KEY = "userId", userStorage = (0, import_node4.createCookieSessionStorage)({
  cookie: {
    name: "user_session",
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: _30daysInSeconds,
    httpOnly: !0
  }
}), getUserSession = async (request) => {
  let session = await userStorage.getSession(request.headers.get("Cookie"));
  return {
    getUser: () => {
      let userId = session.get(USER_SESSION_KEY);
      return isValidUserId(userId) ? userId : null;
    },
    setUser: (userId) => {
      isValidUserId(userId) && session.set(USER_SESSION_KEY, userId);
    },
    destroyUser: () => userStorage.destroySession(session),
    commit: () => userStorage.commitSession(session)
  };
}, isValidUserId = (userId) => Boolean(userId) && typeof userId == "string";

// src/app/routes/action/logout.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader3 = () => (0, import_node5.redirect)("/", { status: 404 }), action2 = async ({ request }) => {
  let userSession = await getUserSession(request);
  return (0, import_node5.redirect)("/login", {
    headers: { "Set-Cookie": await userSession.destroyUser() }
  });
};
function SetThemeAction2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Oops... You should not see this." }, void 0, !1, {
    fileName: "src/app/routes/action/logout.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main.tsx
var main_exports = {};
__export(main_exports, {
  default: () => AppRoute,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// src/utils/dnull.ts
var isPlainObject = (value) => {
  if (typeof value != "object" || value === null || Array.isArray(value))
    return !1;
  let proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}, dnull = (src) => {
  if (src !== null) {
    if (isPlainObject(src)) {
      let clone = /* @__PURE__ */ Object.create(null);
      for (let [key, value] of Object.entries(src))
        clone[key] = dnull(value);
      return clone;
    }
    return Array.isArray(src) ? src.map(dnull) : src;
  }
};

// src/infrastructure/db/db.server.ts
var import_client = require("@prisma/client"), db;
globalThis.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// src/infrastructure/db/user.ts
var getUser = async (userId) => {
  let user = await db.user.findUnique({
    where: { id: userId }
  });
  return user ? dnull(user) : null;
}, getUsers = async () => (await db.user.findMany({
  orderBy: { name: "asc" }
})).map(dnull);

// src/app/ui/main/main.layout.tsx
var import_react11 = require("@remix-run/react");

// src/app/store/user.store.tsx
var import_react6 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), UserContext = (0, import_react6.createContext)(void 0), UserContextProvider = ({
  user,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UserContext.Provider, { value: { user }, children }, void 0, !1, {
  fileName: "src/app/store/user.store.tsx",
  lineNumber: 17,
  columnNumber: 3
}, this), useUserStore = () => {
  let userStore = (0, import_react6.useContext)(UserContext);
  if (!userStore)
    throw new Error("User context not found");
  return userStore;
};

// src/app/ui/main/header/header.tsx
var import_react10 = require("@remix-run/react"), import_classix6 = __toESM(require("classix")), import_hi = require("react-icons/hi"), import_ai = require("react-icons/ai");

// src/app/components/tooltip/tooltip.tsx
var import_react7 = require("react"), import_classix2 = __toESM(require("classix")), import_tailwind_merge = require("tailwind-merge"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Tooltip = ({
  title,
  show = !0,
  className = "",
  children
}) => {
  let [isVisible, setIsVisible] = (0, import_react7.useState)(!1), showTooltip = () => setIsVisible(!0), hideTooltip = () => setIsVisible(!1);
  return show ? (
    // Don't know why h-fit (and other h-*) doesn't work here
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "relative w-fit", style: { height: "fit-content" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { onMouseEnter: showTooltip, onMouseLeave: hideTooltip, children }, void 0, !1, {
        fileName: "src/app/components/tooltip/tooltip.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "div",
        {
          className: (0, import_classix2.default)(
            "absolute left-1/2 top-full z-50 mt-1.5 -translate-x-1/2 transform justify-center break-words",
            isVisible ? "flex" : "hidden"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "div",
            {
              className: (0, import_tailwind_merge.twMerge)(
                "w-fit whitespace-nowrap rounded bg-font px-1.5 py-0.5 text-2xs text-font-inverse",
                className
              ),
              children: title
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/tooltip/tooltip.tsx",
              lineNumber: 30,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "src/app/components/tooltip/tooltip.tsx",
          lineNumber: 24,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/app/components/tooltip/tooltip.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ) : children;
};

// src/app/ui/main/header/select-theme.tsx
var DropdownMenu = __toESM(require("@radix-ui/react-dropdown-menu")), import_md = require("react-icons/md"), import_classix3 = __toESM(require("classix"));
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), SelctTheme = () => {
  let { theme, setTheme, preference } = useTheme(), themeOptions = [
    {
      value: "light" /* LIGHT */,
      label: "Light",
      image: "/images/theme/light.png"
    },
    {
      value: "dark" /* DARK */,
      label: "Dark",
      image: "/images/theme/dark.png"
    },
    {
      value: "lava" /* LAVA */,
      label: "Lava",
      image: "/images/theme/lava.png"
    },
    {
      value: "lime" /* LIME */,
      label: "Lime",
      image: "/images/theme/lime.png"
    },
    {
      value: "barbie" /* BARBIE */,
      label: "Barbie",
      image: "/images/theme/barbie.png"
    },
    {
      value: "system" /* SYSTEM */,
      label: "System",
      image: "/images/theme/system.png"
    }
  ], currentValue = preference === "system" /* SYSTEM */ ? preference : theme, triggerIconClass = (0, import_classix3.default)("fill-icon group-hover:fill-icon-brand"), selectTheme = (value) => {
    isValidPreference(value) && setTheme(getSystemTheme(), value), isValidTheme(value) && setTheme(value, "selected" /* SELECTED */);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DropdownMenu.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Tooltip, { title: "Select theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      DropdownMenu.Trigger,
      {
        "aria-label": "Open theme select",
        className: "group flex h-[30px] w-[30px] rounded-full outline outline-2 outline-icon flex-center hover:bg-background-brand-subtlest hover:outline-border-brand",
        children: theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_md.MdLightMode, { className: triggerIconClass }, void 0, !1, {
          fileName: "src/app/ui/main/header/select-theme.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_md.MdDarkMode, { className: triggerIconClass }, void 0, !1, {
          fileName: "src/app/ui/main/header/select-theme.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/header/select-theme.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/header/select-theme.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DropdownMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      DropdownMenu.Content,
      {
        align: "end",
        sideOffset: 5,
        className: "z-50 origin-top-right rounded bg-elevation-surface-overlay p-3 text-font shadow-md radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DropdownMenu.Label, { className: "select-none pb-2 text-lg", children: "Select theme" }, void 0, !1, {
            fileName: "src/app/ui/main/header/select-theme.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            DropdownMenu.RadioGroup,
            {
              value: currentValue || DEFAULT_THEME,
              onValueChange: selectTheme,
              className: (0, import_classix3.default)(
                "grid gap-2",
                themeOptions.length > 6 ? "grid-cols-3" : themeOptions.length > 3 ? "grid-cols-2" : "grid-cols-1"
              ),
              children: themeOptions.map(({ value, label, image }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                DropdownMenu.RadioItem,
                {
                  value,
                  className: (0, import_classix3.default)(
                    "group flex gap-4 rounded px-2 pb-2 pt-1 outline outline-2 hover:outline-border-brand",
                    value === currentValue ? "bg-background-brand-subtlest text-font-brand outline-border-brand" : "outline-transparent"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                      "span",
                      {
                        className: (0, import_classix3.default)(
                          "border-1 mt-1 flex h-4 w-4 rounded-full border flex-center group-hover:border-border-brand",
                          value === currentValue ? "border-border-brand" : "border-border-disabled"
                        ),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                          "span",
                          {
                            className: (0, import_classix3.default)(
                              "h-2 w-2 rounded-full bg-background-brand-bold",
                              value === currentValue ? "block" : "hidden"
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "src/app/ui/main/header/select-theme.tsx",
                            lineNumber: 121,
                            columnNumber: 19
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "src/app/ui/main/header/select-theme.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-sm", children: label }, void 0, !1, {
                        fileName: "src/app/ui/main/header/select-theme.tsx",
                        lineNumber: 129,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                        "img",
                        {
                          src: image,
                          alt: `${label} theme`,
                          className: "h-[100px] w-[180px] rounded border-2 border-border-disabled object-cover"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "src/app/ui/main/header/select-theme.tsx",
                          lineNumber: 130,
                          columnNumber: 19
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "src/app/ui/main/header/select-theme.tsx",
                      lineNumber: 128,
                      columnNumber: 17
                    }, this)
                  ]
                },
                value,
                !0,
                {
                  fileName: "src/app/ui/main/header/select-theme.tsx",
                  lineNumber: 103,
                  columnNumber: 15
                },
                this
              ))
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/header/select-theme.tsx",
              lineNumber: 90,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/header/select-theme.tsx",
        lineNumber: 82,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/header/select-theme.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/header/select-theme.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/header/user-profile.tsx
var import_react9 = require("@remix-run/react"), DropdownMenu2 = __toESM(require("@radix-ui/react-dropdown-menu")), import_fa = require("react-icons/fa"), import_classix5 = __toESM(require("classix"));

// src/app/components/user-avatar/user-avatar.tsx
var Avatar = __toESM(require("@radix-ui/react-avatar"));

// src/domain/user/user.ts
var getRandomPastelColor = () => {
  let h = 360 * Math.random(), s = 25 + 70 * Math.random(), l = 85 + 10 * Math.random();
  return hslToHex(h, s, l);
}, hslToHex = (h, s, l) => {
  l /= 100;
  let a = s * Math.min(l, 1 - l) / 100, transformer = (n) => {
    let k = (n + h / 30) % 12, color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${transformer(0)}${transformer(8)}${transformer(4)}`;
};

// src/domain/user/user.mock.ts
var usersMock = [
  {
    id: "1c6855bf-9a0f-4a45-9641-7b7c7855c570",
    name: "Daniel Serrano",
    color: "#dae3f9"
  },
  {
    id: "b18b41e7-749e-44ed-ad0d-6cd27a78a1cf",
    name: "Woody",
    image: "woody.webp"
  },
  {
    id: "eacafed4-c6f3-4908-a614-d3b97d76b1fe",
    name: "Buzz Lightyear",
    image: "buzz-lightyear.webp"
  },
  {
    id: "114020ad-5bc4-4ebe-a7cf-8ea78b338a73",
    name: "Jessie",
    image: "jessie.webp"
  },
  {
    id: "3086bfaa-2978-43b3-95d2-cac334ad603e",
    name: "Emperor Zurg",
    image: "emperor-zurg.webp"
  },
  {
    id: "4a9f3bc0-8aa0-4a38-b28a-e813b2414e64",
    name: "Mr Potato",
    image: "mr-potato.webp"
  },
  {
    id: "a211fc6a-fa1f-4dd6-a6d8-acb5d8ab2b2a",
    name: "Ms Potato",
    image: "ms-potato.webp"
  },
  {
    id: "a91ea376-c533-4ec8-bd0a-57d93862e1d6",
    name: "Little Green Men",
    image: "little-green-men.webp"
  },
  {
    id: "29a87499-9d0c-4030-91c3-03b01d8fd362",
    name: "T-Rex"
  },
  {
    id: "759af9f6-2ffb-45d2-9c0a-be751185f286",
    name: "Andy Davis",
    image: "andy-davis.webp"
  }
], userMock1 = usersMock[0], userMock2 = usersMock[1];

// src/app/components/user-avatar/user-avatar.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = !1
}) => {
  let imageMinName = image == null ? void 0 : image.replace(".webp", "-min.webp"), imageSrc = size > 80 ? `/avatars/${image}` : `/avatars/${imageMinName}`, imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`
  }, acronym = name.split(" ").slice(0, 2).map((word) => word[0].toUpperCase()).join("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Tooltip, { title: name, show: tooltip, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Avatar.Root, { className: "flex items-center rounded-full", style: imageSize, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Avatar.Image,
      {
        className: "rounded-full object-cover",
        src: image ? imageSrc : void 0,
        style: imageSize,
        alt: name
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/user-avatar/user-avatar.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Avatar.Fallback,
      {
        delayMs: 0,
        className: "flex items-center justify-center rounded-full text-[var(--Neutral1000)]",
        style: {
          ...imageSize,
          backgroundColor: color || getRandomPastelColor(),
          fontSize: `${size / 2}px`
        },
        children: acronym
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/user-avatar/user-avatar.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/user-avatar/user-avatar.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/user-avatar/user-avatar.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// src/app/components/button/button.tsx
var import_react8 = require("react"), import_classix4 = __toESM(require("classix")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Button = (0, import_react8.forwardRef)(
  ({
    children,
    color = "primary",
    variant = "contained",
    size = "md",
    className,
    ...rest
  }, forwardedRef) => {
    let primaryStyle = () => variant === "contained" ? "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed" : variant === "subtlest" ? "bg-background-brand-subtlest text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed" : variant === "text" ? "text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed" : "", neutralStyle = () => variant === "contained" ? "bg-background-neutral-bold text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed" : variant === "subtlest" ? "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed" : variant === "text" ? "text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed" : "", successStyle = () => variant === "contained" ? "bg-background-success-bold text-font-inverse hover:bg-background-success-bold-hovered active:bg-background-success-bold-pressed" : variant === "subtlest" ? "bg-background-success text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed" : variant === "text" ? "text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed" : "", dangerStyle = () => variant === "contained" ? "bg-background-danger-bold text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed" : variant === "subtlest" ? "bg-background-danger text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed" : variant === "text" ? "text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed" : "", warningStyle = () => variant === "contained" ? "bg-background-warning-bold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed" : variant === "subtlest" ? "bg-background-warning text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed" : variant === "text" ? "text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed" : "", infoStyle = () => variant === "contained" ? "bg-background-info-bold text-font-inverse hover:bg-background-info-bold-hovered active:bg-background-info-bold-pressed" : variant === "subtlest" ? "bg-background-info text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed" : variant === "text" ? "text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed" : "";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "button",
      {
        ref: forwardedRef,
        className: (0, import_classix4.default)(
          "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60",
          color === "primary" && primaryStyle(),
          color === "neutral" && neutralStyle(),
          color === "success" && successStyle(),
          color === "danger" && dangerStyle(),
          color === "warning" && warningStyle(),
          color === "info" && infoStyle(),
          size === "lg" && "gap-3 px-8 py-2 text-lg",
          className
        ),
        ...rest,
        children
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/button/button.tsx",
        lineNumber: 113,
        columnNumber: 7
      },
      this
    );
  }
);
Button.displayName = "Button";

// src/app/ui/main/header/user-profile.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), UserProfile = () => {
  let { user } = useUserStore();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu2.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu2.Trigger, { className: "ml-1 rounded-full outline outline-2 outline-border-disabled hover:outline-border-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UserAvatar, { ...user }, void 0, !1, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu2.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      DropdownMenu2.Content,
      {
        align: "end",
        sideOffset: 5,
        className: (0, import_classix5.default)(
          "z-50 rounded bg-elevation-surface-overlay shadow-md",
          "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu2.Item, { className: "flex flex-col items-center p-3 !outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UserAvatar, { ...user, size: 80 }, void 0, !1, {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "mt-2 text-lg text-font", children: user.name }, void 0, !1, {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 28,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu2.Separator, { className: "h-px bg-border" }, void 0, !1, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu2.Item, { className: "select-none p-1 !outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react9.Form, { action: "action/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            Button,
            {
              color: "danger",
              variant: "subtlest",
              type: "submit",
              onClick: (e) => e.stopPropagation(),
              className: "w-full",
              "aria-label": "Log out",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fa.FaPowerOff, {}, void 0, !1, {
                  fileName: "src/app/ui/main/header/user-profile.tsx",
                  lineNumber: 42,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: "Log out" }, void 0, !1, {
                  fileName: "src/app/ui/main/header/user-profile.tsx",
                  lineNumber: 43,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 33,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/header/user-profile.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/header/user-profile.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/header/header.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), Header = () => {
  let iconBaseClass2 = "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { className: "relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_react10.Link,
      {
        to: "/",
        className: "flex cursor-pointer items-center rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: "/images/logo.png", width: 24, height: 24, alt: "Logo" }, void 0, !1, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "ml-2", children: "Jira Clone" }, void 0, !1, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Tooltip, { title: "About", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "button",
        {
          "aria-label": "About this website",
          disabled: !0,
          className: (0, import_classix6.default)(iconBaseClass2, "cursor-not-allowed"),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_hi.HiQuestionMarkCircle, { size: 24 }, void 0, !1, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/header/header.tsx",
          lineNumber: 26,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Tooltip, { title: "Github", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "a",
        {
          href: "https://github.com/daniserrano7/jira-clone",
          className: iconBaseClass2,
          "aria-label": "Go to my Github",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_ai.AiFillGithub, { size: 24 }, void 0, !1, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/header/header.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SelctTheme, {}, void 0, !1, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(UserProfile, {}, void 0, !1, {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/header/header.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/main.layout.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), MainLayout = ({ user }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(UserContextProvider, { user, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex h-full flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Header, {}, void 0, !1, {
    fileName: "src/app/ui/main/main.layout.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
    fileName: "src/app/ui/main/main.layout.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "src/app/ui/main/main.layout.tsx",
  lineNumber: 9,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "src/app/ui/main/main.layout.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this);

// src/app/routes/__main.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let userId = (await getUserSession(request)).getUser();
  if (!userId)
    return (0, import_node6.redirect)("/login");
  let user = await getUser(userId);
  if (!user)
    throw new Response("Not Found", {
      status: 404
    });
  return (0, import_node6.json)({
    user
  });
};
function AppRoute() {
  let { user } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(MainLayout, { user }, void 0, !1, {
    fileName: "src/app/routes/__main.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects.$projectId.tsx
var projects_projectId_exports = {};
__export(projects_projectId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ProjectRoute,
  loader: () => loader5,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// src/infrastructure/db/project.ts
var getProject = async (projectId, options) => {
  let sortIssuesBy = options == null ? void 0 : options.sortIssuesBy, sortByDate = {
    createdAt: "desc"
  }, sortByPriority = {
    priority: {
      order: "desc"
    }
  }, orderBy = sortIssuesBy === "date" ? [sortByDate, sortByPriority] : [sortByPriority, sortByDate], projectDb = await db.project.findUnique({
    where: {
      id: projectId
    },
    include: {
      users: {
        orderBy: {
          name: "asc"
        }
      },
      categories: {
        include: {
          issues: {
            select: {
              id: !0,
              name: !0,
              priority: !0,
              createdAt: !0,
              reporter: !0,
              asignee: !0
            },
            orderBy
          }
        }
      }
    }
  });
  return projectDb ? {
    id: projectDb.id,
    users: projectDb.users.map(dnull),
    name: projectDb.name,
    description: projectDb.description || "",
    image: projectDb.image,
    categories: projectDb.categories.map((category) => ({
      id: category.id,
      name: category.name,
      type: category.type,
      order: category.order,
      issues: category.issues.map((issue) => ({
        id: issue.id,
        name: issue.name,
        priority: issue.priority,
        reporter: dnull(issue.reporter),
        asignee: dnull(issue.asignee),
        comments: [],
        createdAt: issue.createdAt.getDate(),
        updatedAt: issue.createdAt.getDate()
      }))
    })),
    createdAt: projectDb.createdAt.getDate(),
    updatedAt: projectDb.updatedAt.getDate()
  } : null;
}, getProjectSummary = async (projectId) => {
  let projectSummaryDb = await db.project.findUnique({
    where: { id: projectId },
    select: {
      id: !0,
      name: !0,
      description: !0,
      image: !0,
      createdAt: !0
    }
  });
  return projectSummaryDb ? {
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    description: projectSummaryDb.description || "",
    image: projectSummaryDb.image,
    createdAt: projectSummaryDb.createdAt.getDate()
  } : null;
}, getProjectsSummary = async (userId) => (await db.project.findMany({
  where: {
    users: {
      some: {
        id: userId
      }
    }
  },
  select: {
    id: !0,
    name: !0,
    description: !0,
    image: !0,
    createdAt: !0
  },
  orderBy: {
    createdAt: "asc"
  }
})).map((projectSummaryDb) => ({
  id: projectSummaryDb.id,
  name: projectSummaryDb.name,
  image: projectSummaryDb.image,
  description: projectSummaryDb.description || "",
  createdAt: projectSummaryDb.createdAt.getDate()
})), createProject = async (project) => {
  await db.project.create({
    data: {
      name: project.name,
      description: project.description,
      image: project.image,
      categories: {
        create: project.categories.map((category) => ({
          name: category.name,
          type: category.type,
          order: category.order
        }))
      },
      users: {
        connect: project.userIds.map((userId) => ({ id: userId }))
      }
    },
    include: {
      categories: !0,
      users: !0
    }
  });
}, deleteProject = async (projectId) => {
  await db.project.delete({
    where: {
      id: projectId
    }
  });
};

// src/app/ui/main/project/project.view.tsx
var import_react15 = require("@remix-run/react");

// src/app/ui/main/project/sidebar/sidebar.tsx
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_hi2 = require("react-icons/hi"), import_classix7 = __toESM(require("classix")), import_ri = require("react-icons/ri"), import_im = require("react-icons/im"), import_bs = require("react-icons/bs"), import_tb = require("react-icons/tb"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), Sidebar = (props) => {
  let { projectName, projectDescription, projectImage } = props, [isOpen, setIsOpen] = (0, import_react13.useState)(!0), toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("aside", { className: "relative flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "div",
      {
        className: (0, import_classix7.default)(
          "flex h-full max-w-0 flex-col whitespace-nowrap bg-elevation-surface-sunken opacity-0 duration-300 ease-out",
          isOpen && "w-[240px] max-w-[240px] whitespace-normal opacity-100"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "flex w-full items-start px-5 py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "img",
              {
                src: projectImage,
                width: 28,
                height: 28,
                alt: "project",
                className: "rounded-[3px]"
              },
              void 0,
              !1,
              {
                fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
                lineNumber: 27,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ml-4 w-full text-font", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "font-primary-bold text-lg leading-4", children: projectName }, void 0, !1, {
                fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-2 line-clamp-2 whitespace-normal font-primary-light text-sm leading-4", children: projectDescription }, void 0, !1, {
                fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "flex-grow p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("nav", { className: "flex-grow", children: navItems.map(({ href, name, icon, disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            NavItem,
            {
              href,
              icon,
              name,
              disabled
            },
            href,
            !1,
            {
              fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "div",
      {
        className: (0, import_classix7.default)("r-0 relative z-10 h-full w-3", isOpen ? "ml-0" : "ml-7"),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "absolute -left-[3px] h-full w-[3px] bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0)] opacity-50" }, void 0, !1, {
            fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "button",
            {
              onClick: toggleSidebar,
              className: (0, import_classix7.default)(
                "absolute -left-[12px] mt-6 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full border-none bg-elevation-surface-raised text-icon shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] transition-transform delay-150 duration-200 ease-in hover:bg-icon-brand hover:text-font-inverse",
                !isOpen && "rotate-180"
              ),
              "aria-label": "Toggle sidebar",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_ri.RiArrowDropLeftLine, { size: 24 }, void 0, !1, {
                fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
                lineNumber: 67,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
              lineNumber: 59,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, navItems = [
  {
    href: "board",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_hi2.HiOutlineViewBoards, { size: 24 }, void 0, !1, {
      fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    name: "Board"
  },
  {
    href: "analytics",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_im.ImStatsDots, { size: 20 }, void 0, !1, {
      fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    name: "Analytics"
  },
  {
    href: "backlog",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_bs.BsListNested, { size: 24 }, void 0, !1, {
      fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    name: "Backlog",
    disabled: !0
  },
  {
    href: "server-error",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_bs.BsCloudSlash, { size: 24 }, void 0, !1, {
      fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this),
    name: "Server error"
  },
  {
    href: "not-found",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_tb.TbError404, { size: 24 }, void 0, !1, {
      fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this),
    name: "Not found"
  }
], NavItem = ({ href, icon, name, disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
  import_react14.NavLink,
  {
    to: disabled ? "#" : href,
    className: ({ isActive }) => (0, import_classix7.default)(
      "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
      isActive && !disabled ? "bg-background-neutral text-font-brand" : "text-font-subtlest",
      disabled ? "!cursor-not-allowed hover:bg-transparent" : "hover:bg-background-neutral"
    ),
    children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: (0, import_classix7.default)(disabled && "group-hover:hidden"), children: name }, void 0, !1, {
        fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "span",
        {
          className: (0, import_classix7.default)(
            "itmes-center bg-grey-300 -ml-2 hidden rounded px-2 py-1 text-2xs uppercase disabled:hover:flex",
            disabled && "group-hover:block"
          ),
          children: "Not implemented"
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
          lineNumber: 127,
          columnNumber: 7
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/ui/main/project/sidebar/sidebar.tsx",
    lineNumber: 111,
    columnNumber: 5
  },
  this
);

// src/app/ui/main/project/project.view.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), sectionTitles = {
  board: "Board",
  analytics: "Analytics",
  backlog: "Backlog"
}, defaultSection = "board", ProjectView = ({
  name,
  description,
  image
}) => {
  let section = (0, import_react15.useLocation)().pathname.split("/").slice(-1)[0], sectionTitle = sectionTitles[section] || sectionTitles[defaultSection];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative flex h-full flex-grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Sidebar,
      {
        projectName: name,
        projectDescription: description || "Description undefined",
        projectImage: image || "/images/default-project.png"
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "z-10 flex h-full w-full flex-grow flex-col px-5 py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react15.Link, { to: "/projects", className: "underline underline-offset-[3px]", children: "Projects" }, void 0, !1, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "mx-2", children: "/" }, void 0, !1, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: name }, void 0, !1, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "mb-5 mt-4 font-primary-black text-2xl", children: sectionTitle }, void 0, !1, {
          fileName: "src/app/ui/main/project/project.view.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/project.view.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/project.view.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/project.store.tsx
var import_react16 = require("react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), ProjectContext = (0, import_react16.createContext)(void 0), ProjectContextProvider = ({
  project,
  children
}) => {
  let [search, setSearch] = (0, import_react16.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ProjectContext.Provider, { value: { project, search, setSearch }, children }, void 0, !1, {
    fileName: "src/app/ui/main/project/project.store.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, useProjectStore = () => {
  let projectStore = (0, import_react16.useContext)(ProjectContext);
  if (!projectStore)
    throw new Error("Project context not found");
  return projectStore;
};

// src/app/routes/__main/projects.$projectId.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta2 = ({ data }) => {
  let { projectSummary } = data, title = `Jira clone - ${projectSummary.name || "Project"}`, description = "See all your projects in one place. Create new ones and assigne team members.", image = "https://jira-clone.fly.dev/static/images/readme/project.png", url = `https://jira-clone.fly.dev/projects/${projectSummary.id}`, tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
}, loader5 = async ({ request, params }) => {
  let url = new URL(request.url), projectId = params.projectId;
  (0, import_tiny_invariant.default)(params.projectId, "params.projectId is required");
  let projectSummary = await getProjectSummary(projectId);
  if (!projectSummary)
    throw new Response("Not Found", {
      status: 404
    });
  return url.pathname === `/projects/${projectId}` ? (0, import_node7.redirect)(`/projects/${projectId}/board`) : (0, import_node7.json)({ projectSummary });
};
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Error500, { message: "The Project page failed. Navigate to the projects page", href: "/projects" }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Error404, { message: "Project not found. Navigate to the projects page", href: "/projects" }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function ProjectRoute() {
  let { projectSummary } = (0, import_react17.useLoaderData)(), { name, description, image } = projectSummary;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ProjectView, { name, description, image }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects.$projectId/server-error.tsx
var server_error_exports = {};
__export(server_error_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Error500Route,
  loader: () => loader6,
  meta: () => meta3
});
var import_react18 = require("react"), import_react_toastify2 = require("react-toastify");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), meta3 = () => {
  let title = "Jira clone - Error";
  return [{ title }, ...formatTags({
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description: "Manage your project. Create, edit, delete new issues and assigne them."
  })];
}, loader6 = async () => {
  throw new Error("Fail from Error500Route");
};
function ErrorBoundary3({ error }) {
  return (0, import_react18.useEffect)(() => {
    import_react_toastify2.toast.error("Try reloading the page.");
  }, []), console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Error500, { message: "The Server error page failed. This is an example of a server error page (check network tab). Navigate to the board page", href: "board" }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function Error500Route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: "This will never show because of the server error 500" }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects.$projectId/analytics.tsx
var analytics_exports = {};
__export(analytics_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => AnalyticsRoute,
  loader: () => loader7,
  meta: () => meta4
});
var import_node8 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// src/app/ui/main/project/analytics/analytics.view.jsx
var import_react19 = require("react"), import_recharts = require("recharts"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), tasks = [
  { id: 1, category: "to-do" },
  { id: 2, category: "completed" },
  { id: 3, category: "to-do" },
  { id: 4, category: "in-progress" },
  { id: 5, category: "to-do" },
  { id: 6, category: "delayed" },
  { id: 7, category: "in-progress" },
  { id: 8, category: "completed" },
  { id: 9, category: "completed" },
  { id: 10, category: "in-progress" }
], AnalyticsSection = () => {
  let taskCategories = {
    "to-do": 0,
    completed: 0,
    "in-progress": 0,
    delayed: 0
  };
  tasks.forEach((task) => {
    task.category in taskCategories && taskCategories[task.category]++;
  });
  let data = Object.keys(taskCategories).map((category) => ({
    category,
    count: taskCategories[category]
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full p-4 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        import_recharts.BarChart,
        {
          width: 200,
          height: 250,
          data,
          margin: {
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
              fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.XAxis, { dataKey: "category" }, void 0, !1, {
              fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.YAxis, {}, void 0, !1, {
              fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
              fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Legend, {}, void 0, !1, {
              fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Bar, { dataKey: "count", fill: "#8884d8" }, void 0, !1, {
              fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
          lineNumber: 56,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.PieChart, { width: 200, height: 250, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          import_recharts.Pie,
          {
            data,
            dataKey: "count",
            nameKey: "category",
            cx: "50%",
            cy: "50%",
            outerRadius: 70,
            fill: "#8884d8",
            label: !0
          },
          void 0,
          !1,
          {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 79,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
          fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
          lineNumber: 89,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_recharts.AreaChart,
      {
        width: 500,
        height: 250,
        data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 108,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.XAxis, { dataKey: "category" }, void 0, !1, {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 109,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.YAxis, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 110,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 111,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Legend, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 112,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_recharts.Area, { type: "monotone", dataKey: "count", fill: "#8884d8" }, void 0, !1, {
            fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
            lineNumber: 113,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
        lineNumber: 97,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/analytics/analytics.view.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}, analytics_view_default = AnalyticsSection;

// src/app/routes/__main/projects.$projectId/analytics.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), meta4 = ({ data }) => {
  let { project } = data, title = "Jira clone - Analytics", description = "Manage your project. Create, edit, delete new issues and assigne them.", image = "https://jira-clone.fly.dev/static/images/readme/project.png", url = `https://jira-clone.fly.dev/projects/${project.id}/analytics`, tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
}, loader7 = async ({ request, params }) => {
  let url = new URL(request.url), projectId = params.projectId;
  (0, import_tiny_invariant2.default)(params.projectId, "params.projectId is required");
  let project = await getProject(projectId);
  if (!project)
    throw new Response("Not Found", {
      status: 404
    });
  return url.pathname === `/projects/${projectId}` ? (0, import_node8.redirect)(`/projects/${projectId}/analytics`) : (0, import_node8.json)({ project });
};
function ErrorBoundary4({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Error500, { message: "The analytics page failed. Navigate to the board page", href: "board" }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function AnalyticsRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(analytics_view_default, {}, void 0, !1, {
      fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "src/app/routes/__main/projects.$projectId/analytics.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// src/app/routes/__main/projects.$projectId/board.tsx
var board_exports = {};
__export(board_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action3,
  default: () => BoardRoute,
  loader: () => loader8,
  meta: () => meta5
});
var import_node9 = require("@remix-run/node"), import_react45 = require("@remix-run/react"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// src/domain/filter/filter.ts
var sorts = ["date", "priority"], DEFAULT_SORT = "date", sortDict = {
  date: "Date",
  priority: "Priority"
}, sortList = Object.entries(sortDict).map(
  ([key, value]) => ({
    id: key,
    label: value
  })
), isValidSort = (sort) => sorts.includes(sort);

// src/infrastructure/db/issue.ts
var getIssue = async (issueId) => {
  let issueDb = await db.issue.findUnique({
    where: {
      id: issueId
    },
    include: {
      asignee: !0,
      reporter: !0,
      category: !0,
      priority: !0,
      comments: {
        include: {
          user: !0
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  });
  return issueDb ? {
    id: issueDb.id,
    name: issueDb.name,
    description: issueDb.description || void 0,
    categoryType: issueDb.category.type,
    priority: issueDb.priority,
    asignee: dnull(issueDb.asignee),
    reporter: dnull(issueDb.reporter),
    comments: issueDb.comments.map((comment) => ({
      ...comment,
      createdAt: comment.createdAt.getTime(),
      updatedAt: comment.updatedAt.getTime(),
      user: dnull({
        ...comment.user,
        createdAt: comment.user.createdAt.getTime(),
        updatedAt: comment.user.updatedAt.getTime()
      })
    })),
    createdAt: issueDb.createdAt.getTime(),
    updatedAt: issueDb.updatedAt.getTime()
  } : null;
}, createIssue = async (issue) => (await db.issue.create({
  data: {
    ...issue,
    priority: void 0,
    priorityId: issue.priority,
    comments: {
      create: issue.comments.map((comment) => ({
        ...{
          id: comment.id,
          message: comment.message,
          user: { connect: { id: comment.user.id } }
        },
        id: void 0
      }))
    }
  }
})).id, updateIssue = async (issue) => {
  await db.issue.update({
    where: {
      id: issue.id
    },
    data: {
      ...issue,
      priority: void 0,
      priorityId: issue.priority,
      comments: {
        upsert: issue.comments.map((comment) => {
          let commentInput = {
            id: comment.id,
            message: comment.message,
            user: { connect: { id: comment.user.id } }
          };
          return {
            where: { id: comment.id },
            create: {
              ...commentInput,
              id: void 0
            },
            update: commentInput
          };
        })
      }
    }
  });
}, updateIssueCategory = async ({ issueId, categoryId }) => {
  await db.issue.update({
    where: {
      id: issueId
    },
    data: {
      category: {
        connect: {
          id: categoryId
        }
      }
    }
  });
}, deleteIssue = async (issueId) => {
  await db.issue.delete({
    where: {
      id: issueId
    }
  });
};

// src/app/ui/main/project/board/board.view.tsx
var import_react43 = require("react"), import_react44 = require("@remix-run/react"), import_remix_utils = require("remix-utils");

// node_modules/react-dnd/dist/core/DndContext.js
var import_react20 = require("react"), DndContext = (0, import_react20.createContext)({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime = require("react/jsx-runtime");

// node_modules/dnd-core/dist/createDragDropManager.js
var import_redux = require("redux");

// node_modules/@react-dnd/invariant/dist/index.js
function invariant3(condition, format, ...args) {
  if (isProduction() && format === void 0)
    throw new Error("invariant requires an error message argument");
  if (!condition) {
    let error;
    if (format === void 0)
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      })), error.name = "Invariant Violation";
    }
    throw error.framesToPop = 1, error;
  }
}
function isProduction() {
  return typeof process < "u" && !1;
}

// node_modules/dnd-core/dist/utils/js_utils.js
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input == "object";
}
function xor(itemsA, itemsB) {
  let map = /* @__PURE__ */ new Map(), insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return map.forEach((count, key) => {
    count === 1 && result.push(key);
  }), result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

// node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS", BEGIN_DRAG = "dnd-core/BEGIN_DRAG", PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", HOVER = "dnd-core/HOVER", DROP = "dnd-core/DROP", END_DRAG = "dnd-core/END_DRAG";

// node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function(sourceIds = [], options = {
    publishSource: !0
  }) {
    let { publishSource = !0, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options, monitor = manager.getMonitor(), registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset)), verifyInvariants(sourceIds, monitor, registry);
    let sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2)
        throw new Error("getSourceClientOffset must be defined");
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2), sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    let item = registry.getSource(sourceId).beginDrag(monitor, sourceId);
    if (item == null)
      return;
    verifyItemIsObject(item), registry.pinSource(sourceId);
    let itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant3(!monitor.isDragging(), "Cannot call beginDrag while dragging."), sourceIds.forEach(function(sourceId) {
    invariant3(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant3(typeof getSourceClientOffset2 == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant3(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--)
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  return sourceId;
}

// node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function(options = {}) {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyInvariants2(monitor), getDroppableTargets(monitor).forEach((targetId, index) => {
      let dropResult = determineDropResult(targetId, index, registry, monitor), action9 = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action9);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant3(monitor.isDragging(), "Cannot call drop while not dragging."), invariant3(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  let target = registry.getTarget(targetId), dropResult = target ? target.drop(monitor, targetId) : void 0;
  return verifyDropResultType(dropResult), typeof dropResult > "u" && (dropResult = index === 0 ? {} : monitor.getDropResult()), dropResult;
}
function verifyDropResultType(dropResult) {
  invariant3(typeof dropResult > "u" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  let targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  return targetIds.reverse(), targetIds;
}

// node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function() {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyIsDragging(monitor);
    let sourceId = monitor.getSourceId();
    return sourceId != null && (registry.getSource(sourceId, !0).endDrag(monitor, sourceId), registry.unpinSource()), {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant3(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  return draggedItemType === null ? targetType === null : Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

// node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    let targetIds = targetIdsArg.slice(0), monitor = manager.getMonitor(), registry = manager.getRegistry(), draggedItemType = monitor.getItemType();
    return removeNonMatchingTargetIds(targetIds, registry, draggedItemType), checkInvariants(targetIds, monitor, registry), hoverAllTargets(targetIds, monitor, registry), {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant3(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant3(monitor.isDragging(), "Cannot call hover while not dragging."), invariant3(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    let targetId = targetIds[i];
    invariant3(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    let target = registry.getTarget(targetId);
    invariant3(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    let targetId = targetIds[i], targetType = registry.getTargetType(targetId);
    matchesType(targetType, draggedItemType) || targetIds.splice(i, 1);
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    registry.getTarget(targetId).hover(monitor, targetId);
  });
}

// node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function() {
    if (manager.getMonitor().isDragging())
      return {
        type: PUBLISH_DRAG_SOURCE
      };
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var DragDropManagerImpl = class {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    let manager = this, { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        let action9 = actionCreator.apply(manager, args);
        typeof action9 < "u" && dispatch(action9);
      };
    }
    let actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      let action9 = actions[key];
      return boundActions[key] = bindActionCreator(action9), boundActions;
    }, {});
  }
  dispatch(action9) {
    this.store.dispatch(action9);
  }
  constructor(store, monitor) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      let shouldSetUp = this.store.getState().refCount > 0;
      this.backend && (shouldSetUp && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !shouldSetUp && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = store, this.monitor = monitor, store.subscribe(this.handleRefCountChange);
  }
};

// node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  let { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  return !clientOffset || !initialClientOffset || !initialSourceClientOffset ? null : subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  let { clientOffset, initialClientOffset } = state;
  return !clientOffset || !initialClientOffset ? null : subtract(clientOffset, initialClientOffset);
}

// node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [], ALL = [];
NONE.__IS_NONE__ = !0;
ALL.__IS_ALL__ = !0;
function areDirty(dirtyIds, handlerIds) {
  return dirtyIds === NONE ? !1 : dirtyIds === ALL || typeof handlerIds > "u" ? !0 : intersection(handlerIds, dirtyIds).length > 0;
}

// node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options = {}) {
    let { handlerIds } = options;
    invariant3(typeof listener == "function", "listener must be a function."), invariant3(typeof handlerIds > "u" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId, handleChange = () => {
      let state = this.store.getState(), currentStateId = state.stateId;
      try {
        currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds) || listener();
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant3(typeof listener == "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset, handleChange = () => {
      let nextState = this.store.getState().dragOffset;
      nextState !== previousState && (previousState = nextState, listener());
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId);
    return invariant3(source, `Expected to find a valid source. sourceId=${sourceId}`), this.isDragging() ? !1 : source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId)
      return !1;
    let target = this.registry.getTarget(targetId);
    if (invariant3(target, `Expected to find a valid target. targetId=${targetId}`), !this.isDragging() || this.didDrop())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId, !0);
    if (invariant3(source, `Expected to find a valid source. sourceId=${sourceId}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    let sourceType = this.registry.getSourceType(sourceId), draggedItemType = this.getItemType();
    return sourceType !== draggedItemType ? !1 : source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: !1
  }) {
    if (!targetId)
      return !1;
    let { shallow } = options;
    if (!this.isDragging())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType))
      return !1;
    let targetIds = this.getTargetIds();
    if (!targetIds.length)
      return !1;
    let index = targetIds.indexOf(targetId);
    return shallow ? index === targetIds.length - 1 : index > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store, this.registry = registry;
  }
};

// node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof global < "u" ? global : self, BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function() {
    let timeoutHandle = setTimeout(handleTimer, 0), intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle), clearInterval(intervalHandle), callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1, observer = new BrowserMutationObserver(callback), node = document.createTextNode("");
  return observer.observe(node, {
    characterData: !0
  }), function() {
    toggle = -toggle, node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);

// node_modules/@react-dnd/asap/dist/AsapQueue.js
var AsapQueue = class {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    let { queue: q, requestFlush } = this;
    q.length || (requestFlush(), this.flushing = !0), q[q.length] = task;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      let { queue: q } = this;
      for (; this.index < q.length; ) {
        let currentIndex = this.index;
        if (this.index++, q[currentIndex].call(), this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++)
            q[scan] = q[scan + this.index];
          q.length -= this.index, this.index = 0;
        }
      }
      q.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (err) => {
      this.pendingErrors.push(err), this.requestErrorThrow();
    }, this.requestFlush = makeRequestCall(this.flush), this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
};

// node_modules/@react-dnd/asap/dist/RawTask.js
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError, this.release = release, this.task = null;
  }
};

// node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    let tasks2 = this.freeTasks, t1 = tasks2.length ? tasks2.pop() : new RawTask(
      this.onError,
      (t) => tasks2[tasks2.length] = t
    );
    return t1.task = task, t1;
  }
  constructor(onError) {
    this.onError = onError, this.freeTasks = [];
  }
};

// node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue(), taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE", ADD_TARGET = "dnd-core/ADD_TARGET", REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// node_modules/dnd-core/dist/contracts.js
function validateSourceContract(source) {
  invariant3(typeof source.canDrag == "function", "Expected canDrag to be a function."), invariant3(typeof source.beginDrag == "function", "Expected beginDrag to be a function."), invariant3(typeof source.endDrag == "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant3(typeof target.canDrop == "function", "Expected canDrop to be a function."), invariant3(typeof target.hover == "function", "Expected hover to be a function."), invariant3(typeof target.drop == "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, !1)
    );
    return;
  }
  invariant3(typeof type == "string" || typeof type == "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2.SOURCE = "SOURCE", HandlerRole2.TARGET = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  let id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  let entries = map.entries(), isDone = !1;
  do {
    let { done, value: [, value] } = entries.next();
    if (value === searchValue)
      return !0;
    isDone = !!done;
  } while (!isDone);
  return !1;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type), validateSourceContract(source);
    let sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    return this.store.dispatch(addSource(sourceId)), sourceId;
  }
  addTarget(type, target) {
    validateType(type, !0), validateTargetContract(target);
    let targetId = this.addHandler(HandlerRole.TARGET, type, target);
    return this.store.dispatch(addTarget(targetId)), targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = !1) {
    return invariant3(this.isSourceId(sourceId), "Expected a valid source ID."), includePinned && sourceId === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(sourceId);
  }
  getTarget(targetId) {
    return invariant3(this.isTargetId(targetId), "Expected a valid target ID."), this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    return invariant3(this.isSourceId(sourceId), "Expected a valid source ID."), this.types.get(sourceId);
  }
  getTargetType(targetId) {
    return invariant3(this.isTargetId(targetId), "Expected a valid target ID."), this.types.get(targetId);
  }
  isSourceId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant3(this.getSource(sourceId), "Expected an existing source."), this.store.dispatch(removeSource(sourceId)), asap(() => {
      this.dragSources.delete(sourceId), this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant3(this.getTarget(targetId), "Expected an existing target."), this.store.dispatch(removeTarget(targetId)), this.dropTargets.delete(targetId), this.types.delete(targetId);
  }
  pinSource(sourceId) {
    let source = this.getSource(sourceId);
    invariant3(source, "Expected an existing source."), this.pinnedSourceId = sourceId, this.pinnedSource = source;
  }
  unpinSource() {
    invariant3(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    let id = getNextHandlerId(role);
    return this.types.set(id, type), role === HandlerRole.SOURCE ? this.dragSources.set(id, handler) : role === HandlerRole.TARGET && this.dropTargets.set(id, handler), id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = store;
  }
};

// node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  return !offsetA && !offsetB ? !0 : !offsetA || !offsetB ? !1 : offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; ++i)
    if (!isEqual(a[i], b[i]))
      return !1;
  return !0;
}

// node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action9) {
  switch (action9.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  let { targetIds = [], prevTargetIds = [] } = action9.payload, result = xor(targetIds, prevTargetIds);
  if (!(result.length > 0 || !areArraysEqual(targetIds, prevTargetIds)))
    return NONE;
  let prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1], innermostTargetId = targetIds[targetIds.length - 1];
  return prevInnermostTargetId !== innermostTargetId && (prevInnermostTargetId && result.push(prevInnermostTargetId), innermostTargetId && result.push(innermostTargetId)), result;
}

// node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action9) {
  let { payload } = action9;
  switch (action9.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      return areCoordsEqual(state.clientOffset, payload.clientOffset) ? state : _objectSpread2({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/dragOperation.js
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function reduce3(state = initialState2, action9) {
  let { payload } = action9;
  switch (action9.type) {
    case BEGIN_DRAG:
      return _objectSpread3({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread3({}, state, {
        isSourcePublic: !0
      });
    case HOVER:
      return _objectSpread3({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      return state.targetIds.indexOf(payload.targetId) === -1 ? state : _objectSpread3({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread3({}, state, {
        dropResult: payload.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread3({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action9) {
  switch (action9.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/stateId.js
function reduce5(state = 0) {
  return state + 1;
}

// node_modules/dnd-core/dist/reducers/index.js
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action9) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action9.type,
      payload: _objectSpread4({}, action9.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action9),
    refCount: reduce4(state.refCount, action9),
    dragOperation: reduce3(state.dragOperation, action9),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = !1) {
  let store = makeStoreInstance(debugMode), monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store)), manager = new DragDropManagerImpl(store, monitor), backend = backendFactory(manager, globalContext, backendOptions);
  return manager.receiveBackend(backend), manager;
}
function makeStoreInstance(debugMode) {
  let reduxDevTools = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0, import_redux.createStore)(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/react-dnd/dist/core/DndProvider.js
var import_react21 = require("react");
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++)
      key = sourceSymbolKeys[i], !(excluded.indexOf(key) >= 0) && Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var refCount = 0, INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), DndProvider = /* @__PURE__ */ (0, import_react21.memo)(function(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  let [manager, isGlobalInstance] = getDndContextValue(props);
  return (0, import_react21.useEffect)(() => {
    if (isGlobalInstance) {
      let context = getGlobalContext();
      return ++refCount, () => {
        --refCount === 0 && (context[INSTANCE_SYM] = null);
      };
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props)
    return [
      {
        dragDropManager: props.manager
      },
      !1
    ];
  let manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode), isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  let ctx = context;
  return ctx[INSTANCE_SYM] || (ctx[INSTANCE_SYM] = {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  }), ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global < "u" ? global : window;
}

// node_modules/react-dnd/dist/hooks/useCollector.js
var import_fast_deep_equal = __toESM(require("fast-deep-equal"), 1), import_react23 = require("react");

// node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var import_react22 = require("react"), useIsomorphicLayoutEffect = typeof window < "u" ? import_react22.useLayoutEffect : import_react22.useEffect;

// node_modules/react-dnd/dist/hooks/useCollector.js
function useCollector(monitor, collect, onUpdate) {
  let [collected, setCollected] = (0, import_react23.useState)(
    () => collect(monitor)
  ), updateCollected = (0, import_react23.useCallback)(() => {
    let nextValue = collect(monitor);
    (0, import_fast_deep_equal.default)(collected, nextValue) || (setCollected(nextValue), onUpdate && onUpdate());
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  return useIsomorphicLayoutEffect(updateCollected), [
    collected,
    updateCollected
  ];
}

// node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function useMonitorOutput(monitor, collect, onCollect) {
  let [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  return useIsomorphicLayoutEffect(function() {
    let handlerId = monitor.getHandlerId();
    if (handlerId != null)
      return monitor.subscribeToStateChange(updateCollected, {
        handlerIds: [
          handlerId
        ]
      });
  }, [
    monitor,
    updateCollected
  ]), collected;
}

// node_modules/react-dnd/dist/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}

// node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var import_react24 = require("react");
function useOptionalFactory(arg, deps) {
  let memoDeps = [
    ...deps || []
  ];
  return deps == null && typeof arg != "function" && memoDeps.push(arg), (0, import_react24.useMemo)(() => typeof arg == "function" ? arg() : arg, memoDeps);
}

// node_modules/react-dnd/dist/hooks/useDrag/connectors.js
var import_react25 = require("react");
function useConnectDragSource(connector) {
  return (0, import_react25.useMemo)(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return (0, import_react25.useMemo)(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
var import_react28 = require("react");

// node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
var isCallingCanDrag = !1, isCallingIsDragging = !1, DragSourceMonitorImpl = class {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant3(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingCanDrag = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    invariant3(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingIsDragging = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = !1;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null, this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js
var isCallingCanDrop = !1, DropTargetMonitorImpl = class {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    invariant3(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return isCallingCanDrop = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = !1;
    }
  }
  isOver(options) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, options) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null, this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
  let registry = manager.getRegistry(), targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  let registry = manager.getRegistry(), sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}

// node_modules/@react-dnd/shallowequal/dist/index.js
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0)
    return !!compareResult;
  if (objA === objB)
    return !0;
  if (typeof objA != "object" || !objA || typeof objB != "object" || !objB)
    return !1;
  let keysA = Object.keys(objA), keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return !1;
  let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    let key = keysA[idx];
    if (!bHasOwnProperty(key))
      return !1;
    let valueA = objA[key], valueB = objB[key];
    if (compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0, compareResult === !1 || compareResult === void 0 && valueA !== valueB)
      return !1;
  }
  return !0;
}

// node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj == "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}

// node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var import_react26 = require("react");
function throwIfCompositeComponentElement(element) {
  if (typeof element.type == "string")
    return;
  let displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!(0, import_react26.isValidElement)(elementOrNode)) {
      let node = elementOrNode;
      return hook(node, options), node;
    }
    let element = elementOrNode;
    return throwIfCompositeComponentElement(element), cloneWithRef(element, options ? (node) => hook(node, options) : hook);
  };
}
function wrapConnectorHooks(hooks) {
  let wrappedHooks = {};
  return Object.keys(hooks).forEach((key) => {
    let hook = hooks[key];
    if (key.endsWith("Ref"))
      wrappedHooks[key] = hooks[key];
    else {
      let wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  }), wrappedHooks;
}
function setRef(ref, node) {
  typeof ref == "function" ? ref(node) : ref.current = node;
}
function cloneWithRef(element, newRef) {
  let previousRef = element.ref;
  return invariant3(typeof previousRef != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), previousRef ? (0, import_react26.cloneElement)(element, {
    ref: (node) => {
      setRef(previousRef, node), setRef(newRef, node);
    }
  }) : (0, import_react26.cloneElement)(element, {
    ref: newRef
  });
}

// node_modules/react-dnd/dist/internals/SourceConnector.js
var SourceConnector = class {
  receiveHandlerId(newHandlerId) {
    this.handlerId !== newHandlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    let didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    let dragSource = this.dragSource, didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return didChange && this.disconnectDragSource(), this.handlerId ? dragSource ? (didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = dragSource, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions)), didChange) : (this.lastConnectedDragSource = dragSource, didChange) : didChange;
  }
  reconnectDragPreview(forceDidChange = !1) {
    let dragPreview = this.dragPreview, didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange && this.disconnectDragPreview(), !!this.handlerId) {
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = dragPreview, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource(), this.dragSourceOptions = options || null, isRef(node) ? this.dragSourceRef = node : this.dragSourceNode = node, this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview(), this.dragPreviewOptions = options || null, isRef(node) ? this.dragPreviewRef = node : this.dragPreviewNode = node, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = backend;
  }
};

// node_modules/react-dnd/dist/internals/TargetConnector.js
var TargetConnector = class {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    let didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    didChange && this.disconnectDropTarget();
    let dropTarget = this.dropTarget;
    if (this.handlerId) {
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = dropTarget, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions));
    }
  }
  receiveHandlerId(newHandlerId) {
    newHandlerId !== this.handlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget(), this.dropTargetOptions = options, isRef(node) ? this.dropTargetRef = node : this.dropTargetNode = node, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = backend;
  }
};

// node_modules/react-dnd/dist/hooks/useDragDropManager.js
var import_react27 = require("react");
function useDragDropManager() {
  let { dragDropManager } = (0, import_react27.useContext)(DndContext);
  return invariant3(dragDropManager != null, "Expected drag drop context"), dragDropManager;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  let manager = useDragDropManager(), connector = (0, import_react28.useMemo)(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dragSourceOptions = dragSourceOptions || null, connector.reconnect(), () => connector.disconnectDragSource()), [
    connector,
    dragSourceOptions
  ]), useIsomorphicLayoutEffect(() => (connector.dragPreviewOptions = dragPreviewOptions || null, connector.reconnect(), () => connector.disconnectDragPreview()), [
    connector,
    dragPreviewOptions
  ]), connector;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
var import_react29 = require("react");
function useDragSourceMonitor() {
  let manager = useDragDropManager();
  return (0, import_react29.useMemo)(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
var import_react30 = require("react");

// node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var DragSourceImpl = class {
  beginDrag() {
    let spec = this.spec, monitor = this.monitor, result = null;
    return typeof spec.item == "object" ? result = spec.item : typeof spec.item == "function" ? result = spec.item(monitor) : result = {}, result ?? null;
  }
  canDrag() {
    let spec = this.spec, monitor = this.monitor;
    return typeof spec.canDrag == "boolean" ? spec.canDrag : typeof spec.canDrag == "function" ? spec.canDrag(monitor) : !0;
  }
  isDragging(globalMonitor, target) {
    let spec = this.spec, monitor = this.monitor, { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    let spec = this.spec, monitor = this.monitor, connector = this.connector, { end } = spec;
    end && end(monitor.getItem(), monitor), connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec, this.monitor = monitor, this.connector = connector;
  }
};

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  let handler = (0, import_react30.useMemo)(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  return (0, import_react30.useEffect)(() => {
    handler.spec = spec;
  }, [
    spec
  ]), handler;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
var import_react31 = require("react");
function useDragType(spec) {
  return (0, import_react31.useMemo)(() => {
    let result = spec.type;
    return invariant3(result != null, "spec.type must be defined"), result;
  }, [
    spec
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function useRegisteredDragSource(spec, monitor, connector) {
  let manager = useDragDropManager(), handler = useDragSource(spec, monitor, connector), itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function() {
    if (itemType != null) {
      let [handlerId, unregister] = registerSource(itemType, handler, manager);
      return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
    }
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps);
  invariant3(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  let monitor = useDragSourceMonitor(), connector = useDragSourceConnector(spec.options, spec.previewOptions);
  return useRegisteredDragSource(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}

// node_modules/react-dnd/dist/hooks/useDrop/connectors.js
var import_react32 = require("react");
function useConnectDropTarget(connector) {
  return (0, import_react32.useMemo)(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
var import_react33 = require("react");
function useDropTargetConnector(options) {
  let manager = useDragDropManager(), connector = (0, import_react33.useMemo)(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dropTargetOptions = options || null, connector.reconnect(), () => connector.disconnectDropTarget()), [
    options
  ]), connector;
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
var import_react34 = require("react");
function useDropTargetMonitor() {
  let manager = useDragDropManager();
  return (0, import_react34.useMemo)(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
var import_react35 = require("react");
function useAccept(spec) {
  let { accept } = spec;
  return (0, import_react35.useMemo)(() => (invariant3(spec.accept != null, "accept must be defined"), Array.isArray(accept) ? accept : [
    accept
  ]), [
    accept
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
var import_react36 = require("react");

// node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var DropTargetImpl = class {
  canDrop() {
    let spec = this.spec, monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : !0;
  }
  hover() {
    let spec = this.spec, monitor = this.monitor;
    spec.hover && spec.hover(monitor.getItem(), monitor);
  }
  drop() {
    let spec = this.spec, monitor = this.monitor;
    if (spec.drop)
      return spec.drop(monitor.getItem(), monitor);
  }
  constructor(spec, monitor) {
    this.spec = spec, this.monitor = monitor;
  }
};

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  let dropTarget = (0, import_react36.useMemo)(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  return (0, import_react36.useEffect)(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]), dropTarget;
}

// node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function useRegisteredDropTarget(spec, monitor, connector) {
  let manager = useDragDropManager(), dropTarget = useDropTarget(spec, monitor), accept = useAccept(spec);
  useIsomorphicLayoutEffect(function() {
    let [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps), monitor = useDropTargetMonitor(), connector = useDropTargetConnector(spec.options);
  return useRegisteredDropTarget(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}

// node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  return () => (result == null && (result = fn()), result);
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  let set = /* @__PURE__ */ new Set(), insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return set.forEach(
    (key) => result.push(key)
  ), result;
}

// node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    let previousLength = this.entered.length, isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    return this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]), previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    let previousLength = this.entered.length;
    return this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode), previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [], this.isNodeInDocument = isNodeInDocument;
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${property}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      let newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        let propertyFn = this.config.exposeProperties[property];
        propertyFn != null && (newProperties[property] = {
          value: propertyFn(dataTransfer, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config, this.item = {}, this.initializeExposedProperties();
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL2
});
var FILE = "__NATIVE_FILE__", URL2 = "__NATIVE_URL__", TEXT = "__NATIVE_TEXT__", HTML = "__NATIVE_HTML__";

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  let result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result ?? defaultValue;
}

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL2]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split(`
`),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer) {
  let config = nativeTypesConfig[type];
  if (!config)
    throw new Error(`native type ${type} has no configuration`);
  let result = new NativeDragSource(config);
  return result.loadDataTransfer(dataTransfer), result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer)
    return null;
  let dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    let typeConfig = nativeTypesConfig[nativeItemType];
    return typeConfig != null && typeConfig.matchesTypes ? typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    ) : !1;
  })[0] || null;
}

// node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
), isSafari = memoize(
  () => Boolean(window.safari)
);

// node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    let { xs, ys, c1s, c2s, c3s } = this, i = xs.length - 1;
    if (x === xs[i])
      return ys[i];
    let low = 0, high = c3s.length - 1, mid;
    for (; low <= high; ) {
      mid = Math.floor(0.5 * (low + high));
      let xHere = xs[mid];
      if (xHere < x)
        low = mid + 1;
      else if (xHere > x)
        high = mid - 1;
      else
        return ys[mid];
    }
    i = Math.max(0, high);
    let diff = x - xs[i], diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    let { length } = xs, indexes = [];
    for (let i = 0; i < length; i++)
      indexes.push(i);
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    let dys = [], dxs = [], ms = [], dx, dy;
    for (let i1 = 0; i1 < length - 1; i1++)
      dx = xs[i1 + 1] - xs[i1], dy = ys[i1 + 1] - ys[i1], dxs.push(dx), dys.push(dy), ms.push(dy / dx);
    let c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      let m2 = ms[i2], mNext = ms[i2 + 1];
      if (m2 * mNext <= 0)
        c1s.push(0);
      else {
        dx = dxs[i2];
        let dxNext = dxs[i2 + 1], common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    let c2s = [], c3s = [], m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      let c1 = c1s[i3], invDx = 1 / dxs[i3], common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx), c3s.push(common * invDx * invDx);
    }
    this.xs = xs, this.ys = ys, this.c1s = c1s, this.c2s = c2s, this.c3s = c3s;
  }
};

// node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  let el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el)
    return null;
  let { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !(!((ref = document.documentElement) === null || ref === void 0) && ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth, dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  return isSafari() && isImage && (dragPreviewHeight /= window.devicePixelRatio, dragPreviewWidth /= window.devicePixelRatio), {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  let isImage = isImageNode(dragPreview), dragPreviewNodeOffsetFromClient = getNodeClientOffset(isImage ? sourceNode : dragPreview), offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  }, { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode, { anchorX, anchorY } = anchorPoint, { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), calculateYOffset = () => {
    let y = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]).interpolate(anchorY);
    return isSafari() && isImage && (y += (window.devicePixelRatio - 1) * dragPreviewHeight), y;
  }, calculateXOffset = () => new MonotonicInterpolant([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    offsetFromDragPreview.x,
    // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
  ]).interpolate(anchorX), { offsetX, offsetY } = offsetPoint, isManualOffsetX = offsetX === 0 || offsetX, isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var ref;
    return !((ref = this.globalContext) === null || ref === void 0) && ref.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null, this.globalContext = globalContext, this.optionsArgs = options;
  }
};

// node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty5(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
var HTML5BackendImpl = class {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    let root = this.rootElement;
    if (root !== void 0) {
      if (root.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      root.__isReactDndBackendSetUp = !0, this.addEventListeners(root);
    }
  }
  teardown() {
    let root = this.rootElement;
    if (root !== void 0 && (root.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var ref;
      (ref = this.window) === null || ref === void 0 || ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    return this.sourcePreviewNodeOptions.set(sourceId, options), this.sourcePreviewNodes.set(sourceId, node), () => {
      this.sourcePreviewNodes.delete(sourceId), this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node), this.sourceNodeOptions.set(sourceId, options);
    let handleDragStart = (e) => this.handleDragStart(e, sourceId), handleSelectStart = (e) => this.handleSelectStart(e);
    return node.setAttribute("draggable", "true"), node.addEventListener("dragstart", handleDragStart), node.addEventListener("selectstart", handleSelectStart), () => {
      this.sourceNodes.delete(sourceId), this.sourceNodeOptions.delete(sourceId), node.removeEventListener("dragstart", handleDragStart), node.removeEventListener("selectstart", handleSelectStart), node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    let handleDragEnter = (e) => this.handleDragEnter(e, targetId), handleDragOver = (e) => this.handleDragOver(e, targetId), handleDrop = (e) => this.handleDrop(e, targetId);
    return node.addEventListener("dragenter", handleDragEnter), node.addEventListener("dragover", handleDragOver), node.addEventListener("drop", handleDrop), () => {
      node.removeEventListener("dragenter", handleDragEnter), node.removeEventListener("dragover", handleDragOver), node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    target.addEventListener && (target.addEventListener("dragstart", this.handleTopDragStart), target.addEventListener("dragstart", this.handleTopDragStartCapture, !0), target.addEventListener("dragend", this.handleTopDragEndCapture, !0), target.addEventListener("dragenter", this.handleTopDragEnter), target.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.addEventListener("dragover", this.handleTopDragOver), target.addEventListener("dragover", this.handleTopDragOverCapture, !0), target.addEventListener("drop", this.handleTopDrop), target.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(target) {
    target.removeEventListener && (target.removeEventListener("dragstart", this.handleTopDragStart), target.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), target.removeEventListener("dragend", this.handleTopDragEndCapture, !0), target.removeEventListener("dragenter", this.handleTopDragEnter), target.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.removeEventListener("dragover", this.handleTopDragOver), target.removeEventListener("dragover", this.handleTopDragOverCapture, !0), target.removeEventListener("drop", this.handleTopDrop), target.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread5({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread5({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    let itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = createNativeDragSource(type, dataTransfer), this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = node;
    let MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 || ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, sourceId) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(sourceId));
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (sourceId) => {
      let source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (node) => Boolean(node && this.document && this.document.body && this.document.body.contains(node)), this.endDragIfSourceWasRemovedFromDOM = () => {
      let node = this.currentDragSourceNode;
      node == null || this.isNodeInDocument(node) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (dragOverTargetIds) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(dragOverTargetIds || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (e) => {
      if (e.defaultPrevented)
        return;
      let { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      let clientOffset = getEventClientOffset(e);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage == "function") {
          let sourceId = this.monitor.getSourceId(), sourceNode = this.sourceNodes.get(sourceId), dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            let { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions(), dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, {
              anchorX,
              anchorY
            }, {
              offsetX,
              offsetY
            });
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer == null || dataTransfer.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(e.target);
        let { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        captureDraggingState ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (nativeType)
        this.beginDragNativeItem(nativeType);
      else {
        if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable")))
          return;
        e.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (e) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging())
        return;
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      nativeType && this.beginDragNativeItem(nativeType, dataTransfer);
    }, this.handleTopDragEnter = (e) => {
      let { dragEnterTargetIds } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = e.altKey, dragEnterTargetIds.length > 0 && this.actions.hover(dragEnterTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (e) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
    }, this.handleTopDragOver = (e) => {
      let { dragOverTargetIds } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = e.altKey, this.lastClientOffset = getEventClientOffset(e), this.scheduleHover(dragOverTargetIds), (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (e) => {
      this.isDraggingNativeItem() && e.preventDefault(), this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (e) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault(), (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      } else
        matchNativeItemType(e.dataTransfer) && e.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (e) => {
      let { dropTargetIds } = this;
      this.dropTargetIds = [], this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (e) => {
      let target = e.target;
      typeof target.dragDrop == "function" && (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable || (e.preventDefault(), target.dragDrop()));
    }, this.options = new OptionsReader(globalContext, options), this.actions = manager.getActions(), this.monitor = manager.getMonitor(), this.registry = manager.getRegistry(), this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// src/app/ui/main/project/board/search.tsx
var import_classix8 = __toESM(require("classix")), import_bi = require("react-icons/bi"), import_io5 = require("react-icons/io5");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), Search = () => {
  let { search, setSearch } = useProjectStore(), clearSearch = () => setSearch(""), renderIcon = () => search.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(SearchIcon, {}, void 0, !1, {
    fileName: "src/app/ui/main/project/board/search.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ClearIcon, { onClick: clearSearch }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/search.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      "input",
      {
        type: "text",
        name: "search",
        value: search,
        placeholder: "Filter issues",
        onChange: (e) => {
          setSearch(e.target.value);
        },
        className: (0, import_classix8.default)(
          "h-[40px] w-[120px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
          "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "placeholder:duration-200 placeholder:ease-in-out focus:w-[190px]",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/project/board/search.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "absolute right-0 top-1/2 -translate-y-1/2 px-2", children: renderIcon() }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/search.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/search.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}, iconBaseClass = (0, import_classix8.default)(
  "flex border-none justify-center items-center font-icon z-10"
), SearchIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: iconBaseClass, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_bi.BiSearch, { size: 16 }, void 0, !1, {
  fileName: "src/app/ui/main/project/board/search.tsx",
  lineNumber: 52,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "src/app/ui/main/project/board/search.tsx",
  lineNumber: 51,
  columnNumber: 3
}, this), ClearIcon = ({ onClick }) => (
  // onMouseDown is needed because blur (unfocus) happens
  // before 'click' event, but not before 'onMouseDown'
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    "button",
    {
      onMouseDown: onClick,
      className: (0, import_classix8.default)(
        iconBaseClass,
        "cursor-pointer rounded hover:bg-background-neutral"
      ),
      "aria-label": "Clear search",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_io5.IoCloseOutline, { size: 16 }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/search.tsx",
        lineNumber: 67,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/app/ui/main/project/board/search.tsx",
      lineNumber: 59,
      columnNumber: 3
    },
    this
  )
);

// src/app/components/kbd-placeholder/kbd-placeholder.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), Kbd = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
  "kbd",
  {
    accessKey: "",
    className: "rounded bg-background-neutral p-1 font-primary-light text-icon",
    children
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/kbd-placeholder/kbd-placeholder.tsx",
    lineNumber: 3,
    columnNumber: 5
  },
  this
);

// src/app/ui/main/project/board/avatar-list.tsx
var DropdownMenu3 = __toESM(require("@radix-ui/react-dropdown-menu"));

// src/app/components/scroll-area/scroll-area.tsx
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area")), import_classix9 = __toESM(require("classix")), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), ScrollArea = ({
  className,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
  ScrollAreaPrimitive.Root,
  {
    type: "hover",
    scrollHideDelay: 400,
    className: "h-full w-full overflow-y-scroll scrollbar-hide",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ScrollAreaPrimitive.Viewport, { className: (0, import_classix9.default)("h-full w-full", className), children }, void 0, !1, {
        fileName: "src/app/components/scroll-area/scroll-area.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        ScrollAreaPrimitive.Scrollbar,
        {
          orientation: "vertical",
          className: (0, import_classix9.default)(
            "flex w-2 touch-none select-none rounded-full bg-grey-400 duration-150 ease-out hover:bg-grey-600"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            ScrollAreaPrimitive.Thumb,
            {
              className: (0, import_classix9.default)(
                "relative h-full flex-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-font-grey",
                "before:absolute before:top-1/2 before:left-1/2"
              )
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/scroll-area/scroll-area.tsx",
              lineNumber: 22,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "src/app/components/scroll-area/scroll-area.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ScrollAreaPrimitive.Corner, {}, void 0, !1, {
        fileName: "src/app/components/scroll-area/scroll-area.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/scroll-area/scroll-area.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
);

// src/app/ui/main/project/board/avatar-list.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), AVATAR_SIZE = 40, MAX_DISPLAY_USERS = 4, UserAvatarList = ({ users }) => {
  let displayUsers = users.slice(0, MAX_DISPLAY_USERS);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "ml-2 flex", children: [
    displayUsers.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      "div",
      {
        className: "z-10 -ml-[5px] rounded-full border-2 border-border bg-elevation-surface hover:z-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(UserAvatar, { ...user, size: AVATAR_SIZE, tooltip: !0 }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/avatar-list.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      },
      index,
      !1,
      {
        fileName: "src/app/ui/main/project/board/avatar-list.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    )),
    users.length > MAX_DISPLAY_USERS && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(MoreUsers, { users }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 22,
      columnNumber: 44
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/avatar-list.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, MoreUsers = ({ users }) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "bg-elevation-surface", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(DropdownMenu3.Root, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    DropdownMenu3.Trigger,
    {
      className: "-ml-[5px] box-content flex cursor-pointer items-center justify-center rounded-full border-2 border-border bg-background-neutral text-lg text-font hover:underline",
      style: {
        width: `${AVATAR_SIZE}px`,
        height: `${AVATAR_SIZE}px`
      },
      children: [
        users.length - MAX_DISPLAY_USERS,
        "+"
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(DropdownMenu3.Content, { className: "z-50 h-[400px] rounded-md bg-elevation-surface-overlay p-2 shadow-blue", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ScrollArea, { className: "pr-4", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      DropdownMenu3.Item,
      {
        className: "mb-1 flex items-center justify-start gap-3 rounded px-1 py-1 outline-none last:mb-0 focus:bg-background-neutral focus-visible:outline-none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(UserAvatar, { ...user, size: 44 }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/avatar-list.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: user.name }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/avatar-list.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ]
      },
      user.id,
      !0,
      {
        fileName: "src/app/ui/main/project/board/avatar-list.tsx",
        lineNumber: 46,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(DropdownMenu3.Arrow, { className: "fill-elevation-surface-overlay" }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/avatar-list.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/avatar-list.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "src/app/ui/main/project/board/avatar-list.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "src/app/ui/main/project/board/avatar-list.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this);

// src/app/ui/main/project/board/select-sort.tsx
var import_react38 = require("@remix-run/react"), Select = __toESM(require("@radix-ui/react-select")), import_fa2 = require("react-icons/fa"), import_hi3 = require("react-icons/hi"), import_bs2 = require("react-icons/bs");

// src/app/hooks/useSortBy.tsx
var import_react37 = require("@remix-run/react");
var useSortBy = () => {
  let [searchParams] = (0, import_react37.useSearchParams)(), sortByParam = searchParams.get("sortBy");
  return isValidSort(sortByParam) ? sortByParam : null;
};

// src/app/ui/main/project/board/select-sort.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), SelectSort = () => {
  let submit = (0, import_react38.useSubmit)(), sortBy = useSortBy() || DEFAULT_SORT, SortIcon = ({ sort }) => (
    // prettier-ignore
    sort === "priority" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_hi3.HiFlag, { size: 16 }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/select-sort.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_bs2.BsClockHistory, { size: 16 }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/select-sort.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react38.Form, { method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.Root, { defaultValue: sortBy, onValueChange: (value) => {
    submit({ sortBy: value });
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      Select.Trigger,
      {
        className: "flex cursor-pointer items-center justify-center rounded border-none bg-background-brand-subtlest px-3 py-1.5 text-xs text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed",
        "aria-label": "Open sort issues select",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mr-2 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_fa2.FaSortAmountDownAlt, { size: 14 }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/select-sort.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/select-sort.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.Value, { children: [
            "Sort by ",
            sortBy
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/board/select-sort.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.Content, { className: "select-none rounded bg-elevation-surface-overlay p-1.5 shadow-blue", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.ScrollUpButton, {}, void 0, !1, {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.Viewport, { children: sortList.map((sort, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        Select.Item,
        {
          value: sort.id,
          className: "flex cursor-pointer items-center justify-start gap-2 rounded border-none px-2 py-2 text-xs uppercase leading-none text-font-brand outline-none hover:bg-background-brand-subtlest-hovered focus:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SortIcon, { sort: sort.id }, void 0, !1, {
              fileName: "src/app/ui/main/project/board/select-sort.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.ItemText, { children: sort.label }, void 0, !1, {
              fileName: "src/app/ui/main/project/board/select-sort.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this)
          ]
        },
        index,
        !0,
        {
          fileName: "src/app/ui/main/project/board/select-sort.tsx",
          lineNumber: 39,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Select.ScrollDownButton, {}, void 0, !1, {
        fileName: "src/app/ui/main/project/board/select-sort.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/board/select-sort.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/select-sort.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/select-sort.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/category-column/category-column.tsx
var import_react41 = require("react"), import_react42 = require("@remix-run/react"), import_ai2 = require("react-icons/ai"), import_rx = require("react-icons/rx"), import_classix13 = __toESM(require("classix"));

// src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx
var import_react39 = require("react"), import_react40 = require("@remix-run/react"), import_classix12 = __toESM(require("classix"));

// src/app/components/icons.tsx
var import_fa3 = require("react-icons/fa"), import_classix10 = __toESM(require("classix")), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), TaskIcon = ({
  size = 24,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "relative flex items-center before:absolute before:inset-1/2 before:h-3/4 before:w-3/4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
  import_fa3.FaCheckSquare,
  {
    fill: "#4BADE8",
    className: (0, import_classix10.default)("relative", className),
    size
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/icons.tsx",
    lineNumber: 9,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "src/app/components/icons.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// src/app/components/priority-icon/priority-icon.tsx
var import_classix11 = __toESM(require("classix")), import_hi4 = require("react-icons/hi"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), PriorityIcon = ({
  priority,
  size = 18
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
  "span",
  {
    className: (0, import_classix11.default)(
      "flex",
      priority === "low" && "text-icon-accent-green",
      priority === "medium" && "text-icon-accent-yellow",
      priority === "high" && "text-icon-accent-red"
    ),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_hi4.HiFlag, { size }, void 0, !1, {
      fileName: "src/app/components/priority-icon/priority-icon.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/priority-icon/priority-icon.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
);

// src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), IssueCard = ({
  issue,
  categoryId,
  isSubmitting,
  handleDragging
}) => {
  let issueIdPrefix = issue.id.split("-")[0], sortBy = useSortBy(), issueLink = sortBy ? `issue/${issue.id}?sortBy=${sortBy}` : `issue/${issue.id}`, [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DRAG_ISSUE_CARD,
      item: {
        issueId: issue.id,
        categoryId
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
    }),
    [issue.id]
  );
  return (0, import_react39.useEffect)(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]), /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { ref: isSubmitting ? void 0 : dragRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    IssueCardContent,
    {
      link: issueLink,
      name: issue.name,
      priorityId: issue.priority.id,
      idPrefix: issueIdPrefix,
      isSubmitting
    },
    void 0,
    !1,
    {
      fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
      lineNumber: 51,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}, IssueCardContent = ({
  link,
  name,
  priorityId,
  idPrefix,
  isSubmitting
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  "div",
  {
    style: { minWidth: "200px" },
    className: (0, import_classix12.default)(
      "flex w-full cursor-pointer flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered active:bg-elevation-surface-raised-pressed",
      isSubmitting && "opacity-50"
    ),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react40.Link, { to: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "line-clamp-2 min-h-[48px] w-full text-font", children: name }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TaskIcon, { size: 18 }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "ml-1.5 text-2xs text-font-subtlest", children: idPrefix }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(PriorityIcon, { priority: priorityId }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
      lineNumber: 83,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "src/app/ui/main/project/board/category-column/issue-card/issue-card.tsx",
    lineNumber: 76,
    columnNumber: 3
  },
  this
), DRAG_ISSUE_CARD = "ISSUE_CARD";

// src/app/ui/main/project/board/category-column/category-column.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), CategoryColumn = (props) => {
  let {
    category,
    isDragging,
    submittingIssues,
    setSubmittingIssues,
    handleDragging
  } = props, [columnHeight, setColumnHeight] = (0, import_react41.useState)(0), columnRef = (0, import_react41.useRef)(), fetcher = (0, import_react42.useFetcher)(), sortBy = useSortBy(), { search } = useProjectStore(), emptyCategory = category.issues.length === 0, issueLink = sortBy ? `issue/new?category=${category.type}&sortBy=${sortBy}` : `issue/new?category=${category.type}`, [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_ISSUE_CARD,
      drop: (item) => updateIssueOnCardDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
    [category.id]
  ), updateIssueOnCardDrop = (item) => {
    item.categoryId !== category.id && (fetcher.submit(
      {
        _action: "updateIssueCategory",
        issueId: item.issueId,
        categoryId: category.id
      },
      {
        method: "post"
      }
    ), submittingIssues.includes(item.issueId) || setSubmittingIssues((prev) => [...prev, item.issueId]));
  }, filteredIssues = () => category.issues.filter((issue) => issue.name.toLowerCase().includes(search));
  return (0, import_react41.useEffect)(() => {
    if (fetcher.data && fetcher.data.issueId) {
      let { issueId } = fetcher.data;
      setSubmittingIssues((prev) => prev.filter((id) => id !== issueId));
    }
  }, [fetcher, setSubmittingIssues]), (0, import_react41.useEffect)(() => {
    columnRef.current && setColumnHeight(columnRef.current.offsetHeight);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "div",
    {
      ref: dropRef,
      className: "relative flex h-full w-[260px] max-w-[260px] flex-col rounded-md bg-elevation-surface-sunken",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "div",
          {
            className: (0, import_classix13.default)(
              "absolute z-50 box-border h-[100%] w-[100%] rounded p-1.5 duration-200",
              isDragging ? "visible" : "hidden",
              isOver || "bg-background-drop"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "div",
              {
                className: (0, import_classix13.default)(
                  "relative h-full w-full rounded border-[3px]",
                  isDragging ? "visible" : "hidden",
                  isOver ? "border-solid border-border-success" : "flex items-center justify-center border-dashed border-border-brand"
                ),
                children: !isOver && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "rounded bg-elevation-surface px-1", children: "DROP HERE" }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
                  lineNumber: 105,
                  columnNumber: 13
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
                lineNumber: 95,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
            lineNumber: 88,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "sticky left-0 top-0 flex justify-between px-3 py-2.5 font-primary-light text-xs uppercase text-font-subtlest duration-200 ease-in-out", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { children: category.name }, void 0, !1, {
              fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
              lineNumber: 112,
              columnNumber: 11
            }, this),
            !emptyCategory && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { children: [
              "( ",
              category.issues.length,
              " )"
            ] }, void 0, !0, {
              fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
              lineNumber: 113,
              columnNumber: 30
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            import_react42.Link,
            {
              to: issueLink,
              className: "text-font-subtlest/60 flex cursor-pointer rounded border-none p-1 hover:bg-background-neutral",
              "aria-label": `Add new ${category.name} issue`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_ai2.AiOutlinePlus, { size: 24 }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
                lineNumber: 120,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
              lineNumber: 115,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { ref: columnRef, className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { style: { height: `${columnHeight}px` }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ScrollArea, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("ul", { className: "mt-1 max-w-[260px] px-3 pb-1", children: emptyCategory ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EmptyCategory, {}, void 0, !1, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) : filteredIssues().map((issue, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          IssueCard,
          {
            issue,
            categoryId: category.id,
            isSubmitting: submittingIssues.includes(issue.id),
            handleDragging
          },
          void 0,
          !1,
          {
            fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
            lineNumber: 133,
            columnNumber: 21
          },
          this
        ) }, index, !1, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 132,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
      lineNumber: 83,
      columnNumber: 5
    },
    this
  );
}, EmptyCategory = () => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { className: "mt-4 flex flex-col items-center text-font-subtlest", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_rx.RxValueNone, { size: 36 }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "mt-4 font-primary-light text-xs uppercase", children: "No issues found" }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
    lineNumber: 161,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "src/app/ui/main/project/board/category-column/category-column.tsx",
  lineNumber: 159,
  columnNumber: 3
}, this);

// src/app/events/events.ts
var import_events = require("events"), EVENTS = {
  ISSUE_CHANGED: "issue-changed",
  ISSUE_CREATED: "issue-created",
  ISSUE_DELETED: "issue-deleted"
}, emitter = new import_events.EventEmitter();

// src/app/ui/main/project/board/board.view.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), BoardView = ({ project }) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ProjectContextProvider, { project, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "box-border flex h-full flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("section", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Search, {}, void 0, !1, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-4 my-0 inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(UserAvatarList, { users: project.users }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(SelectSort, {}, void 0, !1, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Categories, { categories: project.categories }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 31,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react44.Outlet, {}, void 0, !1, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "src/app/ui/main/project/board/board.view.tsx",
  lineNumber: 20,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "src/app/ui/main/project/board/board.view.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this), Categories = ({ categories }) => {
  let [isDragging, setIsDragging] = (0, import_react43.useState)(!1), [submittingIssues, setSubmittingIssues] = (0, import_react43.useState)([]), { revalidate } = (0, import_react44.useRevalidator)(), navigate = (0, import_react44.useNavigate)();
  (0, import_remix_utils.useEventSource)("board/issue/issue-event", {
    event: EVENTS.ISSUE_CREATED
  });
  let dataUpdated = (0, import_remix_utils.useEventSource)("board/issue/issue-event", {
    event: EVENTS.ISSUE_CHANGED
  }), onKeyDown = (0, import_react43.useCallback)(
    (e) => {
      e.shiftKey && e.key.toLowerCase() === "n" && (e.preventDefault(), navigate("issue/new"));
    },
    [navigate]
  );
  return (0, import_react43.useEffect)(() => {
    setSubmittingIssues([]);
  }, [categories]), (0, import_react43.useEffect)(() => {
    revalidate();
  }, [dataUpdated, revalidate]), (0, import_react43.useEffect)(() => (window.addEventListener("keydown", onKeyDown), () => window.removeEventListener("keydown", onKeyDown)), [onKeyDown]), /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("section", { className: "mt-12 flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { className: "mb-2 block justify-self-end font-primary-light text-2xs text-font-subtlest", children: [
      "Press ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Kbd, { children: "Shift" }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      " + ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Kbd, { children: "N" }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 86,
        columnNumber: 34
      }, this),
      " to create a new issue"
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex h-full gap-3", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      CategoryColumn,
      {
        category,
        isDragging,
        submittingIssues,
        setSubmittingIssues,
        handleDragging: setIsDragging
      },
      category.id,
      !1,
      {
        fileName: "src/app/ui/main/project/board/board.view.tsx",
        lineNumber: 90,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/board.view.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/board.view.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main/projects.$projectId/board.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), meta5 = ({ data }) => {
  let { project } = data, title = "Jira clone - Board", description = "Manage your project. Create, edit, delete new issues and assigne them.", image = "https://jira-clone.fly.dev/static/images/readme/project.png", url = `https://jira-clone.fly.dev/projects/${project.id}/board`, tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
}, loader8 = async ({ request, params }) => {
  let url = new URL(request.url), sortByParam = url.searchParams.get("sortBy"), sortBy = isValidSort(sortByParam) ? sortByParam : DEFAULT_SORT, projectId = params.projectId;
  (0, import_tiny_invariant3.default)(params.projectId, "params.projectId is required");
  let project = await getProject(projectId, {
    sortIssuesBy: sortBy
  });
  if (!project)
    throw new Response("Not Found", {
      status: 404
    });
  return url.pathname === `/projects/${projectId}` ? (0, import_node9.redirect)(`/projects/${projectId}/board`) : (0, import_node9.json)({ project });
}, action3 = async ({ request }) => {
  let formData = await request.formData(), _action = formData.get("_action");
  if (_action === "updateIssueCategory") {
    let categoryId = formData.get("categoryId"), issueId = formData.get("issueId"), inputData = {
      categoryId,
      issueId
    };
    try {
      return await updateIssueCategory(inputData), emitter.emit(EVENTS.ISSUE_CHANGED, Date.now()), (0, import_node9.json)(null, { status: 201 });
    } catch (error) {
      let errorMsg = error instanceof Error ? error.message : "Could not update issue category";
      return (0, import_node9.json)({ error: errorMsg }, { status: 500 });
    }
  }
  console.error("Unknown action", _action);
};
function ErrorBoundary5({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Error500, { message: "The board page failed. Navigate to the projects page", href: "board" }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board.tsx",
    lineNumber: 123,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}
function BoardRoute() {
  let { project } = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(BoardView, { project }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board.tsx",
    lineNumber: 130,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects.$projectId/board/issue/issue-event.ts
var issue_event_exports = {};
__export(issue_event_exports, {
  loader: () => loader9
});
var import_remix_utils2 = require("remix-utils");
async function loader9({ request }) {
  return (0, import_remix_utils2.eventStream)(request.signal, (send) => {
    let handleIssueCreated = (message) => {
      send({ event: EVENTS.ISSUE_CREATED, data: message });
    }, handleIssueChanged = (message) => {
      send({ event: EVENTS.ISSUE_CHANGED, data: message });
    }, handleIssueDeleted = (message) => {
      send({ event: EVENTS.ISSUE_DELETED, data: message });
    };
    return emitter.on(EVENTS.ISSUE_CREATED, handleIssueCreated), emitter.on(EVENTS.ISSUE_CHANGED, handleIssueChanged), emitter.on(EVENTS.ISSUE_DELETED, handleIssueDeleted), () => {
      emitter.off(EVENTS.ISSUE_CHANGED, handleIssueChanged), emitter.off(EVENTS.ISSUE_CREATED, handleIssueCreated), emitter.off(EVENTS.ISSUE_DELETED, handleIssueDeleted);
    };
  });
}

// src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx
var issueId_exports = {};
__export(issueId_exports, {
  CatchBoundary: () => CatchBoundary3,
  action: () => action4,
  default: () => IssuePanelRoute,
  loader: () => loader10,
  meta: () => meta6
});
var import_node10 = require("@remix-run/node"), import_react58 = require("@remix-run/react"), import_tiny_invariant4 = __toESM(require("tiny-invariant")), import_classix22 = __toESM(require("classix")), Dialog2 = __toESM(require("@radix-ui/react-dialog"));

// src/infrastructure/db/comment.ts
var deleteComment = async (commentId) => {
  await db.comment.delete({
    where: {
      id: commentId
    }
  });
};

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_react56 = require("react"), import_react57 = require("@remix-run/react");

// src/app/components/dialog/dialog.tsx
var Dialog = __toESM(require("@radix-ui/react-dialog")), import_classix14 = __toESM(require("classix")), import_tailwindcss_radix_ui = require("tailwindcss-radix-ui"), Root8 = Dialog.Root;
var Portal4 = Dialog.Portal;
var Overlay2 = (0, import_tailwindcss_radix_ui.twix)(
  Dialog.Overlay,
  (0, import_classix14.default)(
    "absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto py-[40px] px-[40px]",
    "radix-state-open:animate-fade-in duration-300 backdrop-blur-md"
  )
), Content6 = (0, import_tailwindcss_radix_ui.twix)(
  Dialog.Content,
  (0, import_classix14.default)(
    "relative z-50 text-font w-4/5 max-w-[1000px] rounded-md bg-elevation-surface py-6 px-8 shadow-lg",
    "duration-300 radix-state-open:animate-slide-up"
  )
), Title2 = (0, import_tailwindcss_radix_ui.twix)(Dialog.Title, "mb-5 font-primary-black text-3xl");

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_react_toastify3 = require("react-toastify");

// src/domain/comment/comment.mock.ts
var createdAt = Date.now(), updatedAt = Date.now(), commentMock1 = {
  id: "92149ee5-0459-4286-8323-1542e1295154",
  user: usersMock[3],
  // Jessie
  message: "Depending on the user, some features are restricted. For example, only the reporter of an issue can edit the title and description.",
  createdAt,
  updatedAt
}, commentMock2 = {
  id: "3375b7ea-425d-4bd3-a728-c8888b63a7f2",
  user: usersMock[7],
  // Little Green Men
  message: "And only the original poster of a comment can edit or delete it!",
  createdAt,
  updatedAt
}, commentMock3 = {
  id: "ee000718-85e5-44ac-91e2-e29340fb0b61",
  user: usersMock[5],
  // Mr. Potato
  message: "This is not they only accessible feature implemented. By using Radix UI, components like select, dialog or checkboxes are accessible by default, and you can handle them with the keyboard.",
  createdAt,
  updatedAt
}, commentMock4 = {
  id: "c0db6d6f-f395-4882-8bf4-e644f0e45460",
  user: userMock1,
  // Daniel Serrano
  message: "By the way, the 404 error will be triggered if you modify the URL to any non existing path.",
  createdAt,
  updatedAt
}, commentMock5 = {
  id: "6c57eff9-f310-470a-b8e9-0f5234b63f5a",
  user: usersMock[6],
  // Ms. Potato
  message: "By the way, the 404 error will be triggered if you modify the URL to any non existing path.",
  createdAt,
  updatedAt
};

// src/domain/priority/priority.mock.ts
var prioritiesMock = [
  {
    id: "low",
    name: "Low",
    order: 0
  },
  {
    id: "medium",
    name: "Medium",
    order: 1
  },
  {
    id: "high",
    name: "High",
    order: 2
  }
], priorityLow = prioritiesMock[0], priorityMedium = prioritiesMock[1], priorityHigh = prioritiesMock[2];

// src/domain/issue/issue.mock.ts
var createdAt2 = (/* @__PURE__ */ new Date("2022-01-18 11:00")).valueOf(), todoIssuesMock1 = [
  {
    id: "4db55cbf-222d-424a-b23b-08e61534c706",
    name: "HINT: Check network status when navigating to an error page.",
    description: 'There are two sections on the sidebar that will intentionally throw an error. The section "Server error" will trigger a 500 error response, while "Not found" returns a 404 error. You can check the status response on the browser network tab and see how it is handled on the UI.',
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock4, commentMock5],
    priority: priorityMedium,
    categoryType: "DONE",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 15:28")).valueOf()
  }
], inProgressIssuesMock1 = [
  {
    id: "ea07f7ca-13e9-4143-b623-f5713adef81a",
    name: "HINT: Open two tabs to see events in real time.",
    description: "With the same project open in two different tabs, try making some changes on one of them. The result will be reflected instantly on the other. This will happen with every other user with the app open.",
    reporter: userMock1,
    // Daniel Serrano
    asignee: userMock2,
    // Woody
    comments: [],
    priority: priorityHigh,
    categoryType: "IN_PROGRESS",
    createdAt: createdAt2,
    updatedAt: createdAt2
  },
  {
    id: "23717058-379a-447a-a215-e425a124154f",
    name: "HINT: Try to login and interact with different users. ",
    description: "This will be reflected on the UI (e. g. which user created and issue or wrote a comment). A user can only see the projects they are assigned to. You can try this by creating a new project at the /projects page. To logout, go to the avatar dropdown (top right).",
    reporter: userMock2,
    // Woody
    asignee: usersMock[2],
    // Buzz Lightyear
    comments: [commentMock1, commentMock2],
    priority: priorityHigh,
    categoryType: "IN_PROGRESS",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 17:50")).valueOf()
  }
], doneIssuesMock1 = [
  {
    id: "cb3eb5e6-299d-4e1a-8521-a5541f8403e4",
    name: "HINT: Check the URL when filter or navigate. Try navigate directly to the URL.",
    description: "All the routing is handled server-side thanks to Remix Run framework. Everytime you apply a filter, a new request is sent, the data is revalidated in the server and the page HTML is resent to the server. This is very useful when sharing a link. The other person will receive the same exact result as you.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "DONE",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 10:51")).valueOf()
  },
  {
    id: "8264e3fc-dd97-4abe-9612-deee6472e5c4",
    name: "HINT: Try key combinations to execute actions. They are indicated on the UI.",
    description: 'E. g., try Shift + N on the board page to create a new issue. By default, it will be created under the category "TO DO". Another common key combination is using Shift + S to save changes (try it on this very issue!).',
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock3],
    priority: priorityMedium,
    categoryType: "DONE",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 02:04")).valueOf()
  }
], todoIssuesMock2 = [
  {
    id: "f3efefcf-7859-4241-8b03-4ae815183355",
    name: "Add and display issue timestamps",
    description: "Id should be create automatically on new Issue(). It must be displayed on issue panel, as well as an updatedAt parameter",
    reporter: userMock1,
    asignee: userMock2,
    comments: [],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-18 11:01")).valueOf()
  },
  {
    id: "6bf6a1f4-20bb-492b-8ea4-4aa18efeb062",
    name: "Add projects section and the ability to create multiple projects",
    description: "Router would be needed. Can create and edit project, as well as add users to that particular project",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 14:28")).valueOf()
  }
], inProgressIssuesMock2 = [
  {
    id: "812664aa-82be-418b-9ba3-1d7acdcd6be2",
    name: "Add dark mode",
    description: "",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityHigh,
    categoryType: "IN_PROGRESS",
    createdAt: createdAt2,
    updatedAt: createdAt2
  }
], doneIssuesMock2 = [], defaultIssuesIds = [
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2
].flat().map((issue) => issue.id);

// src/app/components/title/title.tsx
var import_react47 = require("react"), import_classix16 = __toESM(require("classix"));

// src/app/components/textarea-autosize.tsx
var import_react46 = require("react"), import_classix15 = __toESM(require("classix")), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), TextareaAutosize = (props) => {
  let {
    name,
    value,
    setValue,
    placeholder,
    readOnly,
    autofocus,
    textareaClassName,
    onFocus,
    onBlur
  } = props, [textareaHeight, setTextareaHeight] = (0, import_react46.useState)(40), textareaRef = (0, import_react46.useRef)(null), handleOnFocus = (e) => {
    let target = e.currentTarget, length = target.value.length;
    target.setSelectionRange(length, length), onFocus && onFocus();
  }, handleTitleChange = (e) => {
    let value2 = e.currentTarget.value;
    setValue(value2);
  }, valueIsNotOnlySpaces = () => !/^( )\1*$/.test(value);
  return (0, import_react46.useLayoutEffect)(() => {
    textareaRef.current && setTextareaHeight(textareaRef.current.scrollHeight);
  }, [value]), /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      "textarea",
      {
        name,
        className: (0, import_classix15.default)(
          "box-border w-full resize-none overflow-y-hidden rounded-md border-none bg-background-input p-3 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          textareaClassName
        ),
        value,
        onChange: handleTitleChange,
        placeholder,
        readOnly,
        onFocus: handleOnFocus,
        onBlur,
        style: { height: `${textareaHeight}px` },
        autoFocus: autofocus
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/textarea-autosize.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      "p",
      {
        ref: textareaRef,
        className: (0, import_classix15.default)(
          "absolute left-0 top-0 -z-10 box-border overflow-y-hidden p-3 opacity-0",
          textareaClassName
        ),
        children: valueIsNotOnlySpaces() && value || placeholder
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/textarea-autosize.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/textarea-autosize.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// src/utils/text-are-only-spaces.ts
var textAreOnlySpaces = (text) => /^( )\1*$/.test(text);

// src/app/components/title/title.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), DEFAULT_MAX_LENGTH = 80, Title3 = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title"
}) => {
  let [title, setTitle] = (0, import_react47.useState)(initTitle), [isFocus, setIsFocus] = (0, import_react47.useState)(!0), isMaxLength = title.length >= maxLength, requireError = error && (title.length === 0 || textAreOnlySpaces(title));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      TextareaAutosize,
      {
        name: "title",
        value: title,
        setValue: (newTitle) => {
          newTitle.length > maxLength || setTitle(newTitle);
        },
        placeholder,
        readOnly,
        onFocus: () => {
          readOnly || setIsFocus(!0);
        },
        onBlur: () => console.log("onBlur"),
        textareaClassName: (0, import_classix16.default)(
          "font-primary-black text-2xl",
          requireError && "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        ),
        autofocus: !0
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/title/title.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    requireError && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "ml-3 font-primary-light text-sm text-font-danger", children: error }, void 0, !1, {
      fileName: "src/app/components/title/title.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    isFocus && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      "span",
      {
        className: (0, import_classix16.default)(
          "absolute right-0 top-full font-primary-light text-sm",
          isMaxLength ? "text-font-danger" : "text-font-subtlest"
        ),
        children: [
          title.length,
          " / ",
          maxLength
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/components/title/title.tsx",
        lineNumber: 57,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/title/title.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};

// src/app/components/description/description.tsx
var import_react48 = require("react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), Description2 = ({
  initDescription = "",
  readOnly
}) => {
  let [description, setDescription] = (0, import_react48.useState)(initDescription);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mt-1 [&_p]:font-primary-light [&_p]:leading-6 [&_textarea]:font-primary-light [&_textarea]:leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    TextareaAutosize,
    {
      name: "description",
      value: description,
      setValue: (newDescription) => {
        setDescription(newDescription);
      },
      placeholder: "Add a description",
      readOnly
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/description/description.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/components/description/description.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx
var import_react49 = require("@remix-run/react");

// src/app/components/alert-dialog/alert-dialog.tsx
var AlertDialog = __toESM(require("@radix-ui/react-alert-dialog")), import_tailwindcss_radix_ui2 = require("tailwindcss-radix-ui");
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), Root10 = AlertDialog.Root, Trigger7 = AlertDialog.Trigger, Portal6 = AlertDialog.Portal, Overlay4 = (0, import_tailwindcss_radix_ui2.twix)(
  AlertDialog.Overlay,
  "fixed top-0 left-0 z-50 h-full w-full backdrop-blur-sm"
), Content8 = (0, import_tailwindcss_radix_ui2.twix)(
  AlertDialog.Content,
  "fixed top-1/2 text-font left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-elevation-surface-overlay p-5 shadow-lg"
), Title5 = (0, import_tailwindcss_radix_ui2.twix)(
  AlertDialog.Title,
  "mb-5 font-primary-black text-3xl"
), Description4 = (0, import_tailwindcss_radix_ui2.twix)(
  AlertDialog.Description,
  "mt-8 flex w-full justify-end gap-4"
), Cancel2 = ({ children, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(AlertDialog.Cancel, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Button, { ...rest, color: "neutral", variant: "subtlest", children: "Cancel" }, void 0, !1, {
  fileName: "src/app/components/alert-dialog/alert-dialog.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "src/app/components/alert-dialog/alert-dialog.tsx",
  lineNumber: 25,
  columnNumber: 3
}, this), Action = ({ children, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Button, { ...rest, color: "danger", children }, void 0, !1, {
  fileName: "src/app/components/alert-dialog/alert-dialog.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this);

// src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx
var import_classix17 = __toESM(require("classix")), import_md2 = require("react-icons/md"), import_io52 = require("react-icons/io5");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), PanelHeaderIssue = ({
  id,
  deleteDisabled
}) => {
  let previousUrl = (0, import_react49.useLocation)().pathname.split("/issue")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("span", { className: "flex flex-grow items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(TaskIcon, { size: 20 }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("span", { className: "ml-1 text-font-subtlest text-opacity-80", children: id }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(DeleteIssueModalDialog, { disabled: deleteDisabled }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      import_react49.Link,
      {
        to: previousUrl,
        className: "ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon flex-center hover:bg-background-neutral",
        "aria-label": "Close issue panel",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_io52.IoCloseOutline, { size: 32 }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}, DeleteIssueModalDialog = ({
  disabled
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Root10, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    Trigger7,
    {
      className: (0, import_classix17.default)(
        "flex rounded border-none p-1.5 text-icon flex-center",
        disabled ? "cursor-not-allowed hover:text-font-disabled" : "hover:bg-background-danger hover:text-font-danger"
      ),
      "aria-label": "Open delete issue dialog",
      disabled,
      title: disabled ? "This user cannot delete the issue" : "Delete issue",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_md2.MdDeleteOutline, { size: 26 }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Portal6, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Overlay4, {}, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Content8, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Title5, { children: "Delete issue?" }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Description4, { children: "This action is permanent and cannot be undone. Are you sure you want to remove this issue completely?" }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react49.Form, { method: "delete", className: "mt-8 flex w-full justify-end gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Cancel2, { "aria-label": "Cancel", children: "Cancel" }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          Action,
          {
            name: "_action",
            value: "delete",
            type: "submit",
            "aria-label": "Delete issue",
            children: "Delete"
          },
          void 0,
          !1,
          {
            fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
            lineNumber: 70,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
  lineNumber: 45,
  columnNumber: 5
}, this);

// src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx
var import_uuid = require("uuid");

// src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx
var import_react50 = require("react"), import_classix18 = __toESM(require("classix"));
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), EditBox = ({
  defaultMessage,
  autofocus,
  save,
  cancel
}) => {
  let [message, setMessage] = (0, import_react50.useState)(defaultMessage), [initError, setInitError] = (0, import_react50.useState)(!1), [isEditing, setIsEditing] = (0, import_react50.useState)(!1), messageIsValid = () => message.length > 0 && !textAreOnlySpaces(message), resetValues = () => {
    setMessage(defaultMessage), setInitError(!1), setIsEditing(!1);
  }, onSave = () => {
    messageIsValid() ? (save(message), resetValues()) : setInitError(!0);
  }, onCancel = () => {
    cancel && cancel(), resetValues();
  }, onFocus = () => setIsEditing(!0), isError = initError && !messageIsValid();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      TextareaAutosize,
      {
        name: "comment",
        value: message,
        setValue: setMessage,
        placeholder: isError ? "Message cannot be empty" : "Add your comment...",
        onFocus,
        autofocus,
        textareaClassName: (0, import_classix18.default)(
          "min-h-[80px] leading-6 font-primary-light outline outline-2 outline-border-input focus:outline-border-brand bg-background-input",
          isError && "placeholder:text-font-danger placeholder:text-opacity-70 !outline-border-danger !outline-2"
        )
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      "div",
      {
        className: (0, import_classix18.default)(
          "mt-2 flex gap-2 text-sm",
          isEditing ? "visible" : "hidden"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            Button,
            {
              type: "button",
              className: "px-4 py-2.5",
              onClick: onSave,
              "aria-label": "Save comment",
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
              lineNumber: 68,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            Button,
            {
              color: "neutral",
              variant: "text",
              className: "px-4 py-2.5",
              onClick: onCancel,
              "aria-label": "Cancel comment",
              children: "Cancel"
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
              lineNumber: 76,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), CreateComment = ({
  addComment
}) => {
  let { user } = useUserStore(), save = (message) => {
    addComment({
      id: "temp-" + (0, import_uuid.v4)(),
      user,
      message,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-4 flex items-start gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(UserAvatar, { ...user }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(EditBox, { defaultMessage: "", save }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx
var import_react51 = require("react"), import_react52 = require("@remix-run/react"), import_classix19 = __toESM(require("classix"));

// src/utils/formatDateTime.ts
var formatDateTime = (timestamp) => {
  let locale = "en-US", date = new Date(timestamp).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  return `${new Date(timestamp).toLocaleTimeString(locale, {
    hour12: !1,
    timeStyle: "short"
  })} \xB7 ${date}`;
};

// src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), ViewComment = ({
  comment,
  removeComment
}) => {
  let { user } = useUserStore(), [isEditing, setIsEditing] = (0, import_react51.useState)(!1), fetcher = (0, import_react52.useFetcher)(), isNotSelfComment = comment.user.id !== user.id, edit = () => setIsEditing(!0), cancel = () => setIsEditing(!1), remove = () => {
    removeComment(comment.id), !comment.id.startsWith("temp-") && fetcher.submit(
      { commentId: comment.id, _action: "deleteComment" },
      { method: "delete" }
    );
  }, save = (commentText) => {
    comment.message = commentText, setIsEditing(!1);
  }, IdleComment = () => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "font-primary-light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { children: comment.message }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      "div",
      {
        className: (0, import_classix19.default)(
          "mt-3 text-font-subtlest",
          isNotSelfComment ? "hidden" : "visible"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            "button",
            {
              onClick: edit,
              disabled: isNotSelfComment,
              className: "font-primary-light text-xs hover:underline",
              "aria-label": "Edit comment",
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
              lineNumber: 48,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("span", { className: "mx-2", children: "\xB7" }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            "button",
            {
              onClick: remove,
              disabled: isNotSelfComment,
              className: "font-primary-light text-xs hover:underline",
              "aria-label": "Delete comment",
              children: "Delete"
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(UserAvatar, { ...comment.user }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { style: { width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { className: "mr-4 inline-block font-primary-bold", children: comment.user.name }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("span", { className: "font-primary-light text-xs", children: [
        comment.createdAt ? formatDateTime(comment.createdAt) : /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("i", { children: "Date undefined" }, void 0, !1, {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        commentIsEdited(comment) && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("span", { className: "mx-2", children: "\xB7" }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("span", { children: "EDITED" }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "mt-3", children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
        EditBox,
        {
          defaultMessage: comment.message,
          save,
          cancel,
          autofocus: !0
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 91,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(IdleComment, {}, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}, commentIsEdited = (comment) => {
  let createdAtInSeconds = Math.floor(comment.createdAt / 1e3), updatedAtInSeconds = Math.floor(comment.updatedAt / 1e3);
  return createdAtInSeconds !== updatedAtInSeconds;
};

// src/app/ui/main/project/board/issue-panel/select-status.tsx
var import_react53 = require("react"), import_classix21 = __toESM(require("classix"));

// src/app/components/select/select.tsx
var Select2 = __toESM(require("@radix-ui/react-select")), import_tailwindcss_radix_ui3 = require("tailwindcss-radix-ui"), import_classix20 = __toESM(require("classix")), import_ri2 = require("react-icons/ri"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), Root12 = Select2.Root, Value3 = Select2.Value, ItemText3 = Select2.ItemText, ScrollUpButton3 = Select2.ScrollUpButton, ScrollDownButton2 = Select2.ScrollUpButton, Viewport4 = Select2.Viewport, Separator3 = Select2.Separator, Trigger9 = (0, import_tailwindcss_radix_ui3.twix)(
  Select2.Trigger,
  (0, import_classix20.default)(
    "flex cursor-pointer items-center rounded border-none py-1.5 px-2",
    "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed",
    "font-primary-bold text-sm text-font"
  )
), TriggerIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Select2.Icon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_ri2.RiArrowDropDownLine, { size: 28 }, void 0, !1, {
  fileName: "src/app/components/select/select.tsx",
  lineNumber: 25,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "src/app/components/select/select.tsx",
  lineNumber: 24,
  columnNumber: 3
}, this), Content10 = (0, import_tailwindcss_radix_ui3.twix)(
  Select2.Content,
  "bg-elevation-surface-overlay py-1 shadow-md"
), Item5 = (0, import_tailwindcss_radix_ui3.twix)(
  Select2.Item,
  (0, import_classix20.default)(
    "relative flex items-center gap-2 cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8",
    "font-primary-bold text-sm text-font hover:bg-background-selected active:bg-background-selected-pressed",
    "focus:border-l-[3px] focus:border-l-border-selected focus:bg-background-selected focus-visible:outline-none outline-none"
  )
), ItemIndicator2 = (0, import_tailwindcss_radix_ui3.twix)(
  Select2.ItemIndicator,
  "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-border-selected"
);

// src/app/ui/main/project/board/issue-panel/select-status.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), SelectStatus = ({ initStatus }) => {
  var _a;
  let categories = useProjectStore().project.categories, initCategory = categories.find(
    (category) => category.type === initStatus
  );
  if (!initCategory)
    throw new Error("No default category found");
  let defaultValue = initCategory.id, [selectedValue, setSelectedValue] = (0, import_react53.useState)(defaultValue), selectedStatus = (_a = categories.find(
    (category) => category.id === selectedValue
  )) == null ? void 0 : _a.type;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    Root12,
    {
      name: "status",
      defaultValue,
      onValueChange: (value) => {
        setSelectedValue(value);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
          Trigger9,
          {
            "aria-label": "Open status select",
            className: (0, import_classix21.default)(
              "!text-font-inverse hover:!opacity-80",
              selectedStatus === "TODO" && "hover:bg-background-accent-grey-bolder-hovered !bg-background-accent-grey-bolder",
              selectedStatus === "IN_PROGRESS" && "hover:bg-background-accent-blue-bolder-hovered !bg-background-accent-blue-bolder",
              selectedStatus === "DONE" && "hover:bg-background-accent-green-bolder-hovered !bg-background-accent-green-bolder"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Value3, { className: "pt-1" }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 46,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(TriggerIcon, {}, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 47,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Content10, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ScrollUpButton3, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Viewport4, { children: [
            categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Item5, { value: category.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ItemIndicator2, {}, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 54,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                "span",
                {
                  className: (0, import_classix21.default)(
                    "flex w-fit items-center gap-2 rounded px-1 py-0.5 text-2xs uppercase",
                    category.type === "TODO" && "bg-background-accent-grey-subtler text-font-accent-grey",
                    category.type === "IN_PROGRESS" && "bg-background-accent-blue-subtler text-font-accent-blue",
                    category.type === "DONE" && "bg-background-accent-green-subtler text-font-accent-green"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ItemText3, { children: category.name }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                  lineNumber: 55,
                  columnNumber: 15
                },
                this
              )
            ] }, index, !0, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Separator3, {}, void 0, !1, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ScrollDownButton2, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/select-priority.tsx
var import_react54 = require("react");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), SelectPriority = ({ initPriority }) => {
  let [selectValue, setSelectValue] = (0, import_react54.useState)(initPriority);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
    Root12,
    {
      name: "priority",
      defaultValue: initPriority,
      onValueChange: (value) => {
        setSelectValue(value);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          Trigger9,
          {
            "aria-label": "Open priority select",
            className: "text-xs uppercase",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(PriorityIcon, { priority: selectValue }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 25,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 24,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Value3, {}, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 27,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(TriggerIcon, {}, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 28,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 20,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Content10, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ScrollUpButton3, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Viewport4, { children: [
            prioritiesMock.map((priority, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
              Item5,
              {
                value: priority.id,
                className: "text-xs uppercase",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ItemIndicator2, {}, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 39,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(PriorityIcon, { priority: priority.id }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 40,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ItemText3, { children: priority.id }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 41,
                    columnNumber: 15
                  }, this)
                ]
              },
              index,
              !0,
              {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 34,
                columnNumber: 13
              },
              this
            )),
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Separator3, {}, void 0, !1, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ScrollDownButton2, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/select-asignee.tsx
var import_react55 = require("react");
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), SelectAsignee = ({ initAsignee }) => {
  let projectStore = useProjectStore(), users = projectStore.project.users, [selectedValue, setSelectedValue] = (0, import_react55.useState)(initAsignee), onValueChange = (userId) => {
    let asignee = projectStore.project.users.find(
      (user) => user.id === userId
    );
    asignee && setSelectedValue(asignee);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
    Root12,
    {
      name: "asignee",
      defaultValue: initAsignee.id,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Trigger9, { "aria-label": "Open asignee select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(UserAvatar, { ...selectedValue, size: 32 }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Value3, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(TriggerIcon, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Content10, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ScrollUpButton3, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Viewport4, { children: [
            users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Item5, { value: user.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ItemIndicator2, {}, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(UserAvatar, { ...user }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 42,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ItemText3, { children: user.name }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this)
            ] }, index, !0, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Separator3, {}, void 0, !1, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ScrollDownButton2, {}, void 0, !1, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/created-updated-at.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), CreatedUpdatedAt = ({ issue }) => {
  let values = [
    { label: "Created at:", value: issue == null ? void 0 : issue.createdAt },
    { label: "Updated at:", value: issue == null ? void 0 : issue.updatedAt }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("tbody", { className: "text-xs text-font-subtlest", children: values.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("td", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "mb-2", children: label }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 16,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "mb-2", children: value ? formatDateTime(value) : "Just now" }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 19,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, label, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/ui/main/project/board/issue-panel/created-updated-at.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/spinner.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), Spinner = () => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
  "svg",
  {
    "aria-hidden": "true",
    className: "fill-grey-600 mr-2 inline-block h-5 w-5 animate-spin",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentBaseColor"
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/spinner.tsx",
          lineNumber: 9,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentColor"
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/spinner.tsx",
          lineNumber: 13,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/ui/main/project/board/issue-panel/spinner.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), IssuePanel = ({ issue }) => {
  var _a;
  let [isOpen, setIsOpen] = (0, import_react56.useState)(!0), [comments, setComments] = (0, import_react56.useState)((issue == null ? void 0 : issue.comments) || []), [portalContainer, setPortalContainer] = (0, import_react56.useState)(
    null
  ), { user } = useUserStore(), reporter = issue ? issue.reporter : user, formRef = (0, import_react56.useRef)(null), actionData = (0, import_react57.useActionData)(), fetcher = (0, import_react57.useFetcher)(), params = (0, import_react57.useSearchParams)(), transition = (0, import_react57.useTransition)(), location = (0, import_react57.useLocation)(), navigate = (0, import_react57.useNavigate)(), initStatus = params[0].get("category") || "TODO", userIsNotReporter = user.id !== reporter.id, postData = (0, import_react56.useCallback)(
    (formTarget) => {
      let isExistingIssue = Boolean(issue == null ? void 0 : issue.id), formData = new FormData(formTarget), action9 = isExistingIssue ? "update" : "create";
      formData.set("comments", JSON.stringify(comments)), formData.set("_action", action9), fetcher.submit(formData, {
        method: "post"
      });
    },
    [comments, fetcher, issue == null ? void 0 : issue.id]
  ), handleProgrammaticSubmit = (0, import_react56.useCallback)(() => {
    formRef.current && postData(formRef.current);
  }, [postData]), onKeyDown = (0, import_react56.useCallback)(
    (e) => {
      e.shiftKey && e.key.toLowerCase() === "s" && (e.preventDefault(), handleProgrammaticSubmit());
    },
    [handleProgrammaticSubmit]
  ), handleFormSumbit = (e) => {
    e.preventDefault(), postData(e.currentTarget);
  }, handleProgrammaticClose = () => {
    setIsOpen(!1);
  }, addComment = (newComment) => {
    setComments([...comments, newComment]);
  }, removeComment = (commentId) => {
    let updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };
  return (0, import_react56.useEffect)(() => (window.addEventListener("keydown", onKeyDown), () => window.removeEventListener("keydown", onKeyDown)), [onKeyDown]), (0, import_react56.useEffect)(() => {
    isOpen || setTimeout(() => {
      let previousUrl = location.pathname.split("/issue")[0];
      navigate(previousUrl);
    }, 300);
  }, [isOpen, navigate, location.pathname]), (0, import_react56.useEffect)(() => {
    var _a2;
    let formAction = (_a2 = fetcher.formData) == null ? void 0 : _a2.get("_action");
    fetcher.type === "actionRedirect" && formAction === "create" && import_react_toastify3.toast.success("Issue created successfully");
  }, [fetcher.type, fetcher.formData]), /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Root8, { open: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Portal4, { container: portalContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Overlay2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      Content6,
      {
        onEscapeKeyDown: handleProgrammaticClose,
        onPointerDownOutside: handleProgrammaticClose,
        className: isOpen ? "" : "translate-y-[10px] opacity-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            PanelHeaderIssue,
            {
              id: (issue == null ? void 0 : issue.id) || "Create new issue",
              deleteDisabled: userIsNotReporter || defaultIssuesIds.includes((issue == null ? void 0 : issue.id) || "")
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 134,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react57.Form, { method: "post", onSubmit: handleFormSumbit, ref: formRef, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "grid grid-cols-5 gap-16", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "col-span-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "my-5 -ml-3 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Title2, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                  Title3,
                  {
                    initTitle: (issue == null ? void 0 : issue.name) || "",
                    readOnly: userIsNotReporter,
                    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 146,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 145,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 144,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "font-primary-black text-font", children: "Description" }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 153,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "-ml-3 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                  Description2,
                  {
                    initDescription: (issue == null ? void 0 : issue.description) || "",
                    readOnly: userIsNotReporter
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 155,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 154,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "font-primary-black text-font", children: "Comments" }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 161,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(CreateComment, { addComment }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 163,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 162,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("ul", { className: "mt-8 space-y-6", children: comments.map((comment) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                    ViewComment,
                    {
                      comment,
                      removeComment
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 168,
                      columnNumber: 29
                    },
                    this
                  ) }, comment.id, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 167,
                    columnNumber: 27
                  }, this)) }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 165,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 160,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "col-span-2 space-y-10", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "mb-1", children: "Status" }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 179,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                    SelectStatus,
                    {
                      initStatus: (issue == null ? void 0 : issue.categoryType) || initStatus
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 180,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 178,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "mb-1", children: "Priority" }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 185,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                    SelectPriority,
                    {
                      initPriority: (issue == null ? void 0 : issue.priority.id) || "low"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 186,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 184,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "mb-1", children: "Asignee" }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 191,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(SelectAsignee, { initAsignee: (issue == null ? void 0 : issue.asignee) || user }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 192,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 190,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "mb-1", children: "Reporter" }, void 0, !1, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 195,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "mt-1 flex w-fit items-center gap-2 rounded-full bg-background-neutral py-1 pb-1 pl-1 pr-3.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(UserAvatar, { ...reporter }, void 0, !1, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 197,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                      "input",
                      {
                        type: "hidden",
                        name: "reporter",
                        value: reporter.id
                      },
                      void 0,
                      !1,
                      {
                        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                        lineNumber: 198,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "m-0", children: reporter.name }, void 0, !1, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 203,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 196,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 194,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(CreatedUpdatedAt, { issue }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 207,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 206,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 177,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "mt-6 grid grid-cols-3 items-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { className: "font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                "Press ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Kbd, { children: "Shift" }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 213,
                  columnNumber: 27
                }, this),
                " + ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Kbd, { children: "S" }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 213,
                  columnNumber: 46
                }, this),
                " to accept"
              ] }, void 0, !0, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 212,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                Button,
                {
                  type: "submit",
                  size: "lg",
                  className: "w-fit",
                  disabled: transition.state !== "idle",
                  "aria-label": "Accept changes",
                  children: transition.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
                    "Submmiting",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Spinner, {}, void 0, !1, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 226,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 224,
                    columnNumber: 25
                  }, this) : "Accept"
                },
                void 0,
                !1,
                {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 216,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 215,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { className: "justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                "Press ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Kbd, { children: "Esc" }, void 0, !1, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 234,
                  columnNumber: 27
                }, this),
                " to close"
              ] }, void 0, !0, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 233,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
        lineNumber: 129,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      "div",
      {
        ref: setPortalContainer,
        className: "fixed left-0 top-0 z-50 h-full w-full"
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
        lineNumber: 243,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), meta6 = ({ data }) => {
  let { issue, projectId } = data, title = `Jira clone - ${issue.name}`, description = issue.description || "No description", image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png", url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/${issue.name}`, tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [...formatTags(tags), ...formatProperties(properties)];
}, loader10 = async ({ params }) => {
  let projectId = params.projectId, issueId = params.issueId;
  (0, import_tiny_invariant4.default)(params.projectId, "params.projectId is required");
  let issue = await getIssue(issueId);
  if (!issue)
    throw new Response("Not Found", {
      status: 404
    });
  return (0, import_node10.json)({ issue, projectId });
}, action4 = async ({ request, params }) => {
  let id = params.issueId, projectId = params.projectId, formData = await request.formData(), _action = formData.get("_action"), sortByParam = new URL(request.url).searchParams.get("sortBy"), sortBySeachParam = isValidSort(sortByParam) ? `?sortBy=${sortByParam}` : "", previousUrl = `/projects/${projectId}/board${sortBySeachParam}`;
  if (_action === "update") {
    let name = formData.get("title"), description = formData.get("description"), categoryId = formData.get("status"), priority = formData.get("priority"), asigneeId = formData.get("asignee"), reporterId = formData.get("reporter"), comments = JSON.parse(
      formData.get("comments")
    ), issueInputData = {
      id,
      name,
      description,
      categoryId,
      priority,
      asigneeId,
      reporterId,
      comments
    };
    if (!name || textAreOnlySpaces(name))
      return (0, import_node10.json)(
        { errors: { name: "Title is required" } },
        { status: 400 }
      );
    await updateIssue(issueInputData), emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
  }
  if (_action === "delete" && (console.log("DELETING ISSUE"), await deleteIssue(id), emitter.emit(EVENTS.ISSUE_DELETED, Date.now())), _action === "deleteComment") {
    let commentId = formData.get("commentId");
    return commentId ? (await deleteComment(commentId), (0, import_node10.redirect)(`/projects/${projectId}/board/issue/${id}`, 202)) : null;
  }
  return (0, import_node10.redirect)(previousUrl);
};
function CatchBoundary3() {
  let location = (0, import_react58.useLocation)(), navigate = (0, import_react58.useNavigate)(), boardUrl = location.pathname.split("/issue")[0], handleProgrammaticNavigation = () => {
    navigate(boardUrl);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Dialog2.Root, { open: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Dialog2.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    Dialog2.Overlay,
    {
      className: (0, import_classix22.default)(
        "absolute left-0 top-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto bg-black bg-opacity-50 px-[40px] py-[40px]",
        "radix-state-open:animate-fade-in duration-300"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        Dialog2.Content,
        {
          onPointerDownOutside: handleProgrammaticNavigation,
          className: (0, import_classix22.default)(
            "bg-background-surface relative z-50 flex rounded-md px-20 py-12 shadow-lg flex-center",
            "duration-300 radix-state-open:animate-slide-up"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
            Error404,
            {
              message: "This issue does not exist. Go to the board page",
              href: boardUrl
            },
            void 0,
            !1,
            {
              fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
              lineNumber: 184,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
          lineNumber: 177,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
      lineNumber: 171,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 170,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}
function IssuePanelRoute() {
  let { issue } = (0, import_react58.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(IssuePanel, { issue }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 197,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects.$projectId/board/issue/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action5,
  default: () => IssuePanelRoute2,
  loader: () => loader11,
  meta: () => meta7
});
var import_node11 = require("@remix-run/node"), import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), meta7 = ({ data }) => {
  let { projectId } = data, title = "Jira clone - Create issue", description = "Create new issue, edit it and and assigne team members.", image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png", url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/new`, tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [...formatTags(tags), ...formatProperties(properties)];
}, loader11 = async ({ params }) => {
  let projectId = params.projectId;
  return (0, import_tiny_invariant5.default)(params.projectId, "params.projectId is required"), (0, import_node11.json)({ projectId });
}, action5 = async ({ request, params }) => {
  let projectId = params.projectId, formData = await request.formData(), _action = formData.get("_action"), sortByParam = new URL(request.url).searchParams.get("sortBy"), sortBySeachParam = isValidSort(sortByParam) ? `?sortBy=${sortByParam}` : "", previousUrl = `/projects/${projectId}/board${sortBySeachParam}`;
  if (_action === "create") {
    let name = formData.get("title"), description = formData.get("description"), categoryId = formData.get("status"), priority = formData.get("priority"), asigneeId = formData.get("asignee"), reporterId = formData.get("reporter"), comments = JSON.parse(
      formData.get("comments")
    ), issueInputData = {
      name,
      description,
      categoryId,
      priority,
      asigneeId,
      reporterId,
      comments
    };
    if (!name || textAreOnlySpaces(name))
      return (0, import_node11.json)(
        { errors: { name: "Title is required" } },
        { status: 400 }
      );
    await createIssue(issueInputData), emitter.emit(EVENTS.ISSUE_CREATED, Date.now());
  }
  return (0, import_node11.redirect)(previousUrl);
};
function IssuePanelRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(IssuePanel, {}, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/new.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects.$projectId/$.tsx
var __exports = {};
__export(__exports, {
  CatchBoundary: () => CatchBoundary4,
  default: () => Error404Route,
  loader: () => loader12
});
var import_react59 = require("react"), import_react60 = require("@remix-run/react"), import_react_toastify4 = require("react-toastify");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), loader12 = async () => {
  throw new Response("Not Found", {
    status: 404
  });
};
function CatchBoundary4() {
  (0, import_react59.useEffect)(() => {
    import_react_toastify4.toast.warning("Try to go back to the previous page.");
  }, []);
  let params = (0, import_react60.useParams)(), projectId = params.projectId, errorMessage = `The section "/${params["*"]}" does not exists, so a fallback 404 is shown (check network tab). Navigate to boards page`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(Error404, { message: errorMessage, href: `/projects/${projectId}/board` }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/$.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.$projectId/$.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function Error404Route() {
  return null;
}

// src/app/routes/__main/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  action: () => action6,
  default: () => ProjectsRoute,
  loader: () => loader13,
  meta: () => meta8
});
var import_node12 = require("@remix-run/node"), import_react63 = require("@remix-run/react");

// src/app/ui/main/projects/projects.view.tsx
var import_react62 = require("@remix-run/react"), import_ai3 = require("react-icons/ai");

// src/app/ui/main/projects/project-card/project-card.tsx
var import_react61 = require("@remix-run/react"), import_md3 = require("react-icons/md"), import_classix23 = __toESM(require("classix"));

// src/domain/category/category.ts
var categoryTypes = ["TODO", "IN_PROGRESS", "DONE"], categoryTypeDict = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done"
};

// src/domain/category/category.mock.ts
var createdAt3 = (/* @__PURE__ */ new Date("2022-01-01")).valueOf(), updatedAt2 = (/* @__PURE__ */ new Date("2022-01-01")).valueOf(), ids1 = [
  "1e8877a7-91dc-46de-bce0-f077ad922fc8",
  "46964edd-62e0-4c2f-90bf-e275ee087433",
  "c1278ad3-29b3-422c-8219-54bb66b26ff4"
], issuesMock1 = [todoIssuesMock1, inProgressIssuesMock1, doneIssuesMock1], ids2 = [
  "bbb348d5-ef02-447c-94f5-5fbf1ceeac07",
  "14055a19-1a79-4b16-90fb-811652e33128",
  "aa102bcb-335c-4d82-8392-058f6172ebe8"
], issuesMock2 = [todoIssuesMock2, inProgressIssuesMock2, doneIssuesMock2], categoriesMock1 = categoryTypes.map((categoryType, index) => {
  let id = ids1[index], name = categoryTypeDict[categoryType], type = categoryType, order = index, issues = issuesMock1[index];
  return {
    id,
    name,
    issues,
    type,
    order,
    createdAt: createdAt3,
    updatedAt: updatedAt2
  };
}), categoriesMock2 = categoryTypes.map((categoryType, index) => {
  let id = ids2[index], name = categoryTypeDict[categoryType], type = categoryType, order = index, issues = issuesMock2[index];
  return {
    id,
    name,
    type,
    issues,
    order,
    createdAt: createdAt3,
    updatedAt: updatedAt2
  };
});

// src/domain/project/project.mock.ts
var projectMock1 = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock1,
  image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge",
  createdAt: (/* @__PURE__ */ new Date("2023-01-01 10:00")).valueOf()
}, projectMock2 = {
  id: "second-project",
  name: "Second project",
  description: "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
  users: usersMock.slice(0, 3),
  // Only the first 3 users
  categories: categoriesMock2,
  image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10401?size=xxlarge",
  createdAt: (/* @__PURE__ */ new Date("2023-01-01 11:00")).valueOf()
}, projectsMock = [projectMock1, projectMock2];

// src/app/ui/main/projects/project-card/project-card.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), defaultProjectsIds = projectsMock.map(
  (projectMock) => projectMock.id
), ProjectCard = ({ project }) => {
  let isDefaultProject = defaultProjectsIds.includes(project.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "w-[400px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      import_react61.Link,
      {
        to: project.id,
        className: (0, import_classix23.default)(
          "group flex h-[112px] rounded bg-elevation-surface-raised text-font shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
          "hover:-translate-y-0.5 hover:bg-background-brand-subtlest-hovered hover:text-font-brand hover:shadow-md hover:outline-border-brand"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
            "img",
            {
              src: project.image || "/images/default-project.png",
              alt: "Project",
              width: "90px",
              height: "104px",
              className: "h-auto w-[90px] rounded-l object-cover"
            },
            void 0,
            !1,
            {
              fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
              lineNumber: 23,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex flex-col gap-1 px-3 pb-4 pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h2", { className: "text-lg", children: project.name }, void 0, !1, {
              fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "line-clamp-2 min-h-[40px] font-primary-light text-sm text-font-subtle text-opacity-100", children: project.description }, void 0, !1, {
              fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Root10, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
        Trigger7,
        {
          className: (0, import_classix23.default)(
            "mt-1 flex items-center gap-1 border-none text-sm",
            isDefaultProject ? "cursor-not-allowed text-font-disabled text-opacity-50" : "text-icon hover:text-font-danger"
          ),
          "aria-label": "Open delete issue dialog",
          title: isDefaultProject ? "Cannot delete default project" : "Delete project",
          disabled: isDefaultProject,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_md3.MdDeleteOutline, { size: 15 }, void 0, !1, {
              fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            "Delete project"
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Portal6, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Overlay4, {}, void 0, !1, {
          fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Content8, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Title5, { children: "Delete issue?" }, void 0, !1, {
            fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Description4, { children: "This action is permanent and cannot be undone. Are you sure you want to remove this issue completely?" }, void 0, !1, {
            fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
            import_react61.Form,
            {
              method: "delete",
              className: "mt-8 flex w-full justify-end gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Cancel2, { "aria-label": "Cancel", children: "Cancel" }, void 0, !1, {
                  fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
                  lineNumber: 69,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
                  Action,
                  {
                    name: "_action",
                    value: "delete",
                    type: "submit",
                    "aria-label": "Delete issue",
                    children: "Delete"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
                    lineNumber: 72,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { type: "hidden", name: "projectId", value: project.id }, void 0, !1, {
                  fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
              lineNumber: 65,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/projects/project-card/project-card.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/projects/projects.view.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), ProjectsView = ({
  projectsSummary
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "p-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("h1", { className: "font-primary-black text-2xl", children: "PROJECTS" }, void 0, !1, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react62.Link, { to: "new", className: "flex w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Button, { color: "neutral", variant: "subtlest", className: "py-3 pl-3 pr-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_ai3.AiOutlinePlus, { size: 22 }, void 0, !1, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 17,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("span", { className: "leading-4", children: "Add Project" }, void 0, !1, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8", children: projectsSummary.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ProjectCard, { project }, project.id, !1, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 25,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react62.Outlet, {}, void 0, !1, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "src/app/ui/main/projects/projects.view.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this);

// src/app/routes/__main/projects.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), meta8 = () => {
  let title = "Jira clone - Projects", description = "See all your projects in one place. Create new ones and assigne team members.", image = "https://jira-clone.fly.dev/static/images/readme/projects.png", url = "https://jira-clone.fly.dev/projects", tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
}, loader13 = async ({ request }) => {
  let userId = (await getUserSession(request)).getUser();
  if (!userId)
    return (0, import_node12.redirect)("/login");
  let projectsSummary = await getProjectsSummary(userId);
  return (0, import_node12.json)({ projectsSummary });
}, action6 = async ({ request }) => {
  let formData = await request.formData();
  if (formData.get("_action") === "delete") {
    let projectId = formData.get("projectId");
    projectId ? await deleteProject(projectId) : console.error("Project id not found: ", projectId);
  }
  return (0, import_node12.redirect)("/projects");
};
function ErrorBoundary6({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "h-full w-full text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h1", { className: "mb-6 mt-[200px] text-lg", children: "/projects ERROR" }, void 0, !1, {
      fileName: "src/app/routes/__main/projects.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("a", { href: "/", className: "text-primary-main hover:underline", children: "Navigate to home" }, void 0, !1, {
      fileName: "src/app/routes/__main/projects.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/routes/__main/projects.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function ProjectsRoute() {
  let { projectsSummary } = (0, import_react63.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(ProjectsView, { projectsSummary }, void 0, !1, {
    fileName: "src/app/routes/__main/projects.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}

// src/app/routes/__main/projects/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action7,
  default: () => IssuePanelRoute3,
  loader: () => loader14,
  meta: () => meta9
});
var import_node13 = require("@remix-run/node"), import_react67 = require("@remix-run/react");

// src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx
var import_react65 = require("react"), import_react66 = require("@remix-run/react");
var Checkbox = __toESM(require("@radix-ui/react-checkbox")), import_classix24 = __toESM(require("classix")), import_bs3 = require("react-icons/bs");

// src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx
var import_react64 = require("@remix-run/react"), import_io53 = require("react-icons/io5"), import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), CreateProjectPanelHeader = ({
  id
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "flex", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("span", { className: "flex flex-grow items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("span", { className: "ml-1", children: id }, void 0, !1, {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
    import_react64.Link,
    {
      to: "/projects",
      className: "ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-background-accent-grey-subtlest",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_io53.IoCloseOutline, { size: 32 }, void 0, !1, {
        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
      lineNumber: 14,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel-header.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this);

// src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime"), CreateProjectPanelView = ({
  project,
  users
}) => {
  var _a;
  let [isOpen, setIsOpen] = (0, import_react65.useState)(!0), [portalContainer, setPortalContainer] = (0, import_react65.useState)(
    null
  ), formRef = (0, import_react65.useRef)(null), fetcher = (0, import_react66.useFetcher)(), navigate = (0, import_react66.useNavigate)(), actionData = (0, import_react66.useActionData)(), { user: loggedUser } = useUserStore(), postData = (0, import_react65.useCallback)(
    (formTarget) => {
      let formData = new FormData(formTarget);
      formData.set("_action", "upsert"), fetcher.submit(formData, {
        method: "post"
      });
    },
    [fetcher]
  ), handleProgrammaticSubmit = (0, import_react65.useCallback)(() => {
    formRef.current && postData(formRef.current);
  }, [postData]), handleProgrammaticClose = () => {
    setIsOpen(!1);
  }, onKeyDown = (0, import_react65.useCallback)(
    (e) => {
      e.shiftKey && e.key.toLowerCase() === "s" && (e.preventDefault(), handleProgrammaticSubmit());
    },
    [handleProgrammaticSubmit]
  );
  return (0, import_react65.useEffect)(() => {
    var _a2;
    (actionData == null ? void 0 : actionData.errors) && Object.keys(actionData == null ? void 0 : actionData.errors).length > 0 && ((_a2 = document.getElementById("project-panel-overlay")) == null || _a2.scrollTo({ top: 0, behavior: "smooth" }));
  }, [actionData]), (0, import_react65.useEffect)(() => (window.addEventListener("keydown", onKeyDown), () => window.removeEventListener("keydown", onKeyDown)), [onKeyDown]), (0, import_react65.useEffect)(() => {
    isOpen || setTimeout(() => navigate("/projects"), 300);
  }, [isOpen, navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_jsx_dev_runtime59.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Root8, { open: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Portal4, { container: portalContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      Overlay2,
      {
        id: "project-panel-overlay",
        className: isOpen ? "" : "bg-opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
          Content6,
          {
            onEscapeKeyDown: handleProgrammaticClose,
            onPointerDownOutside: handleProgrammaticClose,
            className: (0, import_classix24.default)(
              "max-w-[600px]",
              !isOpen && "translate-y-[10px] opacity-0"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                CreateProjectPanelHeader,
                {
                  id: (project == null ? void 0 : project.id) || "Create new project"
                },
                void 0,
                !1,
                {
                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                  lineNumber: 103,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react66.Form, { method: "post", ref: formRef, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "mb-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Title2, { className: "-ml-3 mb-8 mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                    Title3,
                    {
                      initTitle: (project == null ? void 0 : project.name) || "",
                      maxLength: 30,
                      error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 109,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 108,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("p", { className: "font-primary-black", children: "Description" }, void 0, !1, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 115,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "-ml-3 mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Description2, { initDescription: (project == null ? void 0 : project.description) || "" }, void 0, !1, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 116,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("ul", { className: "space-y-1.5", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                    "li",
                    {
                      className: "-mx-2 rounded-lg px-2 outline outline-2 outline-transparent duration-75 ease-linear hover:bg-background-brand-subtlest hover:outline-border-brand",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                        "label",
                        {
                          htmlFor: `checkbox-${user.id}`,
                          className: "flex w-full cursor-pointer items-center justify-between gap-4 py-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("span", { className: "flex items-center gap-4", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(UserAvatar, { ...user, size: 48 }, void 0, !1, {
                                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                lineNumber: 130,
                                columnNumber: 29
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("span", { children: user.name }, void 0, !1, {
                                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                lineNumber: 131,
                                columnNumber: 29
                              }, this)
                            ] }, void 0, !0, {
                              fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                              lineNumber: 129,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                              Checkbox.Root,
                              {
                                id: `checkbox-${user.id}`,
                                className: "h-[36px] w-[36px] rounded-md bg-background-input",
                                name: "user",
                                value: user.id,
                                defaultChecked: user.id === (loggedUser == null ? void 0 : loggedUser.id),
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Checkbox.Indicator, { className: "flex h-[36px] w-[36px] rounded-md bg-background-brand-bold duration-150 ease-in flex-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                                  import_bs3.BsCheckLg,
                                  {
                                    size: 16,
                                    className: "text-font-inverse"
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                    lineNumber: 141,
                                    columnNumber: 31
                                  },
                                  this
                                ) }, void 0, !1, {
                                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                  lineNumber: 140,
                                  columnNumber: 29
                                }, this)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                                lineNumber: 133,
                                columnNumber: 27
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                          lineNumber: 125,
                          columnNumber: 25
                        },
                        this
                      )
                    },
                    user.id,
                    !1,
                    {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 121,
                      columnNumber: 23
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 119,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                  lineNumber: 107,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "mt-6 grid grid-cols-3 items-end justify-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("span", { className: "font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                    "Press ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Kbd, { children: "Shift" }, void 0, !1, {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 154,
                      columnNumber: 27
                    }, this),
                    " + ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Kbd, { children: "S" }, void 0, !1, {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 154,
                      columnNumber: 46
                    }, this),
                    " to accept"
                  ] }, void 0, !0, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 153,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                    Button,
                    {
                      color: "primary",
                      type: "submit",
                      name: "_action",
                      value: "upsert",
                      className: "w-fit gap-2 px-8 py-2 font-primary-bold text-lg",
                      disabled: fetcher.state !== "idle",
                      "aria-label": "Accept changes",
                      children: fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_jsx_dev_runtime59.Fragment, { children: [
                        "Submmiting",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Spinner2, {}, void 0, !1, {
                          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                          lineNumber: 169,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                        lineNumber: 167,
                        columnNumber: 25
                      }, this) : "Accept"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 157,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 156,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("span", { className: "justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80", children: [
                    "Press ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Kbd, { children: "Esc" }, void 0, !1, {
                      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                      lineNumber: 177,
                      columnNumber: 27
                    }, this),
                    " to close"
                  ] }, void 0, !0, {
                    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                    lineNumber: 176,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                  lineNumber: 152,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
                lineNumber: 106,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
            lineNumber: 95,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
        lineNumber: 91,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      "div",
      {
        ref: setPortalContainer,
        className: "fixed left-0 top-0 z-50 h-full w-full"
      },
      void 0,
      !1,
      {
        fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
        lineNumber: 186,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}, Spinner2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
  "svg",
  {
    "aria-hidden": "true",
    className: "fill-grey-600 mr-2 inline-block h-5 w-5 animate-spin",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentBaseColor"
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
          lineNumber: 207,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentColor"
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
          lineNumber: 211,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/ui/main/projects/create-project-panel/create-project-panel.view.tsx",
    lineNumber: 200,
    columnNumber: 3
  },
  this
);

// src/utils/random-project-image.ts
var getRandomProjectImage = () => `/images/projects/${getRandomNumberBetweenRange(0, 26)}.svg`, getRandomNumberBetweenRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// src/app/routes/__main/projects/new.tsx
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), meta9 = () => {
  let title = "Jira clone - Create project", description = "Create new project and assigne team members.", image = "https://jira-clone.fly.dev/static/images/readme/projects-new.png", url = "https://jira-clone.fly.dev/projects/new", tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1268",
    "twitter:image:height": "856",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [...formatTags(tags), ...formatProperties(properties)];
}, loader14 = async () => {
  let users = await getUsers();
  return (0, import_node13.json)({ users });
}, action7 = async ({ request }) => {
  let formData = await request.formData(), _action = formData.get("_action"), name = formData.get("title"), description = formData.get("description"), users = formData.getAll("user");
  if (!(_action === "upsert" || _action === "delete"))
    throw new Error(
      `Invalid action: '${_action}'. Values must be 'upsert' or 'delete'`
    );
  if (_action === "upsert") {
    let errors = {};
    if ((!name || textAreOnlySpaces(name)) && (errors.name = "Name is required"), users.length === 0 && (errors.users = "At least one user is required"), Object.keys(errors).length > 0)
      return (0, import_node13.json)({ errors }, { status: 400 });
    let categories = categoryTypes.map(
      (type, index) => ({
        type,
        name: categoryTypeDict[type],
        order: index,
        issues: []
      })
    );
    return await createProject({
      name,
      description,
      userIds: users,
      image: getRandomProjectImage(),
      categories
    }), (0, import_node13.redirect)("/projects");
  }
};
function IssuePanelRoute3() {
  let { users } = (0, import_react67.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(CreateProjectPanelView, { users }, void 0, !1, {
    fileName: "src/app/routes/__main/projects/new.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
}

// src/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  CatchBoundary: () => CatchBoundary5,
  default: () => IndexRoute,
  loader: () => loader15
});
var import_node14 = require("@remix-run/node");
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime"), loader15 = async ({ request }) => new URL(request.url).pathname === "/" ? (0, import_node14.redirect)("projects") : null;
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("h1", { children: "LANDING" }, void 0, !1, {
    fileName: "src/app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function CatchBoundary5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
    Error404,
    {
      message: "It seems that you have lost! Go to the main page",
      href: "/"
    },
    void 0,
    !1,
    {
      fileName: "src/app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/routes/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// src/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action8,
  default: () => LoginRoute,
  loader: () => loader16,
  meta: () => meta10
});
var import_node15 = require("@remix-run/node"), import_react70 = require("@remix-run/react");

// src/app/ui/login/login.view.tsx
var import_react68 = require("react"), import_react69 = require("@remix-run/react");
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), LoginView = ({ users }) => {
  let [selectedValue, setSelectedValue] = (0, import_react68.useState)(userMock1), onValueChange = (userId) => {
    let foundUser = users.find((user) => user.id === userId);
    foundUser && setSelectedValue(foundUser);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "mx-auto max-w-[400px] pt-[10vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { className: "font-primary-black text-5xl text-font", children: "Select login user" }, void 0, !1, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h2", { className: "mb-8 mt-3 font-primary-light text-lg text-font-subtle", children: "There is no authentication involved. You can login with any user you want! Keep in mind you can only access the projects the user is member of. Try to create issues and comments with different users to see how it reflects in the UI and database. You can logout on the user avatar." }, void 0, !1, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_react69.Form, { method: "post", className: "mx-auto w-[300px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
        Root12,
        {
          name: "user",
          defaultValue: userMock1.id,
          onValueChange,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
              Trigger9,
              {
                className: "flex w-full justify-between",
                "aria-label": "Open user select",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(UserAvatar, { ...selectedValue }, void 0, !1, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 41,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Value3, {}, void 0, !1, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 42,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(TriggerIcon, {}, void 0, !1, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 36,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Content10, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(ScrollUpButton3, {}, void 0, !1, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Viewport4, { children: [
                users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Item5, { value: user.id, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(ItemIndicator2, {}, void 0, !1, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 51,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(UserAvatar, { ...user }, void 0, !1, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 52,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(ItemText3, { children: user.name }, void 0, !1, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 53,
                    columnNumber: 19
                  }, this)
                ] }, index, !0, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 50,
                  columnNumber: 17
                }, this)),
                /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Separator3, {}, void 0, !1, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 56,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(ScrollDownButton2, {}, void 0, !1, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 58,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/ui/login/login.view.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
        Button,
        {
          type: "submit",
          name: "_action",
          value: "setUser",
          "aria-label": "Login",
          className: "mt-2 w-full",
          children: "Login"
        },
        void 0,
        !1,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/ui/login/login.view.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// src/app/routes/login.tsx
var import_jsx_dev_runtime63 = require("react/jsx-dev-runtime"), meta10 = () => {
  let title = "Jira clone - Login", description = "Select your user profile and login to see your projects.", image = "https://jira-clone.fly.dev/static/images/readme/projects.png", url = "https://jira-clone.fly.dev/login", tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  }, properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
}, loader16 = async () => {
  let users = await getUsers();
  return (0, import_node15.json)({ users });
}, action8 = async ({ request }) => {
  let formData = await request.formData(), _action = formData.get("_action");
  if (_action === "setUser") {
    let userId = formData.get("user"), userSession = await getUserSession(request);
    return userSession.setUser(userId), (0, import_node15.redirect)("/projects", {
      headers: { "Set-Cookie": await userSession.commit() }
    });
  }
  console.error("Unknown action", _action);
};
function LoginRoute() {
  let { users } = (0, import_react70.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(LoginView, { users }, void 0, !1, {
    fileName: "src/app/routes/login.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}

// src/app/routes/404.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => NotFound404Route
});
var import_jsx_dev_runtime64 = require("react/jsx-dev-runtime");
function NotFound404Route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: "NOT FOUNDDDD" }, void 0, !1, {
    fileName: "src/app/routes/404.tsx",
    lineNumber: 3,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PGB7S46F.js", imports: ["/build/_shared/chunk-SOLJ6CBV.js", "/build/_shared/chunk-6DAQMQYB.js", "/build/_shared/chunk-JR7JHID7.js", "/build/_shared/chunk-4D7IJTTE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-43XU2UR3.js", imports: ["/build/_shared/chunk-V33PQAZI.js", "/build/_shared/chunk-4XONY4GO.js", "/build/_shared/chunk-FSLR7CSD.js", "/build/_shared/chunk-TH5S6TNI.js", "/build/_shared/chunk-WA2U3LPD.js", "/build/_shared/chunk-2S63U5IP.js", "/build/_shared/chunk-HB6FFOQV.js", "/build/_shared/chunk-LRKDSTAW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-333A35MU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main": { id: "routes/__main", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__main-ROUPBINQ.js", imports: ["/build/_shared/chunk-QR3QBV66.js", "/build/_shared/chunk-GZRJBEAL.js", "/build/_shared/chunk-2Z5ULB5T.js", "/build/_shared/chunk-G3K6ANVA.js", "/build/_shared/chunk-EJKK3DBE.js", "/build/_shared/chunk-TUTQ3UWM.js", "/build/_shared/chunk-QPO2HNRI.js", "/build/_shared/chunk-RHOETTPI.js", "/build/_shared/chunk-IBZ2AZBF.js", "/build/_shared/chunk-6H526VOR.js", "/build/_shared/chunk-6UKFTLV3.js", "/build/_shared/chunk-O2O6DMNV.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/projects": { id: "routes/__main/projects", parentId: "routes/__main", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects-RBJZKEEE.js", imports: ["/build/_shared/chunk-J7TQEEBL.js", "/build/_shared/chunk-YBB5467O.js", "/build/_shared/chunk-C3MEAROJ.js", "/build/_shared/chunk-KEOKG2I2.js", "/build/_shared/chunk-KHVVK2Q5.js", "/build/_shared/chunk-FSLR7CSD.js", "/build/_shared/chunk-WA2U3LPD.js", "/build/_shared/chunk-HB6FFOQV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__main/projects.$projectId": { id: "routes/__main/projects.$projectId", parentId: "routes/__main", path: "projects/:projectId", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId-QDH7PMZY.js", imports: ["/build/_shared/chunk-LR5MD5TU.js", "/build/_shared/chunk-6P7PDWVX.js", "/build/_shared/chunk-4XONY4GO.js", "/build/_shared/chunk-FSLR7CSD.js", "/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-WA2U3LPD.js", "/build/_shared/chunk-2S63U5IP.js", "/build/_shared/chunk-HB6FFOQV.js", "/build/_shared/chunk-LRKDSTAW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__main/projects.$projectId/$": { id: "routes/__main/projects.$projectId/$", parentId: "routes/__main/projects.$projectId", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/$-KQTW7Y2C.js", imports: ["/build/_shared/chunk-TH5S6TNI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__main/projects.$projectId/analytics": { id: "routes/__main/projects.$projectId/analytics", parentId: "routes/__main/projects.$projectId", path: "analytics", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/analytics-FFPVLDPG.js", imports: ["/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__main/projects.$projectId/board": { id: "routes/__main/projects.$projectId/board", parentId: "routes/__main/projects.$projectId", path: "board", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/board-ILFTY6TI.js", imports: ["/build/_shared/chunk-ZEJBHDO7.js", "/build/_shared/chunk-WKLAUMLQ.js", "/build/_shared/chunk-7QPIFFAH.js", "/build/_shared/chunk-UD3IMZBA.js", "/build/_shared/chunk-QR3QBV66.js", "/build/_shared/chunk-GZRJBEAL.js", "/build/_shared/chunk-2Z5ULB5T.js", "/build/_shared/chunk-G3K6ANVA.js", "/build/_shared/chunk-QPO2HNRI.js", "/build/_shared/chunk-IBZ2AZBF.js", "/build/_shared/chunk-6H526VOR.js", "/build/_shared/chunk-6UKFTLV3.js", "/build/_shared/chunk-O2O6DMNV.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__main/projects.$projectId/board/issue/$issueId": { id: "routes/__main/projects.$projectId/board/issue/$issueId", parentId: "routes/__main/projects.$projectId/board", path: "issue/:issueId", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/board/issue/$issueId-GDA7UZQW.js", imports: ["/build/_shared/chunk-OQDE6W52.js", "/build/_shared/chunk-5TD6K5PI.js", "/build/_shared/chunk-J7TQEEBL.js", "/build/_shared/chunk-YBB5467O.js", "/build/_shared/chunk-FQLV5GPT.js", "/build/_shared/chunk-KEOKG2I2.js", "/build/_shared/chunk-KHVVK2Q5.js", "/build/_shared/chunk-EJKK3DBE.js", "/build/_shared/chunk-TUTQ3UWM.js", "/build/_shared/chunk-RHOETTPI.js", "/build/_shared/chunk-LR5MD5TU.js", "/build/_shared/chunk-4XONY4GO.js", "/build/_shared/chunk-FSLR7CSD.js", "/build/_shared/chunk-TH5S6TNI.js", "/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-WA2U3LPD.js", "/build/_shared/chunk-HB6FFOQV.js", "/build/_shared/chunk-LRKDSTAW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__main/projects.$projectId/board/issue/issue-event": { id: "routes/__main/projects.$projectId/board/issue/issue-event", parentId: "routes/__main/projects.$projectId/board", path: "issue/issue-event", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/board/issue/issue-event-5IBXZDGG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/projects.$projectId/board/issue/new": { id: "routes/__main/projects.$projectId/board/issue/new", parentId: "routes/__main/projects.$projectId/board", path: "issue/new", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/board/issue/new-52CVAFWP.js", imports: ["/build/_shared/chunk-OQDE6W52.js", "/build/_shared/chunk-5TD6K5PI.js", "/build/_shared/chunk-J7TQEEBL.js", "/build/_shared/chunk-YBB5467O.js", "/build/_shared/chunk-FQLV5GPT.js", "/build/_shared/chunk-KEOKG2I2.js", "/build/_shared/chunk-KHVVK2Q5.js", "/build/_shared/chunk-EJKK3DBE.js", "/build/_shared/chunk-TUTQ3UWM.js", "/build/_shared/chunk-RHOETTPI.js", "/build/_shared/chunk-LR5MD5TU.js", "/build/_shared/chunk-FSLR7CSD.js", "/build/_shared/chunk-TH5S6TNI.js", "/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-WA2U3LPD.js", "/build/_shared/chunk-HB6FFOQV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/projects.$projectId/server-error": { id: "routes/__main/projects.$projectId/server-error", parentId: "routes/__main/projects.$projectId", path: "server-error", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects.$projectId/server-error-OXJDESC5.js", imports: ["/build/_shared/chunk-TH5S6TNI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__main/projects/new": { id: "routes/__main/projects/new", parentId: "routes/__main/projects", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/projects/new-A77X33EP.js", imports: ["/build/_shared/chunk-FQLV5GPT.js", "/build/_shared/chunk-7QPIFFAH.js", "/build/_shared/chunk-UD3IMZBA.js", "/build/_shared/chunk-TUTQ3UWM.js", "/build/_shared/chunk-QPO2HNRI.js", "/build/_shared/chunk-RHOETTPI.js", "/build/_shared/chunk-IBZ2AZBF.js", "/build/_shared/chunk-6H526VOR.js", "/build/_shared/chunk-6P7PDWVX.js", "/build/_shared/chunk-O2O6DMNV.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/logout": { id: "routes/action/logout", parentId: "root", path: "action/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/action/logout-D3BW4IB3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/set-theme": { id: "routes/action/set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action/set-theme-DRB6M64F.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JGUZNS22.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-JAGVUVAV.js", imports: ["/build/_shared/chunk-5TD6K5PI.js", "/build/_shared/chunk-WKLAUMLQ.js", "/build/_shared/chunk-YBB5467O.js", "/build/_shared/chunk-UD3IMZBA.js", "/build/_shared/chunk-KHVVK2Q5.js", "/build/_shared/chunk-2Z5ULB5T.js", "/build/_shared/chunk-QPO2HNRI.js", "/build/_shared/chunk-RHOETTPI.js", "/build/_shared/chunk-6H526VOR.js", "/build/_shared/chunk-LR5MD5TU.js", "/build/_shared/chunk-O2O6DMNV.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a77482cc", hmr: void 0, url: "/build/manifest-A77482CC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action/set-theme": {
    id: "routes/action/set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: set_theme_exports
  },
  "routes/action/logout": {
    id: "routes/action/logout",
    parentId: "root",
    path: "action/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__main": {
    id: "routes/__main",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: main_exports
  },
  "routes/__main/projects.$projectId": {
    id: "routes/__main/projects.$projectId",
    parentId: "routes/__main",
    path: "projects/:projectId",
    index: void 0,
    caseSensitive: void 0,
    module: projects_projectId_exports
  },
  "routes/__main/projects.$projectId/server-error": {
    id: "routes/__main/projects.$projectId/server-error",
    parentId: "routes/__main/projects.$projectId",
    path: "server-error",
    index: void 0,
    caseSensitive: void 0,
    module: server_error_exports
  },
  "routes/__main/projects.$projectId/analytics": {
    id: "routes/__main/projects.$projectId/analytics",
    parentId: "routes/__main/projects.$projectId",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: analytics_exports
  },
  "routes/__main/projects.$projectId/board": {
    id: "routes/__main/projects.$projectId/board",
    parentId: "routes/__main/projects.$projectId",
    path: "board",
    index: void 0,
    caseSensitive: void 0,
    module: board_exports
  },
  "routes/__main/projects.$projectId/board/issue/issue-event": {
    id: "routes/__main/projects.$projectId/board/issue/issue-event",
    parentId: "routes/__main/projects.$projectId/board",
    path: "issue/issue-event",
    index: void 0,
    caseSensitive: void 0,
    module: issue_event_exports
  },
  "routes/__main/projects.$projectId/board/issue/$issueId": {
    id: "routes/__main/projects.$projectId/board/issue/$issueId",
    parentId: "routes/__main/projects.$projectId/board",
    path: "issue/:issueId",
    index: void 0,
    caseSensitive: void 0,
    module: issueId_exports
  },
  "routes/__main/projects.$projectId/board/issue/new": {
    id: "routes/__main/projects.$projectId/board/issue/new",
    parentId: "routes/__main/projects.$projectId/board",
    path: "issue/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/__main/projects.$projectId/$": {
    id: "routes/__main/projects.$projectId/$",
    parentId: "routes/__main/projects.$projectId",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/__main/projects": {
    id: "routes/__main/projects",
    parentId: "routes/__main",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/__main/projects/new": {
    id: "routes/__main/projects/new",
    parentId: "routes/__main/projects",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
