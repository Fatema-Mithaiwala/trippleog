"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {

  // Correctly typed Chevron component
  const Chevron = ({
    className,
    orientation = "left",
    size,
    disabled,
  }: {
    className?: string;
    size?: number;
    disabled?: boolean;
    orientation?: "left" | "up" | "down" | "right";
  }) => {
    if (orientation === "left") {
      return <ChevronLeft className={cn("h-4 w-4", className)} />;
    }
    return <ChevronRight className={cn("h-4 w-4", className)} />;
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        ...classNames,
      }}
      components={{
        Chevron,
      }}
      {...props}
    />
  );
}

export { Calendar };
