const bucketsPlace = document.getElementById ('placeForBuckets')
const bucketsArray = []

class bucket {
    constructor (

        ifThereIsWater = false,
        //tag inside div
        HTMLel = null,
        //picture
        src = "",
        //count clicks
        clickCounter = Number,

    ) {
        this.ifThereIsWater = ifThereIsWater;
        this.HTMLel = HTMLel;
        this.src = src;
        this.clickCounter = clickCounter;

        this.HTMLel.src = src;
        
    }

    pourWater () {
        this.ifThereIsWater = true;
        this.src = "./img/full.jpg";
        //new image especially for img el
        this.HTMLel.src = "./img/full.jpg";
        this.clickCounter = 1;
    }
}

for (let i = 0; i < 5; i++) {
    //create new array with backets
    bucketsArray.push (
        new bucket (
            false,
            document.createElement ('img'),
            "./img/empty.jpg",
            0
        )
    )

    bucketsArray[i].HTMLel.addEventListener ('click', function () {
  
        if (bucketsArray[i].clickCounter === 1) {
            bucketsArray[i].clickCounter = 2;
            alert ("Don't you see? There is already water in the bucket")
        }

        else if (bucketsArray[i].clickCounter === 0) {
            //call pouring function
            bucketsArray[i].pourWater ()
        }

        else if (bucketsArray[i].clickCounter === 2) {
            document.getElementsByTagName ('img')[i].style.visibility = "hidden";
        }
    })
    //add array to special place
    bucketsPlace.appendChild (bucketsArray[i].HTMLel)
    //styling backet
    document.getElementsByTagName ('img')[i].style.width = "200px"

}

// console.log (bucketsArray)
