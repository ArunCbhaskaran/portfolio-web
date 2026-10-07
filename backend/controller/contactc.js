import contactm from "../model/contactm.js";
export const contactc = async (req, res) => {
  try {
    const { name, gmail, message } = req.body;
    if (!name || !gmail || !message) {
      return res.status(403).json({ message: "feild is required" });
    }

    const contact = await contactm.create({ name, gmail, message });
    return res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
      error: error.message,
    });
  }
};
