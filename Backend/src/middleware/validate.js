import ApiError from '../utils/ApiError.js';

export default function validate(schema) {
  return (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const messages = result.error.errors.map(e => e.message).join(', ');
      return next(ApiError.badRequest(messages));
    }
    req.validatedBody = result.data;
    next();
  };
}
