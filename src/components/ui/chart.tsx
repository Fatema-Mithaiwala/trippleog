import * as React from "react";
import { Tooltip } from "recharts";

interface ChartTooltipContentProps<
  ValueType extends React.ReactNode = string | number,
  NameType extends React.ReactNode = string
> {
  active?: boolean;
  payload?: Array<{
    name?: NameType;
    value?: ValueType;
    dataKey?: string | number;
  }>;
  label?: NameType;
}

export function ChartTooltipContent<
  ValueType extends React.ReactNode = string | number,
  NameType extends React.ReactNode = string
>({
  active,
  payload,
  label,
}: ChartTooltipContentProps<ValueType, NameType>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-background border rounded-md p-2 text-xs shadow">
      {label != null && <div className="font-medium">{label}</div>}
      {payload.map((entry) => {
        const name = entry.name ?? "—";
        const value = entry.value ?? "—";
        const key = entry.dataKey ?? Math.random(); // fallback key

        return (
          <div key={String(key)} className="flex justify-between">
            <span>{name}</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
}
