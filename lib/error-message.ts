export function getErrorMessage(
  message: string
) {
  if (
    message.includes(
      "Transaction API error"
    )
  ) {
    return "The server is busy. Please try again.";
  }

  if (
    message.includes(
      "Network"
    )
  ) {
    return "Please check your internet connection.";
  }

  if (
    message.includes(
      "Unauthorized"
    )
  ) {
    return "Please login again.";
  }

  return message;
}