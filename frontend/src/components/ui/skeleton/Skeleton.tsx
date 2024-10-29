import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("block animate-pulse rounded-[.55rem] bg-slate-700", className)}
      {...props}
    />
  )
}

export { Skeleton }
