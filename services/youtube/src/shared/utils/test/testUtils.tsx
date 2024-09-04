import { render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { QueryProviderForTest } from "../../components/QueryProvider/QueryProviderForTest";

const Providers = ({ children }: { children: ReactNode }) => {
  return <QueryProviderForTest>{children}</QueryProviderForTest>;
};

function customRender(ui: ReactElement, options = {}) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
