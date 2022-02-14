import { useEffect, useRef, useContext } from "react";
import { StoreContext } from "../App";
import { disabledTypes, userSpecificDisables } from '../constants/disabledOptions'

export default function PdfViewerComponent(props) {
  let { userType, instance, setInstance, arrayBuffer } = useContext(StoreContext);
  const containerRef = useRef(null);
  const PSPDFKitRef = useRef(null);
  let PSPDFKit;

  useEffect(() => {
    const container = containerRef.current;
    (async function () {
      if(PSPDFKitRef.current) {
        // To avoid importing pspdfkit library everytime, we are keeping it in a reference.
        PSPDFKit = PSPDFKitRef.current
      } else {
        PSPDFKit = await import("pspdfkit"); 
      }
      if(!instance.annotationPresets) {
        instance = await PSPDFKit.load({
          container,
          document: props.document,
          baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        });
      } else {
        instance = await PSPDFKit.load({
          container,
          document: arrayBuffer,
          baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        });
      }
      instance.setToolbarItems(instance.toolbarItems.filter((item) => !disabledTypes?.includes(item.type) && !userSpecificDisables?.[userType].includes(item.type)));
      setInstance(instance)
      // Line added
    })();
    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [userType]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
