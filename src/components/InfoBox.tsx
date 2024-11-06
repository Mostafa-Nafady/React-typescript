import { type ReactNode } from "react";

type infoHint = {
    mode: "hint"
    children: ReactNode;
    
}
type infoWarning = {
    mode: "warning";
    sevirity: "high" | "low" | "medium";
    children: ReactNode;
}
type infoMode = infoHint | infoWarning;
  

const InfoBox = (props: infoMode) =>
{
    const { mode, children } = props;
    if(mode=== "hint")
    {
         return (
        <aside className="infobox infobox-hint">
            <p>{children }</p>
    </aside>
    );
    }
    const { sevirity } = props;
    
    return (
        <aside className={`infobox infobox-warning warning--${sevirity}`}>
            <h2 className="">Warning</h2>
            <p>{children }</p>
    </aside>
    );
};

export default InfoBox;