type IContainer = {
  children: React.ReactNode;
};

const Container = (props: IContainer) => {
  return (
    <div className="relative mx-auto h-screen w-480 bg-white">
      {props.children}
    </div>
  );
};

export { Container };
