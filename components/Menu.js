import { useState } from "react";
import Link from "./Shared/Link";
import Button from "./Shared/Button";
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
      "backgrounds",
      "borders",
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
  const [hide, setHide] = useState(false);

  const displayBloc = (obj) => (
    <div className="mb-4">
      <h5 className="mb-2 cursor-pointer" onClick={() => setOpen(obj.title)}>
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
      id="menu"
      className={classnames("p-3 border-right", hide && "d-none")}
      style={{ minWidth: "200px", maxWidth: "200px" }}
    >
      <Button onClick={() => setHide(!hide)}>{hide ? "show" : "hide"}</Button>
      {displayBloc(basics)}
      {displayBloc(utilities)}
    </div>
  );
};

export default Menu;
