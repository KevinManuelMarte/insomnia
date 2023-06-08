interface Prope {
  children: JSX.Element;
  color: string;
  href: string;
  text: string;
}

export default function Boton(props: Prope) {
  return (
    <a
      className={`rounded-full border-t-2 bg-gradient-to-r hover:text-2xl outline outline-4 outline-offset-2 outline-transparent duration-200
      ${
        props.text === "s"
          ? "px-6 py-2 hover:px-8 hover:py-3 my-1 hover:my-0"
          : "p-4 m-2 hover:p-6 hover:m-0"
      }
      ${
        props.color === "noche"
          ? "border-noche-300/50 from-ocaso-500 to-noche-500 text-noche-100 hover:outline-ocaso-500/80"
          : null
      }
      ${
        props.color === "red"
          ? "border-red-300/50 from-red-500 to-rose-500 text-noche-100 hover:outline-rose-500/80"
          : null
      }
      ${
        props.color === "orange"
          ? "border-orange-300/50 from-orange-500 to-amber-500 text-noche-100 hover:outline-orange-500/80"
          : null
      }
      ${
        props.color === "sky"
          ? "border-cyan-300/50 from-blue-500 to-cyan-500 text-noche-100 hover:outline-cyan-500/80"
          : null
      }
      ${
        props.color === "slate"
          ? "border-slate-700/50 from-slate-950 to-slate-900 text-slate-100 hover:outline-slate-900/80"
          : null
      }
     `}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
