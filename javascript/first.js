//log all even numbers from 1-200
const getAllEvenNum = () => {
    const num = 200;
    for(let i = 1; i <= num; i ++) {
        if(1 % 2 === 0) {
            console.log(i)
        }
    }

};

//log all odd numbers from 1-200
const getAllOddNum = () => {
    const num = 200;
    for(let i = 1; i<= num; i++) {
        if(i %2 !==0) {
            console.log(i)
        }
    }
};
//my name
const myName = 'chimeziesolomon';

//array of my courses
const myCourse = ['html', 'css', 'javascript'];
// check if array length is odd or even num
checkIfCourseIsEvenOrOdd = ((course) => {
    if(course.length % 2 === 0) {
        console.log(getAllEvenNum())
    } else {
        console.log(getAllOddNum())
    }
})(myCourse);