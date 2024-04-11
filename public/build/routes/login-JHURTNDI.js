import {
  Content,
  Item,
  ItemIndicator,
  ItemText,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  TriggerIcon,
  Value,
  Viewport
} from "/build/_shared/chunk-GYFGIZTY.js";
import "/build/_shared/chunk-2BRJKPL7.js";
import {
  userMock1
} from "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-UD3IMZBA.js";
import "/build/_shared/chunk-KHVVK2Q5.js";
import "/build/_shared/chunk-2Z5ULB5T.js";
import {
  UserAvatar
} from "/build/_shared/chunk-RW3FMY4H.js";
import {
  Button
} from "/build/_shared/chunk-Y2ZHDY2W.js";
import "/build/_shared/chunk-6H526VOR.js";
import "/build/_shared/chunk-LR5MD5TU.js";
import "/build/_shared/chunk-O2O6DMNV.js";
import "/build/_shared/chunk-FSLR7CSD.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-TGCD45UD.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/login.tsx
var import_node = __toESM(require_node());

// src/app/ui/login/login.view.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LoginView = ({ users }) => {
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(userMock1);
  const onValueChange = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-[400px] pt-[10vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-primary-black text-5xl text-font", children: "Select login user" }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-8 mt-3 font-primary-light text-lg text-font-subtle", children: "There is no authentication involved. You can login with any user you want! Keep in mind you can only access the projects the user is member of. Try to create issues and comments with different users to see how it reflects in the UI and database. You can logout on the user avatar." }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mx-auto w-[300px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Root,
        {
          name: "user",
          defaultValue: userMock1.id,
          onValueChange,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Trigger,
              {
                className: "flex w-full justify-between",
                "aria-label": "Open user select",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...selectedValue }, void 0, false, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 41,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Value, {}, void 0, false, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 42,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriggerIcon, {}, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 36,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollUpButton, {}, void 0, false, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Viewport, { children: [
                users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { value: user.id, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator, {}, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 51,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 52,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemText, { children: user.name }, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 53,
                    columnNumber: 19
                  }, this)
                ] }, index, true, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 50,
                  columnNumber: 17
                }, this)),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 56,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollDownButton, {}, void 0, false, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 58,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/login/login.view.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        false,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/login/login.view.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// src/app/routes/login.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  const title = "Jira clone - Login";
  const description = "Select your user profile and login to see your projects.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/login";
  const tags = {
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
  };
  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};
function LoginRoute() {
  const { users } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoginView, { users }, void 0, false, {
    fileName: "src/app/routes/login.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
export {
  LoginRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/login-JHURTNDI.js.map
