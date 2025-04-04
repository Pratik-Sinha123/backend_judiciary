const {
  register,
  updateRegistrar,
  createJudge,
  createLawyer,
  createCase,
  createCourt,
  login,
  updateCourt,
  getSchedule,
  assignDate,
  caseSummery,
  getCompleteDetails,
  closeCase,
  getPendingCases,
  getTodayCases,
  getScheduledCases,
  casesView,
  searchByKeyword,
} = require("../Services/Registrar.service");

exports.register = async (req, res) => {
  try {
    const result = await register(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerJudge = async (req, res) => {
  try {
    const result = await createJudge(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerLawyer = async (req, res) => {
  try {
    const result = await createLawyer(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRegistrar = async (req, res) => {
  try {
    const result = await updateRegistrar(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerCase = async (req, res) => {
  try {
    const result = await createCase(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerCourt = async (req, res) => {
  try {
    const result = await createCourt(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await login(req.body.email, req.body.password);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCourt = async (req, res) => {
  try {
    const result = await updateCourt(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const result = await getSchedule(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.assignDate = async (req, res) => {
  try {
    const result = await assignDate(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addSummery = async (req, res) => {
  try {
    const result = await caseSummery(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCompleteDetails = async (req, res) => {
  try {
    const result = await getCompleteDetails(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.closeCase = async (req, res) => {
  try {
    const result = await closeCase(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPendingCases = async (req, res) => {
  try {
    const result = await getPendingCases(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTodayCases = async (req, res) => {
  try {
    const result = await getTodayCases(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getScheduledCases = async (req, res) => {
  try {
    const result = await getScheduledCases(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.casesView = async (req, res) => {
  try {
    const result = await casesView(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchByKeyword = async (req, res) => {
  try {
    const result = await searchByKeyword(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
