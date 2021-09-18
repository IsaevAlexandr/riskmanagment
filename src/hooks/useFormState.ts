import React from "react";

export function useFormState<T extends {}>() {
  const [form, setState] = React.useState<Partial<T>>({});

  const setField = React.useCallback(
    (name: keyof T) => (value: T[keyof T]) =>
      setState((x) => ({
        ...x,
        [name]: value,
      })),
    []
  );

  const reset = () => setState({});

  return { form, setField, reset };
}
