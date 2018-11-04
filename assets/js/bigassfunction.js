function simpleLibrary(library, image, hours, seats, capacity, day, sound, food) {
    if (sound) {
    soundimage = 'https://i.imgur.com/d4fQUV5.png';
    } else {
    soundimage = 'https://i.imgur.com/QuEuwB4.png';
    }
    if (food) {
    foodimg = 'https://i.imgur.com/J896HT9.png';
    } else {
    foodimg = 'https://i.imgur.com/eZpInTj.png';
    }
    var text = '<img src =' + image + ' width = "100%" height = "auto"><p style = "text-align: left; line-height: 5px;"><span style="font-size: 13pt; font-family: "book antiqua", palatino;"><strong>&nbsp;&nbsp;&nbsp;' + library + '&nbsp;</strong></span></p><p style = "text-align: left;line-height: 5px;"><span style="font-size: 10pt; font-family: "book antiqua", palatino;">&nbsp;&nbsp;&nbsp;&nbsp;<img src =' + soundimage + ' width = "7%" height = "auto">&nbsp;<img src = ' + foodimg + ' width = "7%" height = "auto">&nbsp;'+ day + '&nbsp;Hours: ' + hours + '</p><p style = "text-align: left;line-height: 10px;"><span style="font-family: "book antiqua", palatino;"><strong>&nbsp;&nbsp;&nbsp;Open Seats:&nbsp;' + seats + '&nbsp;</strong></span></p><p style = "text-align: left;line-height: 5px;"><span style="font-family: "book antiqua", palatino;"><strong>&nbsp;&nbsp;&nbsp;Capacity:&nbsp;' + capacity + '%&nbsp;full</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="submit" onclick="seeMore()">See More</button></span></p>';
    return text;
}