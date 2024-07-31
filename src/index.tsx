import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ArcgisMap
      // This is the test item id, the api ket i created from the account isnt working yet, so I'll check the previledges on the free account if thats the issue
      itemId="d5dda743788a4b0688fe48f43ae7beb9"
      // center={}
      onArcgisViewReadyChange={(event: any) => {
        console.log("MapView ready", event);
      }}
    >
      <ArcgisSearch position="top-left"></ArcgisSearch>
      <ArcgisLegend position="bottom-left">Arcgis React Sample</ArcgisLegend>
    </ArcgisMap>
  </React.StrictMode>
);
