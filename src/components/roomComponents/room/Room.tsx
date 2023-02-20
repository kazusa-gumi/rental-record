import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { memo } from "react";

type Props = {
  children: ReactNode;
};

export const Room = memo(
  ({ children }: Props): JSX.Element => (
    <Box sx={{ width: 300, height: 300, backgroundColor: "primary.dark" }}>
      {children}
    </Box>
  )
);

Room.displayName = "Room";
