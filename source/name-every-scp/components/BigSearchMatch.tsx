import { ReactNode } from "react";

export default function BigSearchMatch({
  title,
  altTitle,
}: {
  title: ReactNode;
  altTitle: ReactNode;
}) {
  return (
    <span className="flex gap-0.5 rounded border bg-gray-100 p-0.5">
      <span className="rounded border bg-white px-[0.25rem] pb-[0.15rem] pt-[0.25rem]">
        {title}
      </span>
      <span className="rounded border bg-white px-[0.25rem] pb-[0.15rem] pt-[0.25rem]">
        {altTitle}
      </span>
    </span>
  );
}

export function YesMatch({ children }: { children: ReactNode }) {
  return <span className="bg-green-200">{children}</span>;
}

export function NoMatch({ children }: { children: ReactNode }) {
  return <span className="blur-[3px]">{children}</span>;
}
