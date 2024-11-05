import { useState } from "react";
import Header from "./components/Header";
import GoalCard from "./components/GoalCard";
export interface GoalsPropWithId
{
    titel: string;
    description:string;
   id:number
}
export default function App()
{
  const[goals,setGoals]=useState<GoalsPropWithId[]> ([])
  let test = { imgAlt: "image sdsdbhasfdb", imgSrc: "/goals.jpg" };
  /*Add new card */
  function handleAddNewGoal()
  {
    setGoals((prev) =>
    {
      const newGoal:GoalsPropWithId= {
        titel: "Learn React + TS",
        description: "learn it all in depth !",
        id:Math.random()
      }
      return [...prev,newGoal]
    })
  }
  /*Delete card */
  function handleDelete(id:number)
  {
     setGoals((prev) =>
          prev.filter((goalItem:GoalsPropWithId)=>goalItem.id !==id))
  }
    
  
   return (
  <main className="">
    <Header image={test}  ><h1 className="">Your Course Goals !</h1> </Header>
       <button onClick={handleAddNewGoal}>Add Goal</button>
       <ul>
         <GoalCard goalsArray={goals} onDelete={(id)=> handleDelete(id)} />
         </ul>
     </main>
   );
}
