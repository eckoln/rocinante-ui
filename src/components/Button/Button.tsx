import React from "react";

type Props = React.ComponentProps<"button">;

export default function Button({ ...props }: Props) {
  return (
    <button
      className="px-3 py-1.5 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors"
      {...props}
    />
  );
}
