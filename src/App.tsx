import React, { useState } from 'react';

const App : React.FC = () => {
  const [goalList, setGoalList] = useState<string[]>(["Achieve mastery in Puppeteer765"]);
  const [newGoal, setNewGoal] = useState<string>("");

  const handleChangeGoalInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(event.target.value);
  }

  const handleRemoveFirstItem = (key: number) => {
    if(key === 0) {
      setGoalList([...goalList].slice(1));
    }
  }

  const handleAddNewGoal = () => {
    setGoalList([newGoal, ...goalList]);
    setNewGoal("");
  }

  return (
    <div  data-testId="MainApp">
      {/*Don't remove the data-testId as it's required for the system to detect that the app is live */}
      <div>
        <h2>New Goal</h2>
        <input data-testId="GoalInput" type="text" value={newGoal} onChange={handleChangeGoalInput} />
        <button data-testId="Add Goal" onClick={handleAddNewGoal}>Add Goal</button>
      </div>
      <div>
        {
          goalList.map((goal, key) => {
            return (
              <div data-testId={goal} key={key} onClick={() => handleRemoveFirstItem(key)}>
                {goal}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
