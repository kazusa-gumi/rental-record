import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { memo } from "react";

type Props = {
  children: ReactNode;
};

export const Room = memo(
  ({ children }: Props): JSX.Element => (
    <Box
      sx={{
        width: 100,
        height: 40,
        backgroundColor: "#c1ffff",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  )
);

Room.displayName = "Room";
