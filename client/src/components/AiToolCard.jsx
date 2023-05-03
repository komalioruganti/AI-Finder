import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AiToolCard = ({ tool }) => {
  console.log(tool);
  const navigate = useNavigate();
  const infoHandler = () => {
    navigate(`/ai/${tool?.slug}`);
  };
  return (
    <div
      key={tool.slug}
      className="bg-gray-700 shadow-md rounded-md p-4 w-[200px] md:w-[250px] text-white"
    >
      <div className="flex justify-center">
        <div className="h-24 md:h-32 w-24 md:w-32">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={tool.image}
            alt={tool.name}
          />
        </div>
      </div>
      <div className="mt-2">
        <h5 className="text-lg font-semibold mb-2 text-center">{tool.name}</h5>
        <p className="mb-2 font-thin">
          {tool.description.length > 100
            ? tool.description.slice(0, 100) + " ... more"
            : tool.description}
        </p>
        <ul className="flex flex-wrap gap-1 mb-4">
          {tool.tags.map((tag) => (
            <li
              key={tag}
              className="mb-2 text-xs md:text-sm px-2 py-1 rounded-lg bg-gray-200 text-gray-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={infoHandler}
          className="bg-blue-700 p-2 text-xs md:text-sm"
        >
          More Info
        </Button>
      </div>
    </div>
  );
};

AiToolCard.propTypes = {
  tool: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AiToolCard;
