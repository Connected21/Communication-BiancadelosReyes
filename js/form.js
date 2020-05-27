$(document).ready(function(){

    var $continue = $('.container form #continue');
    var customerInfo = {};
    $continue.click(function(){
        var $name = $('.container form #name').val();
        var $address = $('.container form #city').val();
        var $city = $('.container form #city').val();
        var $prov = $('.container form #prov').val();
        var $country = $('.container form #country').val();
        var $mobile = $('.container form #mobile').val();
        var $email = $('.container form #email').val();


        customerInfo = {
            custName : $name,
            custAddress : $address,
            custCity : $city,
            xutsProvince : $prov,
            custCountry : $country,
            custMobileNumber : $mobile,
            custEmail : $email
        };
        var custInfo = null;
        console.log(customerInfo.custName);
        localStorage.setItem('customer', JSON.stringify(customerInfo));
        custInfo = JSON.parse(localStorage.getItem("customer"));

        console.log(custInfo);

    });
});