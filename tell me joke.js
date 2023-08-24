const joke_list = [`What did the horse say after it tripped?<br>
Help! Ive fallen and I cant giddyup!`,

    `Why cant you hear a pterodactyl going to the bathroom?<br>
    Because the “P” is silent.`,

    `What do you call a well-balanced horse?<br>
    Stable.`,

    `What do you call an angry carrot?<br>
    A steamed veggie.`,

    `I ordered a chicken and an egg online.<br>
    Ill let you know what comes first.`,

    `Whats the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle?<br>
    Attire`,

    `What has more lives than a cat?<br>
    A frog, because it croaks every day.`,

    `What is the first thing a man puts in a woman when they get married?<br>The wedding ring.`,

    `What's the difference between kinky and perverted?<br>
    Kinky is when you tickle your girlfriend with a feather, perverted is when you use the whole bird.`,

    `How do you make a pool table laugh?<br>
    Tickle its balls`,

    `A naked man broke into a church.<br>
    The police chased him around and finally caught him by the organ.`,

    `Why shouldn't you use a broken pencil?<br>
    Because it's pointless.`,

    `How is playing bridge similar to sex?<br>
    If you don't have a good partner, you better have a good hand.`,

    `Why did the sperm cross the road?<br>
    Because I put on the wrong sock this morning.`,

    `What did the tomato say to the other tomato during a race?<br>
Ketchup.`,

    `What did one wall say to the other?<br>
"I'll meet you at the corner."`,

    `Why do seagulls fly over the sea?<br>
If they flew over the bay, they would be bagels.`,

    `I lost an electron.<br>
You really have to keep an ion them!`,

    `Why do mushrooms get invited to all the parties?<br>
Because they are such fungis.`,

    `Why shouldnt you tell secrets in a cornfield?<br>
Too many ears.`,

    `What does a spy do when he is cold?<br>
He goes undercover.`,

    `How does the moon cut his hair?<br>
Eclipse it.`,

    `When do computers overheat?<br>
When they need to vent.`,

    `Why did the scarecrow win an award?<br>
Because he was outstanding in his field.`,

    `If athletes get athletes foot, what do elves get?<br>
Mistle-toes.`]

const arr_length = joke_list.length;

const joke_box = document.getElementById('jokes');
const joke_btn = document.getElementById('joke-btn');
const pre_btn = document.getElementById('pre-btn');

let JokeGenerator = -1;

const jokes = () => {
    if (JokeGenerator < arr_length) {
        JokeGenerator++;
        joke_box.innerHTML = joke_list[JokeGenerator];
        joke_btn.innerHTML = ("Tell Another Joke");
        pre_btn.innerHTML = ("Previous Joke");

        
    }

    else if (JokeGenerator == arr_length) {
        joke_box.innerHTML = ('<code>Sorry, all the jokes are finished which is available in our data !!!<br>thank you for visiting and reading the jokes.</code>');
    }
    // console.log("current : "+ JokeGenerator)
}

const prev_btn = () => {

   if (JokeGenerator <= 0) {
        console.log("there is no joke")
        joke_box.innerHTML = "<code>No content available in previous side. Click the \"Tell Me Joke\" button to see the joke...</code>";
    }

    else {
    JokeGenerator--;
    joke_box.innerHTML = joke_list[JokeGenerator];
    }

    // console.log(JokeGenerator)
}