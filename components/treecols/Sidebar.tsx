interface Prope {
  children : JSX.Element;
}

export default function Sidebar(props:Prope): JSX.Element {
  return (
    <div className="col-span-3 lg:block hidden">
      <div className="grid grid-cols-12 gap-4 bg-noche-700/20 rounded-lg p-4">
        {props.children}
      </div>
    </div>
  )
}
