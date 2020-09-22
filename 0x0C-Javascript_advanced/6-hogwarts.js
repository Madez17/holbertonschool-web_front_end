function studentHogwarts() {
    var privateScore = 0;
    var name = null;

    let changeScoreBy = (points) => {
        privateScore = points + privateScore;
    }

    return {
        setName: (newName) => { name = newName },
        rewardStudent: () => { changeScoreBy(1) },
        penalizeStudent: () => { changeScoreBy(-1) },
        getScore: () => name + ': ' + privateScore
    }
}
var harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

var draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());