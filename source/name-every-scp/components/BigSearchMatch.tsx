import { ReactNode, useEffect, useRef, useState } from "react";

export default function BigSearchMatch({
  title,
  altTitle,
}: {
  title: ReactNode;
  altTitle: ReactNode;
}) {
  return (
    <span className="flex gap-0.5 rounded border border-gray-300 p-0.5">
      <span className="rounded-xl border bg-gray-100 px-[0.4rem] pb-[0.05rem] pt-[0.15rem] font-bold">
        {title}
      </span>
      <span
        className={`px-[0.25rem] pb-[0.15rem] pt-[0.25rem] text-xs first-line:text-sm`}
      >
        {altTitle}
      </span>
    </span>
  );
}

export function YesMatch({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function NoMatch({ children }: { children: ReactNode }) {
  return <span className="tracking-tight blur-[3px]">{children}</span>;
}
