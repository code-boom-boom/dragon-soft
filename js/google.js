
$('#form-submit').on('click', function (e) {
    e.preventDefault();
    let name = $('#field-1').val();
    let email = $('#field-2').val();
    let subject = $('#field-3').val();
    let phone = $('#field-4').val();
    let message = $('#field-5').val();
    if (!name) {
        alert('Name is required!');
        return;
    }
    if (!email) {
        alert('Email is required!');
        return;
    }
    if (!subject) {
        alert('Subject is required!');
        return;
    }
    if (!phone) {
        alert('Phone is required!');
        return;
    }
    if (!message) {
        alert('Message is required!');
        return;
    }
    $("#loading-mask").css('display', 'block');
    $(".loader-wrapper").css('display', 'block');
    setTimeout(() => {
        $("#loading-mask").css('display', 'none');
        $(".loader-wrapper").css('display', 'none');
        alert('Message sent! We will get back to you shortly.');
    }, 5000);
});