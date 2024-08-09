import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks && tasks?.length === 0 && (
        <p className="text-2xl font-bold text-stone-700 my-4">No tasks yet</p>
      )}

      <ul>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2 my-2">
              <p className="text-stone-700">{task.title}</p>
              <button
                className="border border-stone-700 px-2"
                onClick={() => {
                  onDeleteTask(task.id);
                }}
              >
                Delete Task
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
