import { ProjectsGrid } from "@/components";
import { Repos } from "@/lib/types";
import { FC } from "react";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/users/abdessamadpas/repos?per_page=100"
  );
  const repos = await res.json();

  return {
    props: {
      repos: repos,
    },
    revalidate: 60 * 60,
  };
}

const Projects: FC<{ repos: Repos[] }> = ({ repos }) => {
  return <>{<ProjectsGrid repos={repos} />}</>;
};
export default Projects;
