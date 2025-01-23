export const validateUserInput = (req, res, next) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).json({ message: "Name, email, and age are required" });
    }
    if (!Number.isInteger(age) || age <= 0) {
      return res.status(400).json({ message: "Age must be a positive number" });
    }
    next();
  };