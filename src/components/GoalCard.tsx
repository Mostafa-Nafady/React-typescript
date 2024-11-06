import { GoalsPropWithId } from "../App";
import CourseGole from "./CourseGole";

// import infoMode from "../components/InfoBox"
import InfoBox from "../components/InfoBox";
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
      {  (goalsArray.length==0) && <InfoBox mode="hint" >Please enter your first goal ! </InfoBox>}
        {goalsArray.map((goal: GoalsPropWithId) =>
      
           <li className="" key={goal.id}>
             <CourseGole  title={goal.titel} handleDelete={()=>onDelete(goal.id)}>
               <p className="">{goal.description}  </p>
             </CourseGole>
            </li>)}
            </>
    );
};

export default GoalCard;