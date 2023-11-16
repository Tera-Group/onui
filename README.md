<h1 align="center">OnUI</h1>

The React UI component library is based on MUI. It overrides all MUI's components and others

## Example

```js
import React from "react";
import { Button, ThemeProvider } from "@teravn/onui";

type ThemeMode = "light" | "dark";

const OnUIProvider = ({ children }: React.PropsWithChildren) => {
  const [mode] = React.useState < ThemeMode > "light";

  return <ThemeProvider settings={{ mode }}>{children}</ThemeProvider>;
};

export default OnUIProvider;
```

## Installation

Install the package in your project directory with:

```bash
yarn add @teravn/onui
```

## License

[The MIT License](./LICENSE).
