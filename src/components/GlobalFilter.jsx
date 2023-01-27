import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((newValue) => {
    setFilter(newValue || undefined);
  }, 1000);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
}
