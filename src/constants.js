'use strict';

module.exports.DEFAULT_COMMAND = `--help`;

module.exports.USER_ARGV_INDEX = 2;

module.exports.ExitCode = {
  error: 1,
  success: 0,
};

module.exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports.API_PREFIX = `/api`;

module.exports.MAX_ID_LENGTH = 6;

module.exports.MAX_COMMENTS = 4;

module.exports.PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

module.exports.PageSettings = {
  DEFAULT: 1,
  MAX_ELEMENT: 4,
  LIMIT_PAGINATE: 5,
}
