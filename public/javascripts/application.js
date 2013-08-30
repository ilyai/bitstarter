(function() {

  function getDonations() {
    return $.getJSON("/donations");
  }

  jQuery(function($) {
    getDonations().done(function(donations) {
      $("#backers").text(donations.length);
      var amount = donations.reduce(function(x,y) {
        if ($.isPlainObject(x) && $.isPlainObject(y)) {
          return x.amount + y.amount;
        } else {
          return 0;
        }
      }, 0);
      $("#amount").text(amount);
    }).fail(function(xhr, status, error) {
      console.error("Could not fetch donations: " + error);
    });
  });

})();
