export const loginUser = (req, res) => {
  res.json({ message: "Login Sucessfully" });
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logout Sucessfully" });
};

export const resetUser = (req, res) => {
  res.json({ message: "Password Changed" });
};

export const deleteUser = (req, res) => {
  res.json({ message: "User Removed" });
};
