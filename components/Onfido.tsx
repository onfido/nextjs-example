import { useRef, useEffect } from "react";
import * as Onfido from "onfido-sdk-ui";

const OnfidoComp = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Onfido.init({
        token:"<token>",
        containerEl: ref.current,
      });
    }
  }, []);

  return <div ref={ref} id="onfido-mount" />;
};

export default OnfidoComp;
