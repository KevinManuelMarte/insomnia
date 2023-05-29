interface Prope {
  children: JSX.Element;
}

export default function Midcol(props: Prope): JSX.Element {
  return (
    <div className="2xl:col-span-8 xl:col-span-6 lg:col-span-6 col-span-12 px-4">
      <div className="grid grid-cols-12 gap-4">
        {props.children}
      </div>
    </div>
  );
}
