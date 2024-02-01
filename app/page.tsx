
import { ThemeToggle } from "./tasks/theme-toggle";
import TaskPage from "./tasks/TaskPage";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <ThemeToggle />
      <TaskPage />
    </section>
  )
}
