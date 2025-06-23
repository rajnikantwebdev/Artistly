import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-2xl",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />)
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />)
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />)
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "bg-gradient-to-r from-purple-700 to-blue-800 text-white cursor-pointer flex items-center w-fit px-4 py-2 text-base font-semibold rounded-full",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />)
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
