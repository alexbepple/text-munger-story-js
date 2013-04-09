var view = {
    updateLeftView: function(value) {
        $('#munge-result').text(value);
    },
    updateRightView: function(value) {
        $('#munge-result2').text(value);
    }
};

$('#munge-form').submit(function() {
    var toMunge = $('#to-munge').val();
    newMungePresenter(munge, view).reactToChangedInput(toMunge);
    return false;
});
