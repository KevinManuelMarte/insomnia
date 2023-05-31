interface Prope {
  children : JSX.Element;
}

export default function Sidebar(props:Prope): JSX.Element {
  return (
    <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-3 lg:block hidden">
      <div className="grid grid-cols-12 gap-4 bg-ex-100 rounded-lg p-4">
        {props.children}
      </div>
    </div>
  )
}
