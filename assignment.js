


// (01)

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return 'Enter a positive number';
    }
    else {
        var Meter = kilo * 1000;
    }
    return Meter;
}



//  (02)























    // (03)

  function hotelCost(hotelReservation){
      var totalCost = 0;
      if(hotelReservation <= 10){
          totalCost = hotelReservation * 100;                //(Because as per day reserve cost 100tk first 1-10 days)
      }
      else if(hotelReservation <= 20){
          var fristTenDays = 10 * 100;
          var remainingResevation = hotelReservation - 10;
          var secondTenDays = remainingResevation * 80;      // (between 11-20 days hotel cost specify 80tk per days)
          totalCost = fristTenDays + secondTenDays;

      }
      else{
        var fristTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingResevation = hotelReservation - 20;
        var thirdTenDays = remainingResevation * 50;       //(Per day cost 50TK after 21--up to)

        totalCost = fristTenDays + secondTenDays + thirdTenDays;
          
      }
      return totalCost;
  }



    // (04)

var friendList = ["Rony hawladar", "Anil khan", "Tapos", "Sornali sornaa", "Oisi", "Niloy"];

function megaFriend(friendList) {
    var maxLength = 0;

    for (var i = 0; i < friendList.length; i++) {
        if (friendList[i].length > maxLength) {
            var maxLength = friendList[i].length;
            var largestCharacterName = friendList[i];

        }
    }
    return largestCharacterName;
}
