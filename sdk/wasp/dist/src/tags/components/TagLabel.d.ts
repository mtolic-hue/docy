import { Tag } from "wasp/entities";
type TagLabelSize = "md" | "sm" | "tiny";
interface TagLabelProps {
    tag: Pick<Tag, "id" | "color" | "name">;
    isActive: boolean;
    size?: TagLabelSize;
    showColorCircle?: boolean;
}
export declare function TagLabel({ tag, isActive, size, showColorCircle, }: TagLabelProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=TagLabel.d.ts.map