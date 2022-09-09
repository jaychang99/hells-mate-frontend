import { HTMLMotionProps, motion } from "framer-motion";
import { defaultFadeInVariants } from "styles/motions";

interface Props extends HTMLMotionProps<"span"> {
  currentStep: number;
  totalSteps: number;
}
function StepIndicator({ currentStep, totalSteps, ...props }: Props) {
  return (
    <motion.span variants={defaultFadeInVariants} {...props}>
      <b>{currentStep}</b> / {totalSteps}
    </motion.span>
  );
}

export default StepIndicator;
