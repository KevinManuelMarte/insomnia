interface Prope {
  children: JSX.Element
}

export default function Container(props: Prope): JSX.Element {
  return (
    <div className="2xl:px-0 lg:px-16 md:px-4 px-2">
      {props.children}
    </div>
  )
}
