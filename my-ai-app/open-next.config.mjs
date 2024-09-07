/** @type {import('open-next/types/open-next.js').OpenNextConfig} */
const config = {
  default: {
    override: {
      wrapper: 'aws-lambda-streaming', // This enables lambda streaming
    },
  },
};

export default config;
