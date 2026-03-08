import { NavigationProvider } from "../navigation-context";
import { PageTransition } from "./PageTransition";

export default function RootLayout() {
  return (
    <NavigationProvider>
      <PageTransition />
    </NavigationProvider>
  );
}
