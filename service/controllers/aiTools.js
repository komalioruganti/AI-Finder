const AiTool = require("../model/aiToolModel");

const getAllAITools = async (req, res, next) => {
  const { page = 1 } = req.query;
  const limit = 10;

  let aiTools;

  if (req.query.search) {
    const query = {};
    query.name = { $regex: req.query.search?.trim(), $options: "i" };

    aiTools = await AiTool.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  if (!req.query.search) {
    console.log("Empty params executed");
    aiTools = await AiTool.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }
  res.status(200).json(aiTools);
};

const getAiToolById = async (req, res, next) => {
  console.log("getAiToolBye ID called");
  const slug = req.params.slug;

  const aiTool = await AiTool.find({ slug: slug });
  console.log(aiTool);

  if (aiTool.length === 0) {
    return res.status(404).json({ message: "AI tool not found" });
  }
  res.status(200).json(aiTool);
};

module.exports = { getAllAITools, getAiToolById };
