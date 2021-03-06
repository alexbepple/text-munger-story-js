var munge = function(toMunge) {
    return 'foo' + toMunge;
};

var newMungePresenter = function(fn, view) {
    var reactToChangedInput = function(input) {
        view.updateLeftView(fn(input));
        view.updateRightView(fn(input));
    };
    return {
        reactToChangedInput: reactToChangedInput
    };
};

