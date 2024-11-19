import { Button } from "@/components/ui/button";
import { Link, LinkProps } from "react-router-dom";
import { forwardRef } from "react";

// Create a custom component that combines Link and Button
export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & React.ComponentProps<typeof Button>
>(({ children, variant, size, ...props }, ref) => (
  <Button variant={variant} size={size} asChild>
    <Link ref={ref} {...props}>
      {children}
    </Link>
  </Button>
));

ButtonLink.displayName = "ButtonLink";
