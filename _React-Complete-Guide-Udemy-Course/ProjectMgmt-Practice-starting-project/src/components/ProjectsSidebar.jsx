import Button from "./Button";
export default function ProjectsSidebar({
  onSelectProject,
  onStartAddProject,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Your Projects
      </h2>
      <div className="mt-8">
        <Button className="text-red-100" onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = " rounded-sm p-2 w-full";
          if (project.id === selectedProjectId) {
            cssClasses += "text-stone-300 underline bg-stone-500/80";
          } else {
            cssClasses += "text-stone-200";
          }
          return (
            <li key={project.id} className="mt-4">
              <button
                className={cssClasses}
                onClick={() => {
                  onSelectProject(project.id);
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
