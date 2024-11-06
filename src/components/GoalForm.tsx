import { useRef } from "react";

interface GoalFormProb
{
    handleAddNewGoal: () => void;
    setInputTitle: (e: string) => void;
    setInputDesc: (e: string) => void;
    inputTitle: string;
    inputDesc: string;
}
const GoalForm = ({ handleAddNewGoal, setInputTitle,setInputDesc,inputTitle,inputDesc }: GoalFormProb) =>
{
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);
    const handleAddGoal = (event : React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        handleAddNewGoal();
       

    }
    const handleInputTitle = (e :React.ChangeEvent<HTMLInputElement>) =>
    {
      setInputTitle(e.target.value)
    }
    return (
        <form action="" className=""
            onSubmit={handleAddGoal  }>
            <p >
            <label htmlFor="goal"> your Goal </label>
                <input type="text" id="goal" onChange={ handleInputTitle  } value={inputTitle } ref={ goalRef}/>
                </p>
            <p >
            <label htmlFor="Summary">Short Summary </label>
                <input type="text" id="Summary" onChange={(e) => setInputDesc(e.target.value)} value={inputDesc} ref={ summaryRef} />
            </p>
            <p >
                <button>Add Goal</button>
            </p>
          
     </form>
    );
};

export default GoalForm;