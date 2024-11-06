import { type ReactNode } from "react";
type infoMode={
    mode: "hint" | "warning";
    children: ReactNode;
}
const InfoBox = ({ mode,children }: infoMode) =>
{
    if(mode=== "hint")
    {
         return (
        <aside className="infobox infobox-hint">
            <p>{children }</p>
    </aside>
    );
   }
    return (
        <aside className="infobox infobox-warning warning--medium">
            <h2 className="">Warning</h2>
            <p>{children }</p>
    </aside>
    );
};

export default InfoBox;