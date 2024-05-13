const getRandomNumberInRange = (): number => {
    return Math.floor(Math.random() * 101);
};

const randomInRange = getRandomNumberInRange();
console.log(randomInRange);