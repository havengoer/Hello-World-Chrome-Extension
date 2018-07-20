
$(document).on('ready', () => {
  const array = [{img: "./client/1.jpg", place: "Eiffel Tower", fact: "Fun fact: The Eiffel Tower was built as the entrance for the 1889 World Fair, whih celebrated the 100-year anniversary of the storming of the Bastille. Construction on the project continued until the day before the fair, and even then, fairgoers were only allowed up to the second floor."}, 
                {img: "./client/2.jpg", place: "Hadar, Ethiopia", fact: "Fun fact: On November 30, 1974, paleontologists discovered almost half of the three million-year old skeleton of Lucy, a hominid considered to be one of man's oldest relatives. She was named as such because the night the researchers found her, they were listening to a Beatles' album and were inspired by the song 'Lucy in the Sky with Diamonds'." }, 
                {img: "./client/3.jpg", place: "Byodoin Temple", fact: "Fun fact: Uji bridge, one of the oldest in Japan, is featured in The Tale of Genji, a novel written by a Japanese noblewoman in the 11th century. THe Tale of Genji is often considered the world's first novel."},
                {img: "./client/montreal.jpg", place: "Montreal, Canada", fact: "Fun fact: Montreal has the 2nd highest number of restaurants per capita in North America (New York City has the most). Poutine, smoked meat, and famed Canadian maple syrup are top picks in this city."},
                {img: "./client/golconda.jpg", place: "Golconda, India", fact: "Fun fact: Between 1500 & 1700, Golconda became the world’s largest diamond-cutting and diamond trading center. It wasn’t close to diamond mines but gained this status because it was located on a major trade route from mines to the south and east."},
                {img: "./client/naples.jpg", place: "Naples, Italy", fact: "Fun fact: When most people think of Naples, they think of stunning sights of Mt. Vesuvius. However, what they may not realize is that Mount Vesuvius is still active, and in 2016, the Italian government evacuated surrounding areas in fear of an eruption."},
                {img: "./client/stpetersburg.jpg", place: "St. Petersburg, Russia", fact: "Founded by Tsar Peter the Great in 1703, Saint Petersburg was built entirely by Swedish prisoners from the Great Northern War. Many famous Russian authors despised the city due to Peter the Great’s ambition to model it after other non-Russian European cities such as Venice and Amsterdam."},
                {img: "./client/venice.JPG", place: "Venice Beach, California", fact: "Many half-nude men enjoy playing beach volleyball on their lunch break."},
                {img: "./client/lagos.jpg", place: "Lagos, Nigeria", fact: "Blessing is from Lagos. Yay Lagos!"}];

  console.log ("hi!");
  // CHANGES THE BACKGROUND IMAGE, FACTS, PLACE, AND THE SEARCH QUERY
  let i = 0;
  $('#change-right').click(function () {
    console.log(array[i], "right", i);
    $('p').html(array[i].fact);
    $('#location').html(array[i].place);
    $("a").attr("href", "https://earth.google.com/web/search/" + array[i].place)
    $('body').css('background-image', 'url(' + array[i].img + ')');
    i++;
  // go back to 0 to loop back
  if (i == array.length ) {
    i = 0;
  }

  


  });

  $('#change-left').click(function () {
    if (i < 0) {
      i = array.length -1;
    }
    console.log(array[i], "left", i);
    $('p').html(array[i].fact);
    $('#location').html(array[i].place);
    $("a").attr("href", "https://earth.google.com/web/search/" + array[i].place)
    $('body').css('background-image', 'url(' + array[i].img + ')');
    i--;
  // go back to 0 to loop back
  

  


  });
// CHANGES THE BACKGROUND IMAGE
  $('#submit').click(function () {
    const $placeToSee = $('input[name="text"]').val(); 
    console.log($placeToSee);
    window.open(
      'https://earth.google.com/web/search/' + $placeToSee,
      '_blank' // <- This is what makes it open in a new window.
    );

  })
// OPENS THE SEARCH MODAL
  $('#close').click(function () {
    $("#query").hide();
  });

  $('#question').click(function () {
    $("#query").show();
    console.log("here at question mark");
  });

  
  });

  