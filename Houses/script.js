const housesPlace = document.getElementById ('placeForHouses')
const bucketsPlace = document.getElementById ('placeForBuckets')
const housesArray = []
const bucketsArray = []

class house {
    constructor (

        isItOnFire = false,
        HTMLtag = null,
        src = "",

    ) {

        this.isItOnFire = isItOnFire;
        this.HTMLtag = HTMLtag;
        this.src = src;

        this.HTMLtag.src = src;

    }

    firing () {

        this.isItOnFire = true;
        this.src = "./img/fire.jpg";
        this.HTMLtag.src = "./img/fire.jpg";
    }

}

class bucket {
    constructor (

        isItOnScreen = false,
        HTMLtag = null,
        src = "",
        className = ""

    ) {

        this.isItOnScreen = isItOnScreen;
        this.HTMLtag = HTMLtag;
        this.src = src;
        this.className = className;

        this.HTMLtag.src = src;
        this.HTMLtag.className = className;

    }

    putOutTheFire () {

        this.isItOnScreen = true;

    }

}

function randomNum (from, to){
    return Math.floor(from + Math.random()*(to + 1 - from))
}

for (let i = 0; i < 10; i++) {

    housesArray.push (
        new house (
            false,
            document.createElement ('img'),
            "./img/usual.png",
        )
    )

    bucketsArray.push (
        new bucket (
            false,
            document.createElement('img'),
            "./img/full.jpg",
            "images",
        )
    )

    // if (bucketsArray[i].isItOnScreen === true) {
    //         document.getElementsByClassName("images")[i].style.visibility = "visible"
    //     }

    window.setTimeout(() => {
        housesArray[i].firing ();
        bucketsArray[i].putOutTheFire ();
        document.getElementsByClassName("images")[i].style.visibility = "visible";
        housesArray[i].isItOnFire = false;
        console.log (housesArray[i].isItOnFire)
        }, randomNum (1000,9000));
     
    // if (housesArray[i].isItOnFire === true) {
    //     bucketsArray[i].putOutTheFire ();
    //     housesArray[i].isItOnFire = false
    // }
              
        //add elements to arrays
        housesPlace.appendChild (housesArray[i].HTMLtag)
        bucketsPlace.appendChild (bucketsArray[i].HTMLtag)
        //styling for images from both arrays
        document.getElementsByTagName ('img')[i].style.width = "150px"
        document.getElementsByClassName("images")[i].style.width = "150px"
        document.getElementsByClassName("images")[i].style.visibility = "hidden"
    }