import { useState } from "react";
import { View } from "./view";

const Sample = () => {
  const [showError, setShowError] = useState(true);

  return <View showError={showError} setShowError={setShowError} />;
};

export { Sample };
