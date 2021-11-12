import type { NextPage } from "next";
import Head from "next/head";
import { InputSearch } from "../components/HomeComponents/InputSearch";
import { ProjectCard } from "../components/HomeComponents/ProjectCard";

const PROJECTS = [
  {
    id: 1,
    title: "app project",
    createdAt: "2020-01-01",
    nOfDocs: 2,
  },
  {
    id: 2,
    title: "project: fitbit",
    createdAt: "2020-01-02",
    nOfDocs: 2,
  },
  {
    id: 3,
    title: "client documents",
    createdAt: "2020-01-03",
    nOfDocs: 5,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Css Nerdery challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`flex`}>
        <div className="main-content-container flex flex-col w-3/5 md:w-4/6">
          <InputSearch />
          <h1 className="font-bold text-xl text-left">Recently Used</h1>
          <div className="flex space-x-4">
            {PROJECTS.map(({ createdAt, id, nOfDocs, title }) => (
              <ProjectCard
                key={id}
                title={title}
                createdAt={createdAt}
                nOfDocs={nOfDocs}
              />
            ))}
          </div>
        </div>
        <aside className="bg-[#F5F6FC] w-2/5 md:w-2/6">
          <h1 className="font-bold">Sidebar</h1>
        </aside>
      </main>
    </>
  );
};

export default Home;
