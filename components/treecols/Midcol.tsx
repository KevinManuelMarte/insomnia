interface Prope {
  children: JSX.Element;
}

export default function Midcol(props: Prope): JSX.Element {
  return (
    <div className="2xl:col-span-8 xl:col-span-6 lg:col-span-6 col-span-12">
      <div className="grid grid-cols-12 gap-4 bg-ex-100 rounded-xl p-4">
        {props.children}
      </div>
    </div>
  );
}
