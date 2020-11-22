import { useState } from "react";
import Link from "./Shared/Link";
import classnames from "classnames";

const Menu = () => {
  const basics = {
    title: "basics",
    links: [
      "breakpoints",
      "concepts",
      "global",
      "syntax",
      "units",
      "variables",
    ],
  };

  const utilities = {
    title: "utilities",
    links: [
      "borders",
      "colors",
      "containers",
      "display",
      "flex",
      "grid",
      "overflow",
      "position",
      "shadow",
      "sizings",
      "spacing",
      "text",
    ],
  };

  const [open, setOpen] = useState("");

  const displayBloc = (obj) => (
    <div className="mb-4">
      <h5 className="mb-2" onClick={() => setOpen(obj.title)}>
        {obj.title}
      </h5>
      <div
        className={classnames(
          "f-col",
          open === obj.title ? "d-flex" : "d-none"
        )}
      >
        {displayLinks(obj)}
      </div>
    </div>
  );

  const displayLinks = (obj) => {
    return obj.links.map((link, index) => (
      <Link key={index} href={`/${obj.title}/${link}`} className="mb-2">
        {link}
      </Link>
    ));
  };

  return (
    <div
      className="p-3 border-right"
      style={{ minWidth: "200px", maxWidth: "200px" }}
    >
      {displayBloc(basics)}
      {displayBloc(utilities)}
    </div>
  );
};

export default Menu;
