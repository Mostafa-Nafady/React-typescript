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
type infoMode =  infoWarning | infoHint; // discriminated union
  

const InfoBox = (props: infoMode) =>
{
    const { mode, children } = props; // extract onlt mode & children 
/*we can`t destruct severity here because it will not be used with mode= hint  */
    if(mode=== "hint") 
    {

         return (
        <aside className="infobox infobox-hint">
            <p>{children }</p>
    </aside>
    );
    }
    /*typescript is smart enough to realize that mode=warning is accept severity prop and validate this code  */
    if (mode == "warning") {
         const { sevirity } = props; // accept this prop value only when it is not has mode="hint"
    
    return (
        <aside className={`infobox infobox-warning warning--${sevirity}`}>
            <h2 className="">Warning</h2>
            <p>{children }</p>
    </aside>
    );
    }
   
};

export default InfoBox;