export const postApiSharedVariable = {
    statusValue:200,
    resolve: true,
    success: true
}
const mockData = {
  status: postApiSharedVariable.statusValue,
  data:
  {
    success: true,
    post: []
  },
};

const PostAPI = jest.fn(() => {
  return new Promise((resolve, reject) => {
    if (postApiSharedVariable.resolve) {
      mockData.status = postApiSharedVariable.statusValue;
      mockData.data.success = postApiSharedVariable.success;
      return resolve(mockData);
    } else {
      return reject({});
    }
  });
});

export { PostAPI };