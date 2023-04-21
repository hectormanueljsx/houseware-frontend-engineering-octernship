export const validator = text => {
  if (text === '') {
    return {
      error: true,
      message: 'Please enter a text string',
    };
  }

  if (text.includes(' ')) {
    return {
      error: true,
      message: 'Please enter a text string without spaces',
    };
  }

  if (!/^[a-zA-Z]+$/.test(text)) {
    return {
      error: true,
      message: 'Please enter a text string with only letters',
    };
  }

  if (text.length < 2) {
    return {
      error: true,
      message: 'Please enter a text string with at least 2 letters',
    };
  }

  return {
    error: false,
    message: '',
  };
};
