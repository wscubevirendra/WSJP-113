

// success response
const sendSuccess = (res, message = "Success", data = {}) => {
  return res.status(200).json({
    success: true,
    message,
    data
  });
};

// created response
const sendCreated = (res, message = "Created successfully", data = {}) => {
  return res.status(201).json({
    success: true,
    message,
    data
  });
};

// updated response
const sendUpdated = (res, message = "Updated successfully", data = {}) => {
  return res.status(200).json({
    success: true,
    message,
    data
  });
};

// deleted response
const sendDeleted = (res, message = "Deleted successfully") => {
  return res.status(200).json({
    success: true,
    message
  });
};

// all fields required
const sendAllFieldsRequired = (res, message = "All fields are required") => {
  return res.status(400).json({
    success: false,
    message
  });
};

// not found
const sendNotFound = (res, message = "Resource not found") => {
  return res.status(404).json({
    success: false,
    message
  });
};


// not found
const sendAlreadyExist = (res, message = "Data already exists") => {
  return res.status(409).json({
    success: false,
    message
  });
};

// server error
const sendServerError = (res, error) => {
  console.error(error); // log internally
  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
};

module.exports = {
  sendSuccess,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAllFieldsRequired,
  sendNotFound,
  sendServerError,
  sendAlreadyExist
};
