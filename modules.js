import lottieweb from 'https://cdn.skypack.dev/lottie-web';

let state = 'play';


function sumArray(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

function isOnPlay() {
    const allAudioElements = document.getElementsByTagName('audio');

    for (let i = 0; i < allAudioElements.length; i++) {
        const song = allAudioElements[i];

        if (!song.paused) {
            console.log("The web is playing audio right now!");
            return true;
        } else {
            console.log("The web is on silence.")
        }
    }
}


// let buttonStates = [0, 0];



function playButton(id, id2, idNumber) {

    const playIconContainer = document.getElementById(id);
    const trackContainer = document.getElementById(id2)

    console.log(playIconContainer);

    let animation = lottieweb.loadAnimation({
        container: playIconContainer,
        path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: 'Demo Animation',
    });

    animation.goToAndStop(14, true);

    function stopMusic() {

        const allAudioElements = document.getElementsByTagName('audio');

        for (let i = 0; i < allAudioElements.length; i++) {
            const audioPlay = allAudioElements[i];

            if (!audioPlay.paused) {

                // console.log('Stop music is running!')

                let containerSound = audio.nextElementSibling;
                const elementId = containerSound.id;
                console.log(elementId);
                // containerSound.innerHTML = '';

                // let animation2 = lottieweb.loadAnimation({
                //     container: containerSound,
                //     path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
                //     renderer: 'svg',
                //     loop: false,
                //     autoplay: false,
                //     name: 'Demo Animation',
                // });

                // animation2.goToAndStop(14, true);

                audioPlay.pause();
                buttonStates[i] = 1;
                // console.log(containerSound);
                // animation2.playSegments([0,14], true);


                // console.log(i);

                break;

            }
        }
    }

    // const audio = document.querySelector('audio')
    let audio = trackContainer.querySelector('audio');
    playIconContainer.addEventListener('click', () => {

        if (state === 'play') {
         audio.play();
         animation.playSegments([14, 27], true);
         state = 'pause'
         console.log(state);
     } else {
         audio.pause();
         state = 'play';
         animation.playSegments([0,14], true);
         console.log('statement2');
        }
 })
}

playButton('play-icon1', 'track1', 1);
playButton('play-icon2', 'track2', 2);
playButton('play-icon3', 'track3', 3);
playButton('play-icon4', 'track4', 4);
playButton('play-icon5', 'track5', 5);
playButton('play-icon6', 'track6', 6);
playButton('play-icon7', 'track7', 7);
playButton('play-icon8', 'track8', 8);
playButton('play-icon9', 'track9', 9);
playButton('play-icon10', 'track10', 10);

