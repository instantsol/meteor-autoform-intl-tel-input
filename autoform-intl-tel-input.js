AutoForm.addInputType("intlTelInput", {
  template: "afIntlTelInput",
  valueIn: function(val) {
    //will convert to display value later after set / extend opts
    var tpl = Template.instance();
    console.log("DELETEME: valueIn?? 2", tpl.data.name);
    $("#mobileNumber"+tpl.data.name).intlTelInput("setNumber", val);
    return val;
  },
  valueOut: function() {
    console.log("DELETEME: valueOut1 ?? ", this);
    var tpl = Template.instance();
    var phoneNumber = $(this.context).intlTelInput("getNumber");
    console.log("DELETEME: valueOut??", phoneNumber);
    console.log("DELETEME: valueOut??", this);
    return phoneNumber;
  }
});


// Write your package code here!

Template.afIntlTelInput.helpers({
    name: function(){
        console.log("DELETEME: THIS ??", this);
        return this.name;
    },
  //fix to avoid error for passed in object
  // - https://github.com/aldeed/meteor-autoform-bs-datepicker/issues/3
  // - https://github.com/aldeed/meteor-autoform-bs-datepicker/commit/3977aa69b61152cf8c0f731a11676b087d2ec9df
  atts: function() {
    var atts =EJSON.clone(this.atts);
    delete atts.opts;
    return atts;
  },
  classes: function() {
    return Template.instance().classes.get();
  }

});
Template.afIntlTelInput.onRendered(function(){
    console.log("DELETEME: THIS ->",this);
    console.log("DELETEME: DATA ->",this.data);
    $("#mobileNumber"+this.data.name+" input").intlTelInput({
        geoIpLookup: function(callback) {
            $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        defaultCountry: "auto",
        numberType:  "MOBILE",
        preferredCountries: ["br"],
        utilsScript: "js/utils.js",
        autoFormat: true,
    });
});
