import Button from "./Button";
import Tasks from "./Tasks";
export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button
            onClick={() => {
              onDeleteProject(project.id); // note: ID not needed because it is accessible in app state
            }}
          >
            Clear
          </Button>
        </div>
        <p className="text-stone-400 mb-4">{formattedDate}</p>
        <p className="text-stone-400 mb-4 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        tasks={tasks.filter((task) => task.projectId === project.id)}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
