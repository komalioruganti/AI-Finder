import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import AiToolCard from "../AiToolCard";
import getAiHandler from "../../features/getAiHandler";

const HomePage = () => {
  const { getAllAI } = getAiHandler();

  const [query, setQuery] = useState();
  const [getAllTool, setGetAllTool] = useState([]);
  const [searching, setSearching] = useState(false);

  const getAITools = async () => {
    await getAllAI().then((res) => {
      console.log(res), setGetAllTool(res.data);
    });
  };

  useEffect(() => {
    getAITools();
  }, []);

  return (
    <div className="container mx-auto text-white mt-20 px-5 my-40">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-cyan-600 text-transparent bg-clip-text">
          AI Finder
        </h1>
        <p className="mt-3 text-[1rem] md:text-[20px]">
          Discover the AI tool that fits your needs - Enhance your workflow with
          the power of AI.
        </p>
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="min-w-[200px] w-[400px]">
          <SearchInput
            setGetAllTool={setGetAllTool}
            setQuery={setQuery}
            query={query}
            setSearching={setSearching}
          />
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <h1 className="mb-5 text-xl md:text-2xl font-bold">
          {query ? "results" : "Discover - The top 10 AI tools"}
        </h1>

        <div className="flex flex-wrap gap-5">
          {getAllTool.length > 0
            ? getAllTool.map((el) => <AiToolCard kay={el.slug} tool={el} />)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
