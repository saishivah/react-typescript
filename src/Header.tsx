type HeadingProps = {
  children: string;
};
export const Header = (props: HeadingProps) => {
  return <h3>{props.children}</h3>;
};
