
import { createSnapModifier } from "@dnd-kit/modifiers";

const gridSize = 30; // pixels
export const snapToGrid = createSnapModifier(gridSize);