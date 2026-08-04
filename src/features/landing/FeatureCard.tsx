export const FeatureCard = (props: {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="cursor-pointer rounded-xl border border-border bg-card p-4">
    <div className="text-center font-bold">
      {props.icon}
    </div>

    {/* <div className="py-4">
      {props.title}
    </div> */}

    {/* <div className="my-3 w-8 border-t border-purple-400" /> */}

    {/* <div className="mt-4 text-[36px] text-lg">{props.children}</div> */}
  </div>
);
