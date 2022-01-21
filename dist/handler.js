const trigger = (event) => {
  return {
    headers: {
      "Content-Type": "text.html",
    },
    body: "<html><head><title>Hello World<title></head><body>Hello World</body></html>",
    statusCode: 200,
  };
};
