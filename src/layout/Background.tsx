type IBackground = {
  children: React.ReactNode;
};
const Background = (props: IBackground) => {
  return <div className="bg-gray-100/60">{props.children}</div>;
};
export { Background };
