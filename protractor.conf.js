exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://juliemr.github.io',
  specs: ['./spec/**/*.js']
};
