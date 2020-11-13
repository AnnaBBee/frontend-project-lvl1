import promptly from 'promptly';

const getName = async () => {
    const name = await promptly.prompt(console.log('May I have your name?'));
    console.log(`Hello, ${name}!`);
  };

  export default getName;
