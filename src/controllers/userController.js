const userService = require('../services/userService');

class UserController {
  async register(req, res) {
    try {
      const result = await userService.register(req.body);
      res.status(201).json(result);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
  async login(req, res) {
    try {
      const result = await userService.login(req.body);
      res.json(result);
    } catch (e) {
      res.status(401).json({ message: e.message });
    }
  }
}

module.exports = new UserController();
