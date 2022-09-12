import React from "react";

import { Search, Help } from "@material-ui/icons";

function EncabezadoChat({ nombreCanal }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash"> #</span>
          {nombreCanal}
        </h3>
      </div>

      <div className="chatHeader__right">
        <div className="chatHeader__search">
          <input placeholder="buscar" />
          <Search />
        </div>
        <Help />
      </div>
    </div>
  );
}

export default EncabezadoChat;
