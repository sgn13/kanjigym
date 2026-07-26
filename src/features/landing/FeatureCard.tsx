export const FeatureCard = (props: {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card p-8 cursor-pointer">
    {/* <div className="size-12 rounded-lg bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-2 [&_svg]:stroke-white [&_svg]:stroke-2">
      {props.icon}
    </div> */}

    <div className="text-lg font-bold text-[36px] text-[#557DEC]">{props.title}</div>

    {/* <div className="my-3 w-8 border-t border-purple-400" /> */}

    <div className="mt-4 text-lg font-bold text-[36px]">{props.children}</div>
  </div>
);
