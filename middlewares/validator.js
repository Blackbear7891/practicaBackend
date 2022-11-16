import { body, validationResult } from "express-validator"

export const validator = (req, res, next) => {
    [
        body("email", "Formato de email incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Formato de password incorrecto")
            .trim()
            .isLength({ min: 6 })
    ]
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }
    next();
}