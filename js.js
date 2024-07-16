      let hour = 18;
      if (hour >= 6 && hour < 12) console.log("Good Morning");
      else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
      else console.log("Good Evening");

      let x = 4;
      let y = 3;
      let z = 10;
      let w = 12;
      console.log("4>3", x > y);
      console.log("4<3", x < y);
      console.log("4>=3", x >= y);
      console.log("4<=3", x <= y);
      console.log("4=4", x == x);
      console.log("4>3 & 10<12", x > 3 && z < w);
      console.log("4+3 != 10+12", x + y != z + w);
      console.log("4>3 or 10>12", x > y || z > w);
      console.log("4<3 or 10>12", x < y || z > w);

      // Exercise

      function isLeap(year) {
        if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
          console.log(year + " is a leap year");
        } else {
          console.log("False");
        }
      }
      isLeap(2000);

      // Function With Function

      function calculateAverage(x, y, z) {
        return (x + y + z) / 3;
      }

      const age = calculateAverage(23, 44, 56);
      console.log(age);