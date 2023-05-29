interface Prope {
  children: JSX.Element
}

export default function Table(props: Prope): JSX.Element {
  return (
    <table className="col-span-12 text-left border-separate lg:border-spacing-4 border-spacing-2 border border-noche-700 rounded-lg md:text-base text-sm">
      {props.children}
    </table>
  )
}
