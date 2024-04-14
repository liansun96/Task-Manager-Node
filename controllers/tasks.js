const Task = require("../models/Task");

// const getAllTasks = async (req, res) => {
//   const tasks = await Task.find({});

//   res.status(200).send({ tasks });
// };

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks  , amount : tasks.length});
  // res.status(200).json({ status : "success" , data : {tasks , nbHits : tasks.length}});
});

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error})
  }
};

const getSingleTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res.status(404).send(`No task with id ${taskId}`);
  }
  res.json({ task });
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
