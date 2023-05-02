import PropTypes from "prop-types";

const AiToolCard = ({ tool }) => {
  console.log(tool);
  return (
    <div
      key={tool.slug}
      className="bg-white shadow-md rounded-md p-4 max-w-[250px] "
    >
      <div className="flex justify-center">
        <div className="h-32 w-32">
          <img className="object-cover" src={tool.imageUrl} alt={tool.name} />
        </div>
      </div>
      <div className="text-gray-800">
        <h5 className="text-lg font-semibold mb-2">{tool.name}</h5>
        <p className="mb-2">{tool.description}</p>
        <ul className="flex flex-wrap mb-4">
          {tool.tags.map((tag) => (
            <li
              key={tag}
              className="mr-2 mb-2 p-2 rounded-md bg-gray-200 text-gray-700"
            >
              {tag}
            </li>
          ))}
        </ul>
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
