import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-6 bg-[#191919] rounded-xl border-none">
      <h1 className="text-xl border-b pb-2 text-white">
        {title}
      </h1>
      <p>{children}</p>
    </div>
  );
}
