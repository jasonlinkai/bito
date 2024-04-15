"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Route } from "@/interfaces";

const routes: Route[] = [
  {
    title: "Home",
    pathname: "/",
  },
];

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row w-full justify-between px-10">
      {routes.map(({ title, pathname: path }) => {
        return (
          <li key={title}>
            <Link
              className={clsx([
                {
                  "text-blue-500": pathname === path,
                  "text-white hover:text-blue-500 transition-colors duration-300":
                    pathname !== path,
                },
              ])}
              href={path}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
