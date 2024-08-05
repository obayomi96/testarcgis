import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";

const ArcGISSceneView = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapInstance = new Map({
      basemap: "navigation-dark-3d",
    });
    const view = new SceneView({
      map: mapInstance,
      zoom: 10,
      container: mapRef.current,
      center: [3.3792, 6.5244], // LNG, LAT
    });

    console.log("Unmounting", view);
    return () => mapInstance && view.destroy();
  }, []);

  return <div ref={mapRef} className="sceneview"></div>;
};

export default ArcGISSceneView;
