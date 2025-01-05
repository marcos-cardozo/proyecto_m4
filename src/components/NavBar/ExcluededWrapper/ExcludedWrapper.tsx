"use client";

import { usePathname } from "next/navigation";

const excludeRoutes = ["/auth/login", "/auth/register"];

import { ReactNode } from "react";

const ExcludedWrapper = ({ children }: { children: ReactNode }) => {
  const path = usePathname();


  if (!excludeRoutes.includes(path)) return children
};

export default ExcludedWrapper;
