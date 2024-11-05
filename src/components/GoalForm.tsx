interface GoalFormProb
{
    handleAddNewGoal: () => void;
    setInputTitle: (e: string) => void;
    setInputDesc: (e: string) => void;
}
const GoalForm = ({handleAddNewGoal,setInputTitle,setInputDesc}:GoalFormProb) => {
    return (
        <form action="" className="" onSubmit={(event) =>
        {
            handleAddNewGoal();
            event.preventDefault();
            
        }
        }>
            <p className="">
            <label htmlFor="goal">your Goal </label>
                <input type="text" id="goal" onChange={(e) =>setInputTitle(e.target.value)   } />
                </p>
            <p className="">
            <label htmlFor="Summary">Short Summary </label>
                <input type="text" id="Summary" onChange={(e) => setInputDesc(e.target.value)}  />
            </p>
            <p className="">
                <button>Add Goal</button>
            </p>
          
     </form>
    );
};

export default GoalForm;