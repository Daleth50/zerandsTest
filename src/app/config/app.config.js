const token = "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";
const config = {
  api: {
    url: "https://api.github.com/",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: "Bearer " + token,
    },
  },
};
export default config;
