import { createSnapModifier } from "@dnd-kit/modifiers";

const gridSize = 20; // pixels
export const snapToGridModifier = createSnapModifier(gridSize);
