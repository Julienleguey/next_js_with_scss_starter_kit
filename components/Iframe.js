import { useState } from "react";
import Button from "./Shared/Button";

const Iframe = ({ src }) => {
  const [width, setWidth] = useState("600");

  return (
    <div className="d-flex f-col">
      <div className="d-flex h-5 ai-center" style={{ width: "200px" }}>
        <input
          type="range"
          min="200"
          max="1400"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <p className="pl-3">{width}px</p>
      </div>
      <iframe src={src} style={{ width: `${width}px` }} />
    </div>
  );
};

export default Iframe;
