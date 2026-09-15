const mockApiResponse = {
  status: 201,
  success: true,
  data: {
    id: "usr_9f8a7c6b5a4",
    username: "johndoe",
    profile: {
      first_name: "John",
      last_name: "Doe"
    }
  }
};

const response = {
  json: async () => mockApiResponse
};

const res = await response.json();

console.log(res);
