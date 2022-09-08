import { Variants } from "framer-motion";
import { createCustomContext } from "utils/createCustomContext";

const { Provider: VariantProvider, useCustomContext: useVariantContext } =
  createCustomContext<Variants>();

export { useVariantContext, VariantProvider };
