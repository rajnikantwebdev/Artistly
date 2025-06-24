"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <NavigationMenu
      className="py-2 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50"
      viewport={false}
    >
      <NavigationMenuList className=" w-full">
        <NavigationMenuItem>
          <Image
            src={"/artistly.svg"}
            width={110}
            height={120}
            alt="artistly"
          />
        </NavigationMenuItem>
        <div className="flex items-center">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/artists">Artists</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/artist-onboarding">Artist onboarding</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}