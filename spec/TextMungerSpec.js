describe('munge', function() {
    it('prepends "foo"', function() {
        expect(munge('bar')).toBe('foobar');
    });
});

describe('MungePresenter', function() {
    it('updates left view', function() {
        var stubFunction = jasmine.createSpy('calculation').andReturn('bar');
        var view = jasmine.createSpyObj('', ['updateLeftView']);
        var presenter = newMungePresenter(stubFunction, view);

        presenter.reactToChangedInput('foo');

        expect(stubFunction).toHaveBeenCalledWith('foo');
        expect(view.updateLeftView).toHaveBeenCalledWith('bar');
    });
});

