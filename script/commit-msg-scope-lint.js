const fs = require('fs');
const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8');

const fixFeatCommit =  /(^fix|^feat)/;

const pattern = /\(\w+|\s+\):/;

if (fixFeatCommit.test(commitMsg) && !pattern.test(commitMsg)) {
  console.log('fix和feat类提交信息中应加上scope\n');
  process.exit(1);
}
process.exit(0);