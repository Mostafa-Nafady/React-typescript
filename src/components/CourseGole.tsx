import {FC, type PropsWithChildren, type ReactNode } from "react";

// interface GoalsProp
// {
//     titel: string;
//     // description:string;
//     children: ReactNode
// }

type GoalsProp = PropsWithChildren<{  title:string,handleDelete:()=>void}> // { titel: string; description:string} & {children:ReactNode}
// let title :GoalsProp ={titel:"cvcvcbvb",description:"sdsd"} ;


const CourseGole: FC<GoalsProp> = ({  children,title ,handleDelete}) =>
    
{//handleDelete
    
    return (
        <article>
        <div>
            <h2 className="">{title} </h2>
                {children}  
            </div>
            <button onClick={handleDelete}>Delete</button> 
            </article>
    );
};

export default CourseGole;