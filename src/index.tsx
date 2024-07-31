import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

const APP_ID = import.meta.env.VITE_APP_ID;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ArcgisMap
      // This is the test item id, the api ket i created from the account isnt working yet, so I'll check the previledges on the free account if thats the issue
      itemId={APP_ID}
      // center={}
      onArcgisViewReadyChange={(event: any) => {
        console.log("Map", event);
      }}
    >
      <ArcgisSearch position="top-left"></ArcgisSearch>
      <ArcgisLegend position="bottom-left">Arcgis React Sample</ArcgisLegend>
    </ArcgisMap>
  </React.StrictMode>
);
