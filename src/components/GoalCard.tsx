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

    return (
        <>
    {  goalsArray.map((goal:GoalsPropWithId) =>
           <li className="" key={goal.id}>
             <CourseGole titel="sasas"  age={37} handleDelete={()=>onDelete(goal.id)}>
               <p className="">{goal.titel}<p className=""></p>{goal.description}  </p>
             </CourseGole>
            </li>)}
            </>
    );
};

export default GoalCard;