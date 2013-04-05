var view = {
    updateLeft: function(value) {
        $('#munge-result').text(value);
    },
};

$('#munge-form').submit(function() {
    var toMunge = $('#to-munge').val();
    newMungePresenter(munge, view).reactToChangedInput(toMunge);
    return false;
});
