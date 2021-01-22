

  // https://github.com/Forhad9/assignment-3



//................ (01)kilometerToMeter..........//

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return 'Enter a positive number';
    }
    else {
        var Meter = kilo * 1000;
    }
    return Meter;
}


//...............  (02)budgetCalculator........//

function budgetCalculator(watch, phone, laptop) {
    if (watch, phone, laptop < 0) {
        return 'Product items should be positive value';
    }

    else {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var totalAmount = watch + phone + laptop;
    }


    return totalAmount;
}



//.................. (03)HotelCost...........//

function hotelCost(hotelReservationDay) {
    var totalCost = 0;
    if (hotelReservationDay <= 10) {
        totalCost = hotelReservationDay * 100;                //Because as per day reserve cost 100tk first 1-10 days
    }
    else if (hotelReservationDay <= 20) {
        var fristTenDays = 10 * 100;
        var remainingResevationDay = hotelReservationDay - 10;
        var secondTenDays = remainingResevationDay * 80;      // between 11-20 days hotel cost specify 80tk per days
        totalCost = fristTenDays + secondTenDays;

    }
    else {
        var fristTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingResevationDay = hotelReservationDay - 20;
        var furtherDays = remainingResevationDay * 50;         // 21-up to days hotel cost 50TK

        totalCost = fristTenDays + secondTenDays + furtherDays;

    }
    return totalCost;
}




//.......... (04)Megafriend..........//

var friendList = ["Rony hawladar", "Anil khan", "Tapos", "Sornali sornaa", "Oisi", "Niloy"];

function megaFriend(friendList) {
    var largestCharacter = 0;

    for (var i = 0; i < friendList.length; i++) {
        if (friendList[i].length > largestCharacter) {
            var largestCharacter = friendList[i].length;
            var largestCharacterName = friendList[i];

        }
    }
    return largestCharacterName;
}

