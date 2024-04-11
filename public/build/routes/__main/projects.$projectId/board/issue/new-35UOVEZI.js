import {
  IssuePanel
} from "/build/_shared/chunk-LPML2SI5.js";
import "/build/_shared/chunk-GYFGIZTY.js";
import "/build/_shared/chunk-YGP6G43A.js";
import "/build/_shared/chunk-2BRJKPL7.js";
import "/build/_shared/chunk-6NT7ORZH.js";
import "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-KORFVFP2.js";
import "/build/_shared/chunk-7UW2IBDE.js";
import "/build/_shared/chunk-UD3IMZBA.js";
import "/build/_shared/chunk-KEOKG2I2.js";
import "/build/_shared/chunk-KHVVK2Q5.js";
import "/build/_shared/chunk-GZRJBEAL.js";
import "/build/_shared/chunk-2Z5ULB5T.js";
import "/build/_shared/chunk-EJKK3DBE.js";
import "/build/_shared/chunk-EZ43UAVT.js";
import "/build/_shared/chunk-RW3FMY4H.js";
import "/build/_shared/chunk-Y2ZHDY2W.js";
import "/build/_shared/chunk-IBZ2AZBF.js";
import "/build/_shared/chunk-6H526VOR.js";
import "/build/_shared/chunk-LR5MD5TU.js";
import "/build/_shared/chunk-6UKFTLV3.js";
import "/build/_shared/chunk-O2O6DMNV.js";
import "/build/_shared/chunk-FSLR7CSD.js";
import "/build/_shared/chunk-TGCD45UD.js";
import "/build/_shared/chunk-TH5S6TNI.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import "/build/_shared/chunk-IYD4CINF.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/board/issue/new.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { projectId } = data;
  const title = `Jira clone - Create issue`;
  const description = "Create new issue, edit it and and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/new`;
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
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
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
  return [...formatTags(tags), ...formatProperties(properties)];
};
function IssuePanelRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IssuePanel, {}, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/new.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
export {
  IssuePanelRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/board/issue/new-35UOVEZI.js.map
