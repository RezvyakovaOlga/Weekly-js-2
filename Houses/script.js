const housesPlace = document.getElementById ('placeForHouses')
const bucketsPlace = document.getElementById ('placeForBuckets')
const housesArray = []
const bucketsArray = []

class House {
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

    putOutTheFire () {

        this.isItOnFire = false;  
        this.HTMLtag.src = "./img/usual.png";

    }
}

class Bucket {
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

    // putOutTheFire (house) {

    //     house.isItOnFire = false;
    //     house.HTMLtag.src = "./img/usual.png" - не надо так делать
    // house.reset ()

    // }

}

function randomNum (from, to){
    return Math.floor(from + Math.random()*(to + 1 - from))
}

for (let i = 0; i < 10; i++) {

    housesArray.push (
        new House (
            false,
            document.createElement ('img'),
            "./img/usual.png",
        )
    )

    bucketsArray.push (
        new Bucket (
            false,
            document.createElement('img'),
            "./img/full.jpg",
            "images",
        )
    )

    const processVozgoraniya = window.setInterval(() => {
        //houses on fire
        housesArray[i].firing ();

        setTimeout (() => {
            //bucket appears
            bucketsArray[i].HTMLtag.style.visibility = "visible";

            setTimeout(() => {

                if (housesArray[i]) {
                //bucket disappears, house goes out 
                bucketsArray[i].HTMLtag.style.visibility = "hidden";
                housesArray[i].putOutTheFire();
                }
            }, 2000)

        }, 2000)
        
    }, randomNum (1000,9000));
       
        //add elements to arrays
        housesPlace.appendChild (housesArray[i].HTMLtag)
        bucketsPlace.appendChild (bucketsArray[i].HTMLtag)
        //styling for images from both arrays
        document.getElementsByTagName ('img')[i].style.width = "150px"
        document.getElementsByClassName("images")[i].style.width = "150px"
        document.getElementsByClassName("images")[i].style.visibility = "hidden"
    }
