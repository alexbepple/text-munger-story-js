describe('munge', function() {
    it('prepends "foo"', function() {
        expect(munge('bar')).toBe('foobar');
    });
});

describe('MungePresenter', function() {
    var view, stubFunction, presenter;
    beforeEach(function() {
        stubFunction = jasmine.createSpy('calculation').andReturn('bar');
        view = jasmine.createSpyObj('', ['updateLeftView', 'updateRightView']);
        presenter = newMungePresenter(stubFunction, view);
        presenter.reactToChangedInput('foo');
    });
    it('passes changed input to calculation', function() {
        expect(stubFunction).toHaveBeenCalledWith('foo');
    });
    describe('updates calculation result', function() {
        it('in left view', function() {
            expect(view.updateLeftView).toHaveBeenCalledWith('bar');
        });
        it('in right view', function() {
            expect(view.updateRightView).toHaveBeenCalledWith('bar');
        });
    });
});

