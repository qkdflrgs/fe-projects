type Props = {
  height?: number;
};

export const Spacing = ({ height = 16 }: Props) => {
  return <div className="w-full" style={{ height: `${height}px` }} />;
};
