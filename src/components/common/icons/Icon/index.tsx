import Image from "next/image";

export interface Props {
  size?: "small" | "medium" | "large";
  src: string;
}

const sizeLookUpTable = {
  small: 30,
  medium: 160,
  large: 200,
};

function Icon({ size = "small", src }: Props) {
  return (
    <Image
      alt="ranking icon"
      src={src}
      width={sizeLookUpTable[size]}
      height={sizeLookUpTable[size]}
    />
  );
}

export default Icon;
