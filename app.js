$(document).ready(function() {
    $('#submit-form').on('submit', (e) => {
        e.preventDefault();

        let nameMovie = $('#movie').val();
        let rating = $('#rating').val();

        let results = '<p> Movie:' + nameMovie + '</p><p> rate:' + rating + '</p>';
         results += '<button id="removeBtn">remove</button>';
         $('#resultShown').html(results);


         $('#removeBtn').on('click', () => {
            $("#resultShown").fadeOut('500', () => {
                $(this).remove();
            })
         })
    })
})