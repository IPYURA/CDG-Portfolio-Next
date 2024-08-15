import { ReactNode } from "react";

interface ISvgProps {
  width: number;
  height: number;
  color: string;
  children: ReactNode;
}

const Svg = ({ width, height, color, children }: ISvgProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, fill: `${color}` }}
    >
      {children}
    </div>
  );
};

export default Svg;
