
export const setResponse = (data, response) => {
    response.status(200).json(data);
};
  
export const setErrorResponse = (errorCode, errorMessage, response) => {
    response.status(errorCode).send();
};
  