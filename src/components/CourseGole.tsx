import {FC, type PropsWithChildren, type ReactNode } from "react";

// interface GoalsProp
// {
//     titel: string;
//     // description:string;
//     children: ReactNode
// }

type GoalsProp = PropsWithChildren<{ titel: string,age:number, handleDelete:()=>void}> // { titel: string; description:string} & {children:ReactNode}
// let title :GoalsProp ={titel:"cvcvcbvb",description:"sdsd"} ;


const CourseGole: FC<GoalsProp> = ({ titel, children,age ,handleDelete}) =>
    
{//handleDelete
    
    return (
        <article>
        <div>
            <h2 className="">{titel}</h2>
                <p className="">{children}  </p>
            </div>
            <button onClick={handleDelete}>Delete</button> 
            </article>
    );
};

export default CourseGole;