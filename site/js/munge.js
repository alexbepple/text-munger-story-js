var munge = function(toMunge) {
    return 'foo' + toMunge;
};

function newMungePresenter(fn, view) {
    var fn = fn;
    var view = view;
    return {
        reactToChangedInput: function(input) {
            view.updateLeft(fn(input));
        },
    };
};

