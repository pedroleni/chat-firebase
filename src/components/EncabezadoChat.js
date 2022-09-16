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
        <img
          class="logo"
          src="https://cdn.discordapp.com/attachments/993445344358699118/1020235067760586762/Akira-PNGshadow.png"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default EncabezadoChat;
