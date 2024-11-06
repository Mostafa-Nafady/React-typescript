import { useState } from "react";
import Header from "./components/Header";
import GoalCard from "./components/GoalCard";
import GoalForm from "./components/GoalForm";
import InfoBox from "./components/InfoBox";
export interface GoalsPropWithId
{
    titel: string;
    description:string;
   id:number
}
export default function App()
{
  const [goals, setGoals] = useState<GoalsPropWithId[]>([])
  const[inputTitle,setInputTitle]=useState<string>("")
  const[inputDesc,setInputDesc]=useState<string>("")
  const test = { imgAlt: "image sdsdbhasfdb", imgSrc: "/goals.jpg" };
  /*Add new card */
  function handleAddNewGoal()
  {
    setGoals((prev) =>
    {
      const newGoal: GoalsPropWithId = {
        titel: inputTitle,
        description: inputDesc,
        id: Math.random()
      }
      
      return prev.length ? [...prev, newGoal] : [newGoal]
    });
      setInputTitle("");
    setInputDesc("");
  
  }
  /*Delete card */
  function handleDelete(id:number)
  {
     setGoals((prev) =>
          prev.filter((goalItem:GoalsPropWithId)=>goalItem.id !==id))
  }
    
  console.log(goals)
   return (
  <main className="">
    <Header image={test}  ><h1 className="">Your Course Goals !</h1> </Header>
       {/* <button onClick={handleAddNewGoal}>Add Goal</button> */}
       <GoalForm handleAddNewGoal={handleAddNewGoal} setInputTitle={setInputTitle} setInputDesc={setInputDesc} inputTitle={inputTitle} inputDesc={inputDesc} />
      {  (goals.length>3) && <InfoBox mode="warning" >Don`t provide several goals , u have to arrange ! </InfoBox>}
      
       <ul>
         <GoalCard goalsArray={goals} onDelete={(id)=> handleDelete(id)} />
         </ul>
     </main>
   );
}
