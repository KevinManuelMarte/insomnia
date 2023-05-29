interface Prope {
  children : JSX.Element;
}

export default function Sidebar(props:Prope): JSX.Element {
  return (
    <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-3 lg:block hidden">
      <div className="grid grid-cols-12 sticky top-24">
        {props.children}
      </div>
    </div>
  )
}
