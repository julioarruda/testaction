const core = require('@actions/core');
const github = require('@actions/github');

try{
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

    const time = (new Date()).toString();
    core.setOutput("time", time);

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log('The Event Payload: ${payload}');
}
catch (error){
    core.setFailed(error.message);
}
