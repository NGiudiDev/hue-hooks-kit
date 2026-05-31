# @ngiudi.dev/hue-hooks-kit

A collection of React hooks for media queries, responsive design, and routing.

## Installation

```bash
npm install @ngiudi.dev/hue-hooks-kit
```

---

## Hooks

### `useMediaQuery`

Subscribes to a CSS media query and returns `true` when it matches. SSR-safe.

```jsx
import { useMediaQuery } from "@ngiudi.dev/hue-hooks-kit";

function Component() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return <p>Dark mode: {isDark ? "on" : "off"}</p>;
}
```

---

### `useResponsive`

Returns a set of boolean flags based on predefined breakpoints.

```jsx
import { useResponsive } from "@ngiudi.dev/hue-hooks-kit";

function Component() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <p>
      {isMobile && "Mobile"}
      {isTablet && "Tablet"}
      {isDesktop && "Desktop"}
    </p>
  );
}
```

---

### `useRouter`

A unified hook for routing — wraps `react-router-dom`. Requires the component to be inside a `<Router>` context.

```jsx
import { useRouter } from "@ngiudi.dev/hue-hooks-kit";

function Component() {
  const { pathname, query, push } = useRouter();

  return (
    <div>
      <p>Path: {pathname}</p>
      <button onClick={() => push("/other")}>Go to /other</button>
    </div>
  );
}
```