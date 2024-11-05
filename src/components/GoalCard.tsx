import { GoalsPropWithId } from "../App";
import CourseGole from "./CourseGole";


type handleDelete = (id: number)=> void

interface GoalCardProb
{
    goalsArray: GoalsPropWithId[];
    onDelete:handleDelete
}

const GoalCard = ({ goalsArray, onDelete }: GoalCardProb) =>
{
console.log("goalsArray",goalsArray)
    return (
        <>
    {  goalsArray.map((goal:GoalsPropWithId) =>
           <li className="" key={goal.id}>
             <CourseGole  title={goal.titel} handleDelete={()=>onDelete(goal.id)}>
               <p className="">{goal.description}  </p>
             </CourseGole>
            </li>)}
            </>
    );
};

export default GoalCard;