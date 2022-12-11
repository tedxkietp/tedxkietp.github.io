jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({ until: new Date(2021, 11, 11, 14) }); // year, month, date, hour
  });
});
