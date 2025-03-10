import { createContext, useContext } from "react";
import { useNavigation as useRemixNavigation, useMatches } from "@remix-run/react";

const NavigationContext = createContext({});
const useNavigation = () => useContext(NavigationContext);

export default function NavigationProvider({ children }) {
  const navigation = useRemixNavigation();
  const routes = useMatches();

  const isLoading = navigation.state === "loading";
  const routePath = routes[routes.length - 1].pathname;
  const locationPath = routePath.replace(/\/\s*$/, "");
  const nextPageCurrentlyLoading = navigation.state === "loading" && navigation.location.pathname;

  return (
    <NavigationContext.Provider
      value={{
        isLoading,
        locationPath,
        nextPageCurrentlyLoading,
        routePath,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider, useNavigation };
