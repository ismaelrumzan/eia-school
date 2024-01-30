import { Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { eiaTheme } from "./theme";

export function ButtonPrimary({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Flowbite theme={{ theme: eiaTheme }}>
      <Button color="primary" size="md">
        {children}
      </Button>
    </Flowbite>
  );
}
