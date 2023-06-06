interface Prope {
  children: JSX.Element;
}

export default function Midcol(props: Prope): JSX.Element {
  return (
    <div className="xl:col-span-6 lg:col-span-6 col-span-12">
      <div className="grid grid-cols-12 gap-4 bg-noche-700/20 rounded-xl xl:p-8 md:p-4 p-2">
        {props.children}
      </div>
    </div>
  );
}
